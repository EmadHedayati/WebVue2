import Model from "./Model";

class Banner extends Model {
    getAttributes() {
        return {
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
