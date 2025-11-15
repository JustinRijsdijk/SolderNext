import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SolderController::configure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
export const configure = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: configure.url(options),
    method: 'get',
})

configure.definition = {
    methods: ["get","head"],
    url: '/solder/configure',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::configure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
configure.url = (options?: RouteQueryOptions) => {
    return configure.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::configure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
configure.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: configure.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::configure
 * @see app/Http/Controllers/SolderController.php:16
 * @route '/solder/configure'
 */
configure.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: configure.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolderController::update
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(options),
    method: 'get',
})

update.definition = {
    methods: ["get","head"],
    url: '/solder/update',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::update
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::update
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
update.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::update
 * @see app/Http/Controllers/SolderController.php:30
 * @route '/solder/update'
 */
update.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: update.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolderController::updateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
export const updateCheck = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updateCheck.url(options),
    method: 'get',
})

updateCheck.definition = {
    methods: ["get","head"],
    url: '/solder/update-check',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::updateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
updateCheck.url = (options?: RouteQueryOptions) => {
    return updateCheck.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::updateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
updateCheck.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updateCheck.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::updateCheck
 * @see app/Http/Controllers/SolderController.php:47
 * @route '/solder/update-check'
 */
updateCheck.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: updateCheck.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolderController::cacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
export const cacheMinecraft = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cacheMinecraft.url(options),
    method: 'get',
})

cacheMinecraft.definition = {
    methods: ["get","head"],
    url: '/solder/cache-minecraft',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolderController::cacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
cacheMinecraft.url = (options?: RouteQueryOptions) => {
    return cacheMinecraft.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolderController::cacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
cacheMinecraft.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cacheMinecraft.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SolderController::cacheMinecraft
 * @see app/Http/Controllers/SolderController.php:72
 * @route '/solder/cache-minecraft'
 */
cacheMinecraft.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cacheMinecraft.url(options),
    method: 'head',
})
const solder = {
    configure: Object.assign(configure, configure),
update: Object.assign(update, update),
updateCheck: Object.assign(updateCheck, updateCheck),
cacheMinecraft: Object.assign(cacheMinecraft, cacheMinecraft),
}

export default solder