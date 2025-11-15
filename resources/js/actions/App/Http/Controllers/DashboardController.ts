import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::getIndex
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
export const getIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getIndex.url(options),
    method: 'get',
})

getIndex.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::getIndex
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
getIndex.url = (options?: RouteQueryOptions) => {
    return getIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::getIndex
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
getIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::getIndex
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
getIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getIndex.url(options),
    method: 'head',
})
const DashboardController = { getIndex }

export default DashboardController