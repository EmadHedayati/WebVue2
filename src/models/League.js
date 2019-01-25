import Account from "./Account";
import Match from "./Match";
import Table from "./TableData";

class League extends Account {
    getAttributes(){
        return {
            matchList: {
                type: Match,
                isArray: true,
                default: []
            },
            nextMatch: {
                type: Match,
                isModel: true,
                default: new Match({})
            },
            leagueTeamTable: {
                type: Table,
                isModel: true,
                default: new Table({})
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default League;
