import Service from '../utils/Service'

export default class LeagueService extends Service {
    index (query = '') {
        return this.request('get', {name: 'leagues.index', query: query})
    }

    get (leagueId) {
        return this.request('get', {name: 'leagues.get', params: {leagueId: leagueId}})
    }
}
