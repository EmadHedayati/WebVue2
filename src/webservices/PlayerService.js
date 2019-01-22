import Service from '../utils/Service'

export default class PlayerService extends Service {
    get (playerId) {
        return this.request('get', {name: 'players.get', params: {playerId: playerId}})
    }
}
