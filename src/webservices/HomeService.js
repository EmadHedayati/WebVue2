import Service from '../utils/Service'

export default class HomeService extends Service {
    index () {
        return this.request('get', {name: 'home.index'})
    }
}
