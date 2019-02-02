import Service from '../utils/Service'

export default class SubscribeService extends Service {
    subscribe (account) {
        return this.request('post', {name: 'account.subscribe'}, {accountType: account.type, accountId: account.id})
    }

    unsubscribe (account) {
        return this.request('post', {name: 'account.unsubscribe'}, {accountType: account.type, accountId: account.id})
    }
}
