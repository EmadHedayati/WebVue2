import Model from "./Model";

class Table extends Model {
    getAttributes(){
        return {
            colList: {
                type: Array,
                default: ''
            },
            rowList: {
                type: Array,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }

    sortBy(columnIndex) {
        this.rowList.sort( (a, b) => { return a[columnIndex].localeCompare(b[columnIndex]); });
    }
}

export default Table;
