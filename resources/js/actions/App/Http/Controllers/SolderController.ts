import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SolderController::getConfigure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
export const getConfigure = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfigure.url(options),
    method: 'get',
})

getConfigure.definition = {
    methods: ["get","head"],
    url: '/solder/configure',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::getConfigure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
getConfigure.url = (options?: RouteQueryOptions) => {
    return getConfigure.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::getConfigure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
getConfigure.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getConfigure.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::getConfigure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
getConfigure.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getConfigure.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolderController::getUpdate
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
export const getUpdate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUpdate.url(options),
    method: 'get',
})

getUpdate.definition = {
    methods: ["get","head"],
    url: '/solder/update',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::getUpdate
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
getUpdate.url = (options?: RouteQueryOptions) => {
    return getUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::getUpdate
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
getUpdate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUpdate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::getUpdate
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
getUpdate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getUpdate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolderController::getUpdateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
export const getUpdateCheck = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUpdateCheck.url(options),
    method: 'get',
})

getUpdateCheck.definition = {
    methods: ["get","head"],
    url: '/solder/update-check',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::getUpdateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
getUpdateCheck.url = (options?: RouteQueryOptions) => {
    return getUpdateCheck.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::getUpdateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
getUpdateCheck.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUpdateCheck.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::getUpdateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
getUpdateCheck.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getUpdateCheck.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolderController::getCacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
export const getCacheMinecraft = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCacheMinecraft.url(options),
    method: 'get',
})

getCacheMinecraft.definition = {
    methods: ["get","head"],
    url: '/solder/cache-minecraft',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::getCacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
getCacheMinecraft.url = (options?: RouteQueryOptions) => {
    return getCacheMinecraft.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::getCacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
getCacheMinecraft.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCacheMinecraft.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::getCacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
getCacheMinecraft.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCacheMinecraft.url(options),
    method: 'head',
})
const SolderController = { getConfigure, getUpdate, getUpdateCheck, getCacheMinecraft }

export default SolderController