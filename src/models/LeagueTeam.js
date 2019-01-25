import Model from "./Model";
import Team from "./Team";
import Match from "./Match";

class LeagueTeam extends Model {
    getAttributes() {
        return {
            team: {
                type: Team,
                isModel: true,
                default: new Team({}),
            },
            rank: {
                type: Number,
                default: 0
            },
            points: {
                type: Number,
                default: 0
            },
            played: {
                type: Number,
                default: 0
            },
            goalDifference: {
                type: Number,
                default: 0
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default LeagueTeam;
