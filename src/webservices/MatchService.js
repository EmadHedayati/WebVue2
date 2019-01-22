import Service from '../utils/Service'

export default class MatchService extends Service {
    get (matchId) {
        return this.request('get', {name: 'matches.get', params: {matchId: matchId}})
    }
}
