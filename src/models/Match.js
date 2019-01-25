import Team from "./Team";
import Stadium from "./Stadium";
import Model from "./Model";
import Event from "./Event";
import MatchStatistics from "./MatchStatistics";

class Match extends Model {
    getAttributes() {
        return {
            id: {
                type: Number,
                default: 0
            },
            homeTeam: {
                type: Team,
                isModel: true,
                default: new Team({})
            },
            awayTeam: {
                type: Team,
                isModel: true,
                default: new Team({})
            },
            homeScore: {
                type: Number,
                default: 0
            },
            awayScore: {
                type: Number,
                default: 0
            },
            date: {
                type: Number,
                default: 0
            },
            stadium: {
                type: Stadium,
                isModel: true,
                default: new Stadium({})
            },
            live: {
                type: Boolean,
                default: false
            },
            matchStatistics: {
                type: MatchStatistics,
                isModel: true,
                default: new MatchStatistics({})
            },
            time: {
                type: Number,
                default: 90
            },
            homeEventList: {
                type: Event,
                isArray: true,
                default: []
            },
            awayEventList: {
                type: Event,
                isArray: true,
                default: []
            },
            dateCreated: {
                type: Number,
                default: 0
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Match;
