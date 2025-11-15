import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ModController::list
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/mod/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::list
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::list
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::list
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModController::view
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
export const view = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/mod/view/{mod_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::view
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
view.url = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mod_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    mod_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        mod_id: args.mod_id,
                }

    return view.definition.url
            .replace('{mod_id}', parsedArgs.mod_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::view
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
view.get = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::view
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
view.head = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModController::create
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/mod/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::create
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::create
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::create
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModController::deleteMethod
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
export const deleteMethod = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/mod/delete/{mod_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::deleteMethod
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
deleteMethod.url = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { mod_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    mod_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        mod_id: args.mod_id,
                }

    return deleteMethod.definition.url
            .replace('{mod_id}', parsedArgs.mod_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::deleteMethod
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
deleteMethod.get = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::deleteMethod
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
deleteMethod.head = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})
const mod = {
    list: Object.assign(list, list),
view: Object.assign(view, view),
create: Object.assign(create, create),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default mod