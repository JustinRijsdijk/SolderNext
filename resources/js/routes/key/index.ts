import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\KeyController::list
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/key/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KeyController::list
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::list
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KeyController::list
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KeyController::create
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/key/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KeyController::create
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::create
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KeyController::create
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KeyController::deleteMethod
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
export const deleteMethod = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/key/delete/{key_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KeyController::deleteMethod
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
deleteMethod.url = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { key_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    key_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        key_id: args.key_id,
                }

    return deleteMethod.definition.url
            .replace('{key_id}', parsedArgs.key_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::deleteMethod
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
deleteMethod.get = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KeyController::deleteMethod
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
deleteMethod.head = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})
const key = {
    list: Object.assign(list, list),
create: Object.assign(create, create),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default key