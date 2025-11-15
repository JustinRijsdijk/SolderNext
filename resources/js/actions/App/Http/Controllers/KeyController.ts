import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\KeyController::getList
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
export const getList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})

getList.definition = {
    methods: ["get","head"],
    url: '/key/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KeyController::getList
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
getList.url = (options?: RouteQueryOptions) => {
    return getList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::getList
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
getList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KeyController::getList
 * @see app/Http/Controllers/KeyController.php:25
 * @route '/key/list'
 */
getList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KeyController::getCreate
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
export const getCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})

getCreate.definition = {
    methods: ["get","head"],
    url: '/key/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KeyController::getCreate
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
getCreate.url = (options?: RouteQueryOptions) => {
    return getCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::getCreate
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
getCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KeyController::getCreate
 * @see app/Http/Controllers/KeyController.php:32
 * @route '/key/create'
 */
getCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KeyController::postCreate
 * @see app/Http/Controllers/KeyController.php:37
 * @route '/key/create'
 */
export const postCreate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

postCreate.definition = {
    methods: ["post"],
    url: '/key/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KeyController::postCreate
 * @see app/Http/Controllers/KeyController.php:37
 * @route '/key/create'
 */
postCreate.url = (options?: RouteQueryOptions) => {
    return postCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::postCreate
 * @see app/Http/Controllers/KeyController.php:37
 * @route '/key/create'
 */
postCreate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KeyController::getDelete
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
export const getDelete = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})

getDelete.definition = {
    methods: ["get","head"],
    url: '/key/delete/{key_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KeyController::getDelete
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
getDelete.url = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getDelete.definition.url
            .replace('{key_id}', parsedArgs.key_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::getDelete
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
getDelete.get = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KeyController::getDelete
 * @see app/Http/Controllers/KeyController.php:58
 * @route '/key/delete/{key_id}'
 */
getDelete.head = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDelete.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KeyController::postDelete
 * @see app/Http/Controllers/KeyController.php:69
 * @route '/key/delete/{key_id}'
 */
export const postDelete = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})

postDelete.definition = {
    methods: ["post"],
    url: '/key/delete/{key_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KeyController::postDelete
 * @see app/Http/Controllers/KeyController.php:69
 * @route '/key/delete/{key_id}'
 */
postDelete.url = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return postDelete.definition.url
            .replace('{key_id}', parsedArgs.key_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KeyController::postDelete
 * @see app/Http/Controllers/KeyController.php:69
 * @route '/key/delete/{key_id}'
 */
postDelete.post = (args: { key_id: string | number } | [key_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})
const KeyController = { getList, getCreate, postCreate, getDelete, postDelete }

export default KeyController