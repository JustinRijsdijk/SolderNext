import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\V1\Authentication\LoginController::index
 * @see app/Http/Controllers/V1/Authentication/LoginController.php:13
 * @route '/authentication/login'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/authentication/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\V1\Authentication\LoginController::index
 * @see app/Http/Controllers/V1/Authentication/LoginController.php:13
 * @route '/authentication/login'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\V1\Authentication\LoginController::index
 * @see app/Http/Controllers/V1/Authentication/LoginController.php:13
 * @route '/authentication/login'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\V1\Authentication\LoginController::index
 * @see app/Http/Controllers/V1/Authentication/LoginController.php:13
 * @route '/authentication/login'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\V1\Authentication\LoginController::store
 * @see app/Http/Controllers/V1/Authentication/LoginController.php:19
 * @route '/authentication/login'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/authentication/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\V1\Authentication\LoginController::store
 * @see app/Http/Controllers/V1/Authentication/LoginController.php:19
 * @route '/authentication/login'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\V1\Authentication\LoginController::store
 * @see app/Http/Controllers/V1/Authentication/LoginController.php:19
 * @route '/authentication/login'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})
const login = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
}

export default login