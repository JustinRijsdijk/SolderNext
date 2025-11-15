import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ModController::getList
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
export const getList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})

getList.definition = {
    methods: ["get","head"],
    url: '/mod/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::getList
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
getList.url = (options?: RouteQueryOptions) => {
    return getList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::getList
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
getList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::getList
 * @see app/Http/Controllers/ModController.php:31
 * @route '/mod/list'
 */
getList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModController::getView
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
export const getView = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getView.url(args, options),
    method: 'get',
})

getView.definition = {
    methods: ["get","head"],
    url: '/mod/view/{mod_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::getView
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
getView.url = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getView.definition.url
            .replace('{mod_id}', parsedArgs.mod_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::getView
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
getView.get = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getView.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::getView
 * @see app/Http/Controllers/ModController.php:38
 * @route '/mod/view/{mod_id}'
 */
getView.head = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getView.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModController::getCreate
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
export const getCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})

getCreate.definition = {
    methods: ["get","head"],
    url: '/mod/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::getCreate
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
getCreate.url = (options?: RouteQueryOptions) => {
    return getCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::getCreate
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
getCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::getCreate
 * @see app/Http/Controllers/ModController.php:52
 * @route '/mod/create'
 */
getCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModController::postCreate
 * @see app/Http/Controllers/ModController.php:57
 * @route '/mod/create'
 */
export const postCreate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

postCreate.definition = {
    methods: ["post"],
    url: '/mod/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModController::postCreate
 * @see app/Http/Controllers/ModController.php:57
 * @route '/mod/create'
 */
postCreate.url = (options?: RouteQueryOptions) => {
    return postCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::postCreate
 * @see app/Http/Controllers/ModController.php:57
 * @route '/mod/create'
 */
postCreate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModController::getDelete
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
export const getDelete = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})

getDelete.definition = {
    methods: ["get","head"],
    url: '/mod/delete/{mod_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::getDelete
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
getDelete.url = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getDelete.definition.url
            .replace('{mod_id}', parsedArgs.mod_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::getDelete
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
getDelete.get = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::getDelete
 * @see app/Http/Controllers/ModController.php:87
 * @route '/mod/delete/{mod_id}'
 */
getDelete.head = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDelete.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModController::postDelete
 * @see app/Http/Controllers/ModController.php:133
 * @route '/mod/delete/{mod_id}'
 */
export const postDelete = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})

postDelete.definition = {
    methods: ["post"],
    url: '/mod/delete/{mod_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModController::postDelete
 * @see app/Http/Controllers/ModController.php:133
 * @route '/mod/delete/{mod_id}'
 */
postDelete.url = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return postDelete.definition.url
            .replace('{mod_id}', parsedArgs.mod_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::postDelete
 * @see app/Http/Controllers/ModController.php:133
 * @route '/mod/delete/{mod_id}'
 */
postDelete.post = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModController::postModify
 * @see app/Http/Controllers/ModController.php:97
 * @route '/mod/modify/{mod_id}'
 */
export const postModify = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postModify.url(args, options),
    method: 'post',
})

postModify.definition = {
    methods: ["post"],
    url: '/mod/modify/{mod_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModController::postModify
 * @see app/Http/Controllers/ModController.php:97
 * @route '/mod/modify/{mod_id}'
 */
postModify.url = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return postModify.definition.url
            .replace('{mod_id}', parsedArgs.mod_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::postModify
 * @see app/Http/Controllers/ModController.php:97
 * @route '/mod/modify/{mod_id}'
 */
postModify.post = (args: { mod_id: string | number } | [mod_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postModify.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModController::anyRehash
 * @see app/Http/Controllers/ModController.php:150
 * @route '/mod/rehash'
 */
export const anyRehash = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyRehash.url(options),
    method: 'post',
})

anyRehash.definition = {
    methods: ["post"],
    url: '/mod/rehash',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModController::anyRehash
 * @see app/Http/Controllers/ModController.php:150
 * @route '/mod/rehash'
 */
anyRehash.url = (options?: RouteQueryOptions) => {
    return anyRehash.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::anyRehash
 * @see app/Http/Controllers/ModController.php:150
 * @route '/mod/rehash'
 */
anyRehash.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyRehash.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModController::anyAddVersion
 * @see app/Http/Controllers/ModController.php:218
 * @route '/mod/add-version'
 */
export const anyAddVersion = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyAddVersion.url(options),
    method: 'post',
})

anyAddVersion.definition = {
    methods: ["post"],
    url: '/mod/add-version',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModController::anyAddVersion
 * @see app/Http/Controllers/ModController.php:218
 * @route '/mod/add-version'
 */
anyAddVersion.url = (options?: RouteQueryOptions) => {
    return anyAddVersion.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::anyAddVersion
 * @see app/Http/Controllers/ModController.php:218
 * @route '/mod/add-version'
 */
anyAddVersion.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyAddVersion.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModController::anyDeleteVersion
 * @see app/Http/Controllers/ModController.php:301
 * @route '/mod/delete-version/{version_id}'
 */
export const anyDeleteVersion = (args: { version_id: string | number } | [version_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyDeleteVersion.url(args, options),
    method: 'post',
})

anyDeleteVersion.definition = {
    methods: ["post"],
    url: '/mod/delete-version/{version_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModController::anyDeleteVersion
 * @see app/Http/Controllers/ModController.php:301
 * @route '/mod/delete-version/{version_id}'
 */
anyDeleteVersion.url = (args: { version_id: string | number } | [version_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { version_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    version_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        version_id: args.version_id,
                }

    return anyDeleteVersion.definition.url
            .replace('{version_id}', parsedArgs.version_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::anyDeleteVersion
 * @see app/Http/Controllers/ModController.php:301
 * @route '/mod/delete-version/{version_id}'
 */
anyDeleteVersion.post = (args: { version_id: string | number } | [version_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyDeleteVersion.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModController::getModVersions
 * @see app/Http/Controllers/ModController.php:333
 * @route '/mod/versions/{modSlug}'
 */
export const getModVersions = (args: { modSlug: string | number } | [modSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModVersions.url(args, options),
    method: 'get',
})

getModVersions.definition = {
    methods: ["get","head"],
    url: '/mod/versions/{modSlug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModController::getModVersions
 * @see app/Http/Controllers/ModController.php:333
 * @route '/mod/versions/{modSlug}'
 */
getModVersions.url = (args: { modSlug: string | number } | [modSlug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modSlug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modSlug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modSlug: args.modSlug,
                }

    return getModVersions.definition.url
            .replace('{modSlug}', parsedArgs.modSlug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModController::getModVersions
 * @see app/Http/Controllers/ModController.php:333
 * @route '/mod/versions/{modSlug}'
 */
getModVersions.get = (args: { modSlug: string | number } | [modSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModVersions.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModController::getModVersions
 * @see app/Http/Controllers/ModController.php:333
 * @route '/mod/versions/{modSlug}'
 */
getModVersions.head = (args: { modSlug: string | number } | [modSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModVersions.url(args, options),
    method: 'head',
})
const ModController = { getList, getView, getCreate, postCreate, getDelete, postDelete, postModify, anyRehash, anyAddVersion, anyDeleteVersion, getModVersions }

export default ModController