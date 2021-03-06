import Model from "./Model";
import User from "./User";

class Comment extends Model {
    getAttributes(){
        return {
            id: {
                type: Number,
                default: 0
            },
            body: {
                type: String,
                default: ''
            },
            author: {
                type: User,
                isModel: true,
                default: new User({})
            },
            dateCreated: {
                type: String,
                default: 0
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Comment;
