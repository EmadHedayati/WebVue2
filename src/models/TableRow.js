import Model from "./Model";
import Banner from "./Banner";
import Match from "./Match";

class TableRow extends Model {
    getAttributes(){
        return {
            banner: {
                type: Banner,
                isModel: true,
                default: new Banner({})
            },
            rowData: {
                type: Array,
                default: []
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default TableRow;
