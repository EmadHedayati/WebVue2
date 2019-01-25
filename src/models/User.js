import Model from "./Model";

class User extends Model {
    getAttributes() {
        return {
            id: {
                type: Number,
                default: 0
            },
            username: {
                type: String,
                default: ''
            },
            email: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default User;
