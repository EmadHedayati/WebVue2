<template>
    <div class="table-responsive border table-height">
        <table class="table m-0">
            <thead>
            <tr>
                <th class="h4 font-weight-bold pt-4 pl-4 bottom-border table-header-padding"
                    v-text="table.colList[0]"></th>
                <th class="text-center h6 text-muted left-bottom-border cp"
                    v-for="(item, index) in table.colList.slice(1, table.colList.length)"
                    :key="index"
                    v-text="item"
                    @click="sortBy(index)"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tableRow, tableRowIndex) in table.tableRowList"
                :key="tableRowIndex">
                <th scope="tableRow"
                    class="text-dark font-weight-normal pl-4 no-border"
                    :class="[tableRowIndex === 0 ? 'pt-4' : '', tableRowIndex === table.tableRowList.length - 1 ? 'pb-4' : '']">
                    <router-link :to="getRouterUrl(tableRow.banner)" tag="div" class="cp">
                        <div class="row">
                            <div class="col-auto py-0 px-2">
                                <img class="circle image ml-2" :src="tableRow.banner.image"/>
                            </div>
                            <div class="col py-0 pl-2 pr-4 align-items-start">
                                <span class="h6 text-dark font-weight-bold">{{tableRow.banner.title}}</span>
                            </div>
                        </div>
                    </router-link>
                </th>
                <td class="text-dark font-weight-normal text-center left-border"
                    :class="[tableRowIndex === 0 ? 'pt-4' : '', tableRowIndex === table.tableRowList.length - 1 ? 'pb-4' : '']"
                    v-for="(data, dataIndex) in tableRow.rowData"
                    :key="dataIndex"
                    v-text="data"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import TableData from "../../models/TableData";
    import Team from "../../models/Team";
    import Player from "../../models/Player";

    export default {
        name: 'Table',

        props: {
            table: {
                type: TableData,
                default: new TableData({}),
            },
        },

        methods: {
            getRouterUrl(banner) {
                if (banner.type == 'Team')
                    return {name: 'team', params: {teamId: banner.id}};
                if (banner.type == 'Player')
                    return {name: 'player', params: {playerId: banner.id}};
            },

            sortBy(columnIndex) {
                this.table.sortBy(columnIndex);
            }
        }
    }
</script>

<style scoped>
    .table-height {
        max-height: 500px;
    }

    .w-35 {
        width: 30%;
    }

    .no-border {
        border: none;
    }

    .bottom-border {
        border-right: none;
        border-top: none;
        border-bottom: 1px solid #e2e2e2;
        border-left: none;
    }

    .left-border {
        border-right: none;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid #e2e2e2;
    }

    .left-bottom-border {
        border-right: none;
        border-top: none;
        border-bottom: 1px solid #e2e2e2;
        border-left: 1px solid #e2e2e2;
    }

    .image {
        width: 20px;
        height: 20px;
        object-fit: cover;
    }

    .table-header-padding {
        padding-right: 100px;
    }
</style>
