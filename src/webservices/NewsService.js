import Service from '../utils/Service'

export default class NewsService extends Service {
    get (newsId) {
        return this.request('get', {name: 'news.get', params: {newsId: newsId}})
    }
}
