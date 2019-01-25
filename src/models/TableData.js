import Model from "./Model";
import TableRow from "./TableRow";

class TableData extends Model {
    getAttributes() {
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
        this.tableRowList.sort((a, b) => {
            if (typeof a.rowData[columnIndex] === 'string' || a.rowData[columnIndex] instanceof String)
                return a.rowData[columnIndex].localeCompare(b.rowData[columnIndex]);
            if (typeof a.rowData[columnIndex] === 'number' || a.rowData[columnIndex] instanceof Number)
                return b.rowData[columnIndex] - a.rowData[columnIndex];
        });
    }
}

export default TableData;
