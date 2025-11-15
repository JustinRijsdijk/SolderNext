import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ClientController::list
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/client/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientController::list
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::list
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClientController::list
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientController::create
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/client/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientController::create
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::create
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClientController::create
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientController::deleteMethod
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
export const deleteMethod = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/client/delete/{client_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientController::deleteMethod
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
deleteMethod.url = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client_id: args.client_id,
                }

    return deleteMethod.definition.url
            .replace('{client_id}', parsedArgs.client_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::deleteMethod
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
deleteMethod.get = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClientController::deleteMethod
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
deleteMethod.head = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})
const client = {
    list: Object.assign(list, list),
create: Object.assign(create, create),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default client