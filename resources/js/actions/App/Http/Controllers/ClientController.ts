import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ClientController::getList
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
export const getList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})

getList.definition = {
    methods: ["get","head"],
    url: '/client/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientController::getList
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
getList.url = (options?: RouteQueryOptions) => {
    return getList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::getList
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
getList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClientController::getList
 * @see app/Http/Controllers/ClientController.php:25
 * @route '/client/list'
 */
getList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientController::getCreate
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
export const getCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})

getCreate.definition = {
    methods: ["get","head"],
    url: '/client/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientController::getCreate
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
getCreate.url = (options?: RouteQueryOptions) => {
    return getCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::getCreate
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
getCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClientController::getCreate
 * @see app/Http/Controllers/ClientController.php:32
 * @route '/client/create'
 */
getCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientController::postCreate
 * @see app/Http/Controllers/ClientController.php:37
 * @route '/client/create'
 */
export const postCreate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

postCreate.definition = {
    methods: ["post"],
    url: '/client/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientController::postCreate
 * @see app/Http/Controllers/ClientController.php:37
 * @route '/client/create'
 */
postCreate.url = (options?: RouteQueryOptions) => {
    return postCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::postCreate
 * @see app/Http/Controllers/ClientController.php:37
 * @route '/client/create'
 */
postCreate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientController::getDelete
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
export const getDelete = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})

getDelete.definition = {
    methods: ["get","head"],
    url: '/client/delete/{client_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientController::getDelete
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
getDelete.url = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getDelete.definition.url
            .replace('{client_id}', parsedArgs.client_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::getDelete
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
getDelete.get = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ClientController::getDelete
 * @see app/Http/Controllers/ClientController.php:60
 * @route '/client/delete/{client_id}'
 */
getDelete.head = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDelete.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientController::postDelete
 * @see app/Http/Controllers/ClientController.php:71
 * @route '/client/delete/{client_id}'
 */
export const postDelete = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})

postDelete.definition = {
    methods: ["post"],
    url: '/client/delete/{client_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientController::postDelete
 * @see app/Http/Controllers/ClientController.php:71
 * @route '/client/delete/{client_id}'
 */
postDelete.url = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return postDelete.definition.url
            .replace('{client_id}', parsedArgs.client_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientController::postDelete
 * @see app/Http/Controllers/ClientController.php:71
 * @route '/client/delete/{client_id}'
 */
postDelete.post = (args: { client_id: string | number } | [client_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})
const ClientController = { getList, getCreate, postCreate, getDelete, postDelete }

export default ClientController