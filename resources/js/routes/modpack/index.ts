import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ModpackController::list
 * @see app/Http/Controllers/ModpackController.php:41
 * @route '/modpack/list'
 */
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/modpack/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::list
 * @see app/Http/Controllers/ModpackController.php:41
 * @route '/modpack/list'
 */
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::list
 * @see app/Http/Controllers/ModpackController.php:41
 * @route '/modpack/list'
 */
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::list
 * @see app/Http/Controllers/ModpackController.php:41
 * @route '/modpack/list'
 */
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::view
 * @see app/Http/Controllers/ModpackController.php:48
 * @route '/modpack/view/{modpack_id}'
 */
export const view = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/modpack/view/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::view
 * @see app/Http/Controllers/ModpackController.php:48
 * @route '/modpack/view/{modpack_id}'
 */
view.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::view
 * @see app/Http/Controllers/ModpackController.php:48
 * @route '/modpack/view/{modpack_id}'
 */
view.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::view
 * @see app/Http/Controllers/ModpackController.php:48
 * @route '/modpack/view/{modpack_id}'
 */
view.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::build
 * @see app/Http/Controllers/ModpackController.php:64
 * @route '/modpack/build/{build_id}'
 */
export const build = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: build.url(args, options),
    method: 'get',
})

build.definition = {
    methods: ["get","head"],
    url: '/modpack/build/{build_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::build
 * @see app/Http/Controllers/ModpackController.php:64
 * @route '/modpack/build/{build_id}'
 */
build.url = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return build.definition.url
            .replace('{build_id}', parsedArgs.build_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::build
 * @see app/Http/Controllers/ModpackController.php:64
 * @route '/modpack/build/{build_id}'
 */
build.get = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: build.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::build
 * @see app/Http/Controllers/ModpackController.php:64
 * @route '/modpack/build/{build_id}'
 */
build.head = (args: { build_id: string | number } | [build_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: build.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::addBuild
 * @see app/Http/Controllers/ModpackController.php:187
 * @route '/modpack/add-build/{modpack_id}'
 */
export const addBuild = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: addBuild.url(args, options),
    method: 'get',
})

addBuild.definition = {
    methods: ["get","head"],
    url: '/modpack/add-build/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::addBuild
 * @see app/Http/Controllers/ModpackController.php:187
 * @route '/modpack/add-build/{modpack_id}'
 */
addBuild.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return addBuild.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::addBuild
 * @see app/Http/Controllers/ModpackController.php:187
 * @route '/modpack/add-build/{modpack_id}'
 */
addBuild.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: addBuild.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::addBuild
 * @see app/Http/Controllers/ModpackController.php:187
 * @route '/modpack/add-build/{modpack_id}'
 */
addBuild.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: addBuild.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::create
 * @see app/Http/Controllers/ModpackController.php:262
 * @route '/modpack/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/modpack/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::create
 * @see app/Http/Controllers/ModpackController.php:262
 * @route '/modpack/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::create
 * @see app/Http/Controllers/ModpackController.php:262
 * @route '/modpack/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::create
 * @see app/Http/Controllers/ModpackController.php:262
 * @route '/modpack/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::edit
 * @see app/Http/Controllers/ModpackController.php:315
 * @route '/modpack/edit/{modpack_id}'
 */
export const edit = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/modpack/edit/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::edit
 * @see app/Http/Controllers/ModpackController.php:315
 * @route '/modpack/edit/{modpack_id}'
 */
edit.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::edit
 * @see app/Http/Controllers/ModpackController.php:315
 * @route '/modpack/edit/{modpack_id}'
 */
edit.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::edit
 * @see app/Http/Controllers/ModpackController.php:315
 * @route '/modpack/edit/{modpack_id}'
 */
edit.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ModpackController::deleteMethod
 * @see app/Http/Controllers/ModpackController.php:377
 * @route '/modpack/delete/{modpack_id}'
 */
export const deleteMethod = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/modpack/delete/{modpack_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ModpackController::deleteMethod
 * @see app/Http/Controllers/ModpackController.php:377
 * @route '/modpack/delete/{modpack_id}'
 */
deleteMethod.url = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
            .replace('{modpack_id}', parsedArgs.modpack_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ModpackController::deleteMethod
 * @see app/Http/Controllers/ModpackController.php:377
 * @route '/modpack/delete/{modpack_id}'
 */
deleteMethod.get = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ModpackController::deleteMethod
 * @see app/Http/Controllers/ModpackController.php:377
 * @route '/modpack/delete/{modpack_id}'
 */
deleteMethod.head = (args: { modpack_id: string | number } | [modpack_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})
const modpack = {
    list: Object.assign(list, list),
view: Object.assign(view, view),
build: Object.assign(build, build),
addBuild: Object.assign(addBuild, addBuild),
create: Object.assign(create, create),
edit: Object.assign(edit, edit),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default modpack