import axios from 'axios'
import Routes from './Routes'

export default class Service {
    request(method, route, ...args) {
        let request = null
        let url = this.createFinalUrl(route)
        switch (method) {
            case 'get':
                request = axios.get(url, ...args)
                break
            case 'post':
                request = axios.post(url, ...args)
                break
            case 'put':
                request = axios.put(url, ...args)
                break
            case 'delete':
                request = axios.delete(url, ...args)
                break
            default:
                throw new Error('Bad method')
        }
        return request.then(({data}) => data)
    }

    createFinalUrl({name, params, query}) {
        query = query || {}
        name = name || ''
        params = params || {}
        let parts = name.split('.')
        let route = Routes

        parts.forEach(part => {
            route = route[part]
        })
        if (typeof route !== 'string') {
            throw new Error('Route not found')
        }

        let segments = route.split('/')
        segments = segments.map(segment => {
            if (segment.charAt(0) === ':' && params.hasOwnProperty(segment.substr(1))) {
                segment = params[segment.substr(1)]
            }
            return segment
        })

        let queryString = this.createQueryString(query)
        let BASE_URL = '/api/'
        return BASE_URL + segments.join('/') + (queryString.length ? ('?' + queryString(query)) : '')
    }

    createQueryString(query) {
        let result = []
        for (let [key, value] of Object.entries(query)) {
            result.push((value !== null && typeof value === 'object')
                ? queryString(value, key)
                : encodeURIComponent(key) + '=' + encodeURIComponent(value))
        }
        return result.join('&')
    }
}
