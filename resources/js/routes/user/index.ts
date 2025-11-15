import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::list
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/user/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::list
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::list
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::list
 * @see app/Http/Controllers/UserController.php:29
 * @route '/user/list'
 */
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::edit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
export const edit = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/user/edit/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::edit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
edit.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::edit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
edit.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::edit
 * @see app/Http/Controllers/UserController.php:36
 * @route '/user/edit/{user_id}'
 */
edit.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::create
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/user/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::create
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::create
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::create
 * @see app/Http/Controllers/UserController.php:143
 * @route '/user/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::deleteMethod
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
export const deleteMethod = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/user/delete/{user_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::deleteMethod
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
deleteMethod.url = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
            .replace('{user_id}', parsedArgs.user_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::deleteMethod
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
deleteMethod.get = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::deleteMethod
 * @see app/Http/Controllers/UserController.php:212
 * @route '/user/delete/{user_id}'
 */
deleteMethod.head = (args: { user_id: string | number } | [user_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})
const user = {
    list: Object.assign(list, list),
edit: Object.assign(edit, edit),
create: Object.assign(create, create),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default user