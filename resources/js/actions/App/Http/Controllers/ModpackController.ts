import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ModpackController::getList
 * @see app/Http/Controllers/ModpackController.php:43
 * @route '/modpack/list'
 */
export const getList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})

getList.definition = {
    methods: ["get","head"],
    url: '/modpack/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::getList
 * @see app/Http/Controllers/ModpackController.php:43
 * @route '/modpack/list'
 */
getList.url = (options?: RouteQueryOptions) => {
    return getList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::getList
 * @see app/Http/Controllers/ModpackController.php:43
 * @route '/modpack/list'
 */
getList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::getList
 * @see app/Http/Controllers/ModpackController.php:43
 * @route '/modpack/list'
 */
getList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::getView
 * @see app/Http/Controllers/ModpackController.php:50
 * @route '/modpack/view/{modpack_id}'
 */
export const getView = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getView.url(args, options),
    method: 'get',
})

getView.definition = {
    methods: ["get","head"],
    url: '/modpack/view/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::getView
 * @see app/Http/Controllers/ModpackController.php:50
 * @route '/modpack/view/{modpack_id}'
 */
getView.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack_id: args.modpack_id,
                }

    return getView.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::getView
 * @see app/Http/Controllers/ModpackController.php:50
 * @route '/modpack/view/{modpack_id}'
 */
getView.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getView.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::getView
 * @see app/Http/Controllers/ModpackController.php:50
 * @route '/modpack/view/{modpack_id}'
 */
getView.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getView.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::anyBuild
 * @see app/Http/Controllers/ModpackController.php:66
 * @route '/modpack/build/{build_id}'
 */
const anyBuilde5f7ff068dcc311396ed06b81e2629fa = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: anyBuilde5f7ff068dcc311396ed06b81e2629fa.url(args, options),
    method: 'get',
})

anyBuilde5f7ff068dcc311396ed06b81e2629fa.definition = {
    methods: ["get","head"],
    url: '/modpack/build/{build_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::anyBuild
 * @see app/Http/Controllers/ModpackController.php:66
 * @route '/modpack/build/{build_id}'
 */
anyBuilde5f7ff068dcc311396ed06b81e2629fa.url = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { build_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    build_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        build_id: args.build_id,
                }

    return anyBuilde5f7ff068dcc311396ed06b81e2629fa.definition.url
            .replace('{build_id}', parsedArgs.build_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::anyBuild
 * @see app/Http/Controllers/ModpackController.php:66
 * @route '/modpack/build/{build_id}'
 */
anyBuilde5f7ff068dcc311396ed06b81e2629fa.get = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: anyBuilde5f7ff068dcc311396ed06b81e2629fa.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::anyBuild
 * @see app/Http/Controllers/ModpackController.php:66
 * @route '/modpack/build/{build_id}'
 */
anyBuilde5f7ff068dcc311396ed06b81e2629fa.head = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: anyBuilde5f7ff068dcc311396ed06b81e2629fa.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ModpackController::anyBuild
 * @see app/Http/Controllers/ModpackController.php:66
 * @route '/modpack/build/{build_id}'
 */
const anyBuilde5f7ff068dcc311396ed06b81e2629fa = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyBuilde5f7ff068dcc311396ed06b81e2629fa.url(args, options),
    method: 'post',
})

anyBuilde5f7ff068dcc311396ed06b81e2629fa.definition = {
    methods: ["post"],
    url: '/modpack/build/{build_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModpackController::anyBuild
 * @see app/Http/Controllers/ModpackController.php:66
 * @route '/modpack/build/{build_id}'
 */
anyBuilde5f7ff068dcc311396ed06b81e2629fa.url = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { build_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    build_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        build_id: args.build_id,
                }

    return anyBuilde5f7ff068dcc311396ed06b81e2629fa.definition.url
            .replace('{build_id}', parsedArgs.build_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::anyBuild
 * @see app/Http/Controllers/ModpackController.php:66
 * @route '/modpack/build/{build_id}'
 */
anyBuilde5f7ff068dcc311396ed06b81e2629fa.post = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyBuilde5f7ff068dcc311396ed06b81e2629fa.url(args, options),
    method: 'post',
})

export const anyBuild = {
    '/modpack/build/{build_id}': anyBuilde5f7ff068dcc311396ed06b81e2629fa,
    '/modpack/build/{build_id}': anyBuilde5f7ff068dcc311396ed06b81e2629fa,
}

/**
* @see \App\Http\Controllers\ModpackController::getAddBuild
 * @see app/Http/Controllers/ModpackController.php:189
 * @route '/modpack/add-build/{modpack_id}'
 */
export const getAddBuild = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAddBuild.url(args, options),
    method: 'get',
})

getAddBuild.definition = {
    methods: ["get","head"],
    url: '/modpack/add-build/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::getAddBuild
 * @see app/Http/Controllers/ModpackController.php:189
 * @route '/modpack/add-build/{modpack_id}'
 */
getAddBuild.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack_id: args.modpack_id,
                }

    return getAddBuild.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::getAddBuild
 * @see app/Http/Controllers/ModpackController.php:189
 * @route '/modpack/add-build/{modpack_id}'
 */
getAddBuild.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAddBuild.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::getAddBuild
 * @see app/Http/Controllers/ModpackController.php:189
 * @route '/modpack/add-build/{modpack_id}'
 */
getAddBuild.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAddBuild.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::postAddBuild
 * @see app/Http/Controllers/ModpackController.php:205
 * @route '/modpack/add-build/{modpack_id}'
 */
export const postAddBuild = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postAddBuild.url(args, options),
    method: 'post',
})

postAddBuild.definition = {
    methods: ["post"],
    url: '/modpack/add-build/{modpack_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModpackController::postAddBuild
 * @see app/Http/Controllers/ModpackController.php:205
 * @route '/modpack/add-build/{modpack_id}'
 */
postAddBuild.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack_id: args.modpack_id,
                }

    return postAddBuild.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::postAddBuild
 * @see app/Http/Controllers/ModpackController.php:205
 * @route '/modpack/add-build/{modpack_id}'
 */
postAddBuild.post = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postAddBuild.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModpackController::getCreate
 * @see app/Http/Controllers/ModpackController.php:264
 * @route '/modpack/create'
 */
export const getCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})

getCreate.definition = {
    methods: ["get","head"],
    url: '/modpack/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::getCreate
 * @see app/Http/Controllers/ModpackController.php:264
 * @route '/modpack/create'
 */
getCreate.url = (options?: RouteQueryOptions) => {
    return getCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::getCreate
 * @see app/Http/Controllers/ModpackController.php:264
 * @route '/modpack/create'
 */
getCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::getCreate
 * @see app/Http/Controllers/ModpackController.php:264
 * @route '/modpack/create'
 */
getCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::postCreate
 * @see app/Http/Controllers/ModpackController.php:269
 * @route '/modpack/create'
 */
export const postCreate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

postCreate.definition = {
    methods: ["post"],
    url: '/modpack/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModpackController::postCreate
 * @see app/Http/Controllers/ModpackController.php:269
 * @route '/modpack/create'
 */
postCreate.url = (options?: RouteQueryOptions) => {
    return postCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::postCreate
 * @see app/Http/Controllers/ModpackController.php:269
 * @route '/modpack/create'
 */
postCreate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postCreate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModpackController::getEdit
 * @see app/Http/Controllers/ModpackController.php:317
 * @route '/modpack/edit/{modpack_id}'
 */
export const getEdit = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getEdit.url(args, options),
    method: 'get',
})

getEdit.definition = {
    methods: ["get","head"],
    url: '/modpack/edit/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::getEdit
 * @see app/Http/Controllers/ModpackController.php:317
 * @route '/modpack/edit/{modpack_id}'
 */
getEdit.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack_id: args.modpack_id,
                }

    return getEdit.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::getEdit
 * @see app/Http/Controllers/ModpackController.php:317
 * @route '/modpack/edit/{modpack_id}'
 */
getEdit.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::getEdit
 * @see app/Http/Controllers/ModpackController.php:317
 * @route '/modpack/edit/{modpack_id}'
 */
getEdit.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getEdit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::postEdit
 * @see app/Http/Controllers/ModpackController.php:337
 * @route '/modpack/edit/{modpack_id}'
 */
export const postEdit = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postEdit.url(args, options),
    method: 'post',
})

postEdit.definition = {
    methods: ["post"],
    url: '/modpack/edit/{modpack_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModpackController::postEdit
 * @see app/Http/Controllers/ModpackController.php:337
 * @route '/modpack/edit/{modpack_id}'
 */
postEdit.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack_id: args.modpack_id,
                }

    return postEdit.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::postEdit
 * @see app/Http/Controllers/ModpackController.php:337
 * @route '/modpack/edit/{modpack_id}'
 */
postEdit.post = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postEdit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModpackController::getDelete
 * @see app/Http/Controllers/ModpackController.php:379
 * @route '/modpack/delete/{modpack_id}'
 */
export const getDelete = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})

getDelete.definition = {
    methods: ["get","head"],
    url: '/modpack/delete/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::getDelete
 * @see app/Http/Controllers/ModpackController.php:379
 * @route '/modpack/delete/{modpack_id}'
 */
getDelete.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack_id: args.modpack_id,
                }

    return getDelete.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::getDelete
 * @see app/Http/Controllers/ModpackController.php:379
 * @route '/modpack/delete/{modpack_id}'
 */
getDelete.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::getDelete
 * @see app/Http/Controllers/ModpackController.php:379
 * @route '/modpack/delete/{modpack_id}'
 */
getDelete.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDelete.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::postDelete
 * @see app/Http/Controllers/ModpackController.php:389
 * @route '/modpack/delete/{modpack_id}'
 */
export const postDelete = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})

postDelete.definition = {
    methods: ["post"],
    url: '/modpack/delete/{modpack_id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModpackController::postDelete
 * @see app/Http/Controllers/ModpackController.php:389
 * @route '/modpack/delete/{modpack_id}'
 */
postDelete.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack_id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack_id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack_id: args.modpack_id,
                }

    return postDelete.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::postDelete
 * @see app/Http/Controllers/ModpackController.php:389
 * @route '/modpack/delete/{modpack_id}'
 */
postDelete.post = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: postDelete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ModpackController::anyModify
 * @see app/Http/Controllers/ModpackController.php:411
 * @route '/modpack/modify/{action}'
 */
export const anyModify = (args: { action: string | number } | [action: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyModify.url(args, options),
    method: 'post',
})

anyModify.definition = {
    methods: ["post"],
    url: '/modpack/modify/{action}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ModpackController::anyModify
 * @see app/Http/Controllers/ModpackController.php:411
 * @route '/modpack/modify/{action}'
 */
anyModify.url = (args: { action: string | number } | [action: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { action: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    action: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        action: args.action,
                }

    return anyModify.definition.url
            .replace('{action}', parsedArgs.action.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::anyModify
 * @see app/Http/Controllers/ModpackController.php:411
 * @route '/modpack/modify/{action}'
 */
anyModify.post = (args: { action: string | number } | [action: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: anyModify.url(args, options),
    method: 'post',
})
const ModpackController = { getList, getView, anyBuild, getAddBuild, postAddBuild, getCreate, postCreate, getEdit, postEdit, getDelete, postDelete, anyModify }

export default ModpackController