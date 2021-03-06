import Model from "./Model";

class Event extends Model {
    getAttributes() {
        return {
            description: {
                type: String,
                default: ''
            },
            time: {
                type: Number,
                default: 45
            },
            image: {
                type: String,
                default: ''
            },
            important: {
                type: Boolean,
                default: false
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Event;
