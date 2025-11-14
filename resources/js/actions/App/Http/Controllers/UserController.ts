import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::getList
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
export const getList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})

getList.definition = {
    methods: ["get","head"],
    url: '/user/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::getList
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
getList.url = (options?: RouteQueryOptions) => {
    return getList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::getList
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
getList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::getList
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
getList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::getEdit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
export const getEdit = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getEdit.url(args, options),
    method: 'get',
})

getEdit.definition = {
    methods: ["get","head"],
    url: '/user/edit/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::getEdit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
getEdit.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return getEdit.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::getEdit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
getEdit.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::getEdit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
getEdit.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getEdit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::postEdit
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user/edit/{user_id}'
 */
export const postEdit = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postEdit.url(args, options),
    method: 'post',
})

postEdit.definition = {
    methods: ["post"],
    url: '/user/edit/{user_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::postEdit
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user/edit/{user_id}'
 */
postEdit.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return postEdit.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::postEdit
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user/edit/{user_id}'
 */
postEdit.post = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postEdit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::getCreate
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
export const getCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})

getCreate.definition = {
    methods: ["get","head"],
    url: '/user/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::getCreate
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
getCreate.url = (options?: RouteQueryOptions) => {
    return getCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::getCreate
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
getCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::getCreate
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
getCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::postCreate
 * @see app/Http/Controllers/UserController.php:156
 * @route '/user/create'
 */
export const postCreate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

postCreate.definition = {
    methods: ["post"],
    url: '/user/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::postCreate
 * @see app/Http/Controllers/UserController.php:156
 * @route '/user/create'
 */
postCreate.url = (options?: RouteQueryOptions) => {
    return postCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::postCreate
 * @see app/Http/Controllers/UserController.php:156
 * @route '/user/create'
 */
postCreate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::getDelete
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
export const getDelete = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})

getDelete.definition = {
    methods: ["get","head"],
    url: '/user/delete/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::getDelete
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
getDelete.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return getDelete.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::getDelete
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
getDelete.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::getDelete
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
getDelete.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDelete.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::postDelete
 * @see app/Http/Controllers/UserController.php:245
 * @route '/user/delete/{user_id}'
 */
export const postDelete = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})

postDelete.definition = {
    methods: ["post"],
    url: '/user/delete/{user_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::postDelete
 * @see app/Http/Controllers/UserController.php:245
 * @route '/user/delete/{user_id}'
 */
postDelete.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_id: args.user_id,
                }

    return postDelete.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::postDelete
 * @see app/Http/Controllers/UserController.php:245
 * @route '/user/delete/{user_id}'
 */
postDelete.post = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})
const UserController = { getList, getEdit, postEdit, getCreate, postCreate, getDelete, postDelete }

export default UserController