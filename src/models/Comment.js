import Model from "./Model";
import Account from "./Account";

class Comment extends Model {
    getAttributes(){
        return {
            id: {
                type: Number,
                default: ''
            },
            body: {
                type: String,
                default: ''
            },
            author: {
                type: Account,
                default: ''
            },
            dateCreated: {
                type: String,
                default: new Date().getTime()
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Comment;
