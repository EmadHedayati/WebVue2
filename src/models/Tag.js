import Model from "./Model";

class Tag extends Model {
    getAttributes() {
        return {
            id: {
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Tag;
