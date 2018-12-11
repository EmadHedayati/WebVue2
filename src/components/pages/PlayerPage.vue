<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <AccountBanner :account="player"/>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col mb-5">
                    <Table :table="statistics"/>
                </div>
                <div class="col">
                    <Table :table="details"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <NewsList :newsList="latestNewsList" title="LATEST NEWS"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsList from "../partials/list/NewsList";
    import Dummy from "../../utils/Dummy";
    import Table from "../partials/Table";
    import AccountBanner from "../partials/AccountBanner";

    export default {
        name: 'PlayerPage',

        components: {
            AccountBanner,
            Table,
            NewsList,
        },

        props: {
            table: Table,
        },

        data() {
            return {
                player: {},
                latestNewsList: [],
                statistics: {},
                details: {},
            }
        },

        methods: {
            getPlayerData: function () {
                this.player = Dummy.player();
            },

            getLatestNewsListData: function () {
                this.latestNewsList = Dummy.newsList(3);
            },

            getStatisticsData: function () {
                this.statistics = Dummy.table(5, 4, 'team');
            },

            getDetailsData: function () {
                this.details = Dummy.table(10, 5, 'team');
            },

            updateData() {
                this.getPlayerData();
                this.getLatestNewsListData();
                this.getStatisticsData();
                this.getDetailsData();
            }
        },

        created: function() {
            this.updateData();
        },

        watch: {
            '$route' () {
                this.updateData();
            }
        },
    }
</script>

<style scoped>
</style>
