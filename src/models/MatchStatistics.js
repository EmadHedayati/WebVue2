import Model from "./Model";
import Team from "./Team";

class MatchStatistics extends Model {
    getAttributes() {
        return {
            title: {
                type: String,
                default: ''
            },
            statisticsList: {
                type: Array,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default MatchStatistics;
