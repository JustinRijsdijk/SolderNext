import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::doLogout
 * @see app/Http/Controllers/AuthController.php:43
 * @route '/logout'
 */
export const doLogout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doLogout.url(options),
    method: 'get',
})

doLogout.definition = {
    methods: ["get","head"],
    url: '/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::doLogout
 * @see app/Http/Controllers/AuthController.php:43
 * @route '/logout'
 */
doLogout.url = (options?: RouteQueryOptions) => {
    return doLogout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::doLogout
 * @see app/Http/Controllers/AuthController.php:43
 * @route '/logout'
 */
doLogout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doLogout.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuthController::doLogout
 * @see app/Http/Controllers/AuthController.php:43
 * @route '/logout'
 */
doLogout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: doLogout.url(options),
    method: 'head',
})
const AuthController = { doLogout }

export default AuthController