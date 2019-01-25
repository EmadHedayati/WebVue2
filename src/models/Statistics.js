import Model from "./Model";

class Statistics extends Model {
    getAttributes() {
        return {
            title: {
                type: String,
                default: ''
            },
            homeValue: {
                type: Number,
                default: 0
            },
            awayValue: {
                type: Number,
                default: 0
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Statistics;
