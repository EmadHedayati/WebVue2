import Service from '../utils/Service'

export default class TeamService extends Service {
    get (teamId) {
        return this.request('get', {name: 'teams.get', params: {teamId: teamId}})
    }
}
