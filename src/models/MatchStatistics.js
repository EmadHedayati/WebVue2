import Model from "./Model";
import Team from "./Team";
import Statistics from "./Statistics";

class MatchStatistics extends Model {
    getAttributes() {
        return {
            title: {
                type: String,
                default: ''
            },
            statisticsList: {
                type: Statistics,
                isArray: true,
                default: []
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default MatchStatistics;
