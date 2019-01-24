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
                    <Table :table="statisticsTable"/>
                </div>
                <div class="col">
                    <Table :table="detailsTable"/>
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
    import PlayerService from "../../webservices/PlayerService";

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
                statisticsTable: {},
                detailsTable: {},
            }
        },

        methods: {
            getPlayerPageData: function () {
                new PlayerService().get(this.$route.params.playerId).then((response) => {
                    this.player = response.player;
                    this.latestNewsList = response.latestNewsList;
                    this.statisticsTable = response.statisticsTable;
                    this.detailsTable = response.detailsTable;
                });
            },

            getPlayerData: function () {
                this.player = Dummy.player();
            },

            getLatestNewsListData: function () {
                this.latestNewsList = Dummy.newsList(3);
            },

            getStatisticsData: function () {
                this.statisticsTable = Dummy.table(5, 4, 'team');
            },

            getDetailsData: function () {
                this.detailsTable = Dummy.table(10, 5, 'team');
            },

            updateData() {
                this.getPlayerPageData();
                // this.getPlayerData();
                // this.getLatestNewsListData();
                // this.getStatisticsData();
                // this.getDetailsData();
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
