export default {
    home: {
        index: 'home',
    },
    register: {
        login: 'login',
        signup: 'signup',
    },
    teams: {
        get: 'teams/:teamId',
    },
    players: {
        get: 'players/:playerId',
    },
    news: {
        get: 'news/:newsId',
        comment: 'news/comment'
    },
    matches: {
        get: 'matches/:matchId',
    },
    leagues: {
        get: 'leagues/:leagueId',
        index: 'leagues'
    },
    account: {
        subscribe: 'account/subscribe',
        unsubscribe: 'account/unsubscribe'
    },
}
