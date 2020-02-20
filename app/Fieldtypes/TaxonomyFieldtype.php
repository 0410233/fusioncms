<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Fieldtypes;

use File;
use App\Models\Field;
use App\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use App\Http\Resources\TermResource;

class TaxonomyFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Taxonomy';

    /**
     * @var string
     */
    public $icon = 'sitemap';

    /**
     * @var string
     */
    public $description = 'Relate and organize under a taxonomy.';

    /**
     * @var array
     */
    public $settings = [
        // 
    ];

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'App\Models\Taxonomies';

    /**
     * Generate relationship methods for associated Model.
     *
     * @param  App\Models\Field $field
     * @return string
     */
    public function generateRelationship($field)
    {
        $model     = Taxonomy::find($field->settings['taxonomy']);
        $namespace = $this->namespace . '\\' . Str::studly($model->handle);
        $stub      = File::get(resource_path("stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => $model->handle . '_id',
            '{related_namespace}' => $namespace,
            '{related_table}'     => $model->pivot_table,
            '{where_clause}'      => '',
            '{order_clause}'      => '',
        ]);
    }

    /**
     * Update relationship data in storage.
     * 
     * @param  Illuminate\Eloquent\Model  $model
     * @param  App\Models\Field           $field
     * @return void
     */
    public function persistRelationship($model, Field $field)
    {
        $model->{$field->handle}()->sync(request()->input($field->handle));
    }

    /**
     * Returns resource object of field.
     *
     * @param  Illuminate\Eloquent\Model  $model
     * @param  App\Models\Field           $field
     * @return TermResource
     */
    public function getResource($model, Field $field)
    {
        return TermResource::collection($this->getValue($model, $field));
    }
}
