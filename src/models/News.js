import Model from "./Model";
import Tag from "./Tag";
import User from "./User";
import Comment from "./Comment";
import Match from "./Match";

class News extends Model {
    getAttributes(){
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
            body: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            tagList: {
                type: Tag,
                isArray: true,
                default: []
            },
            author: {
                type: User,
                isModel: true,
                default: new User({})
            },
            commentList: {
                type: Comment,
                isArray: true,
                default: []
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

export default News;
