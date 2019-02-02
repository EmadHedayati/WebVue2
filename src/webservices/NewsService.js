import Service from '../utils/Service'

export default class NewsService extends Service {
    get (newsId) {
        return this.request('get', {name: 'news.get', params: {newsId: newsId}})
    }
    comment (body, newsId) {
        return this.request('post', {name: 'news.comment'}, {body: body, newsId: newsId})
    }
}
