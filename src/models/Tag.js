import Model from "./Model";

class Tag extends Model {
    getAttributes() {
        return {
            id: {
                type: Number,
                default: ''
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
