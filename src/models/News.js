import Model from "./Model";
import Account from "./Account";

class News extends Model {
    getAttributes(){
        return {
            id: {
                type: Number,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            body: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            tagList: {
                type: Array,
                default: ''
            },
            author: {
                type: Account,
                default: ''
            },
            commentList: {
                type: Array,
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

export default News;
