import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ApiController::getIndex
 * @see app/Http/Controllers/ApiController.php:54
 * @route '/api'
 */
export const getIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getIndex.url(options),
    method: 'get',
})

getIndex.definition = {
    methods: ["get","head"],
    url: '/api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiController::getIndex
 * @see app/Http/Controllers/ApiController.php:54
 * @route '/api'
 */
getIndex.url = (options?: RouteQueryOptions) => {
    return getIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiController::getIndex
 * @see app/Http/Controllers/ApiController.php:54
 * @route '/api'
 */
getIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ApiController::getIndex
 * @see app/Http/Controllers/ApiController.php:54
 * @route '/api'
 */
getIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiController::getModpackIndex
 * @see app/Http/Controllers/ApiController.php:63
 * @route '/api/modpack'
 */
export const getModpackIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModpackIndex.url(options),
    method: 'get',
})

getModpackIndex.definition = {
    methods: ["get","head"],
    url: '/api/modpack',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiController::getModpackIndex
 * @see app/Http/Controllers/ApiController.php:63
 * @route '/api/modpack'
 */
getModpackIndex.url = (options?: RouteQueryOptions) => {
    return getModpackIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiController::getModpackIndex
 * @see app/Http/Controllers/ApiController.php:63
 * @route '/api/modpack'
 */
getModpackIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModpackIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ApiController::getModpackIndex
 * @see app/Http/Controllers/ApiController.php:63
 * @route '/api/modpack'
 */
getModpackIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModpackIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiController::getModpack
 * @see app/Http/Controllers/ApiController.php:88
 * @route '/api/modpack/{modpack}'
 */
export const getModpack = (args: { modpack: string | number } | [modpack: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModpack.url(args, options),
    method: 'get',
})

getModpack.definition = {
    methods: ["get","head"],
    url: '/api/modpack/{modpack}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiController::getModpack
 * @see app/Http/Controllers/ApiController.php:88
 * @route '/api/modpack/{modpack}'
 */
getModpack.url = (args: { modpack: string | number } | [modpack: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modpack: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modpack: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack: args.modpack,
                }

    return getModpack.definition.url
            .replace('{modpack}', parsedArgs.modpack.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiController::getModpack
 * @see app/Http/Controllers/ApiController.php:88
 * @route '/api/modpack/{modpack}'
 */
getModpack.get = (args: { modpack: string | number } | [modpack: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModpack.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ApiController::getModpack
 * @see app/Http/Controllers/ApiController.php:88
 * @route '/api/modpack/{modpack}'
 */
getModpack.head = (args: { modpack: string | number } | [modpack: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModpack.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiController::getModpackBuild
 * @see app/Http/Controllers/ApiController.php:99
 * @route '/api/modpack/{modpack}/{build}'
 */
export const getModpackBuild = (args: { modpack: string | number, build: string | number } | [modpack: string | number, build: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModpackBuild.url(args, options),
    method: 'get',
})

getModpackBuild.definition = {
    methods: ["get","head"],
    url: '/api/modpack/{modpack}/{build}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiController::getModpackBuild
 * @see app/Http/Controllers/ApiController.php:99
 * @route '/api/modpack/{modpack}/{build}'
 */
getModpackBuild.url = (args: { modpack: string | number, build: string | number } | [modpack: string | number, build: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    modpack: args[0],
                    build: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modpack: args.modpack,
                                build: args.build,
                }

    return getModpackBuild.definition.url
            .replace('{modpack}', parsedArgs.modpack.toString())
            .replace('{build}', parsedArgs.build.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiController::getModpackBuild
 * @see app/Http/Controllers/ApiController.php:99
 * @route '/api/modpack/{modpack}/{build}'
 */
getModpackBuild.get = (args: { modpack: string | number, build: string | number } | [modpack: string | number, build: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getModpackBuild.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ApiController::getModpackBuild
 * @see app/Http/Controllers/ApiController.php:99
 * @route '/api/modpack/{modpack}/{build}'
 */
getModpackBuild.head = (args: { modpack: string | number, build: string | number } | [modpack: string | number, build: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getModpackBuild.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiController::getMod
 * @see app/Http/Controllers/ApiController.php:104
 * @route '/api/mod/{mod?}/{version?}'
 */
export const getMod = (args?: { mod?: string | number, version?: string | number } | [mod: string | number, version: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMod.url(args, options),
    method: 'get',
})

getMod.definition = {
    methods: ["get","head"],
    url: '/api/mod/{mod?}/{version?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiController::getMod
 * @see app/Http/Controllers/ApiController.php:104
 * @route '/api/mod/{mod?}/{version?}'
 */
getMod.url = (args?: { mod?: string | number, version?: string | number } | [mod: string | number, version: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    mod: args[0],
                    version: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "mod",
            "version",
        ])

    const parsedArgs = {
                        mod: args?.mod,
                                version: args?.version,
                }

    return getMod.definition.url
            .replace('{mod?}', parsedArgs.mod?.toString() ?? '')
            .replace('{version?}', parsedArgs.version?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiController::getMod
 * @see app/Http/Controllers/ApiController.php:104
 * @route '/api/mod/{mod?}/{version?}'
 */
getMod.get = (args?: { mod?: string | number, version?: string | number } | [mod: string | number, version: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ApiController::getMod
 * @see app/Http/Controllers/ApiController.php:104
 * @route '/api/mod/{mod?}/{version?}'
 */
getMod.head = (args?: { mod?: string | number, version?: string | number } | [mod: string | number, version: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMod.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiController::getVerify
 * @see app/Http/Controllers/ApiController.php:161
 * @route '/api/verify/{key}'
 */
export const getVerify = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVerify.url(args, options),
    method: 'get',
})

getVerify.definition = {
    methods: ["get","head"],
    url: '/api/verify/{key}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiController::getVerify
 * @see app/Http/Controllers/ApiController.php:161
 * @route '/api/verify/{key}'
 */
getVerify.url = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { key: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    key: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        key: args.key,
                }

    return getVerify.definition.url
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiController::getVerify
 * @see app/Http/Controllers/ApiController.php:161
 * @route '/api/verify/{key}'
 */
getVerify.get = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getVerify.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ApiController::getVerify
 * @see app/Http/Controllers/ApiController.php:161
 * @route '/api/verify/{key}'
 */
getVerify.head = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getVerify.url(args, options),
    method: 'head',
})
const ApiController = { getIndex, getModpackIndex, getModpack, getModpackBuild, getMod, getVerify }

export default ApiController