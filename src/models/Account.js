import Model from "./Model";

class Account extends Model {
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
            dateCreated: {
                type: Number,
                default: 0
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Account;
