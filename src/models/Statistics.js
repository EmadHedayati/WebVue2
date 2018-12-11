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
                default: ''
            },
            awayValue: {
                type: Number,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Statistics;
