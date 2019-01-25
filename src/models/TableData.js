import Model from "./Model";
import TableRow from "./TableRow";

class TableData extends Model {
    getAttributes(){
        return {
            colList: {
                type: Array,
                default: []
            },
            tableRowList: {
                type: TableRow,
                isArray: true,
                default: []
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }

    sortBy(columnIndex) {
        this.tableRowList.sort( (a, b) => { return a.rowData[columnIndex].localeCompare(b.rowData[columnIndex]); });
    }
}

export default TableData;
