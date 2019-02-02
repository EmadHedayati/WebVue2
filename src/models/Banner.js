import Model from "./Model";

class Banner extends Model {
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
            description: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            backgroundImage: {
                type: String,
                default: ''
            },
            subscribed: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Banner;
