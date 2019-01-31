<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <AccountBanner :banner="getBannerFromAccount(player)"/>
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
    import AccountBanner from "../partials/AccountBanner";
    import PlayerService from "../../webservices/PlayerService";
    import Player from "../../models/Player";
    import News from "../../models/News";
    import Table from "../partials/Table";
    import TableData from "../../models/TableData";
    import Banner from "../../models/Banner";

    export default {
        name: 'PlayerPage',

        components: {
            Table,
            AccountBanner,
            NewsList,
        },

        data() {
            return {
                player: new Player({}),
                latestNewsList: [],
                statisticsTable: new TableData({}),
                detailsTable: new TableData({}),
            }
        },

        methods: {
            getPlayerPageData: function () {
                new PlayerService().get(this.$route.params.playerId).then((response) => {
                    this.player = new Player(response.player);

                    for (let item in response.latestNewsList)
                        this.latestNewsList.push(new News(response.latestNewsList[item]))

                    this.statisticsTable = new TableData(response.statisticsTable);
                    this.detailsTable = new TableData(response.detailsTable);
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

            getBannerFromAccount(account) {
                let banner = new Banner({
                    "title": account.title,
                    "description": account.description,
                    "image": account.image,
                    "backgroundImage": account.backgroundImage,
                });
                return banner;
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
