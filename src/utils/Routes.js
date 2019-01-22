export default {
    home: {
        index: 'home',
    },
    teams: {
        get: 'teams/:teamId',
    },
    players: {
        get: 'players/:playerId',
    },
    news: {
        get: 'news/:newsId',
    },
    matches: {
        get: 'matches/:matchId',
    },
    leagues: {
        get: 'leagues/:leagueId',
        index: 'leagues'
    },
}
