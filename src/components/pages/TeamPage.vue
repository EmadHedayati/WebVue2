<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <AccountBanner :banner="getBannerFromAccount(team)"/>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <Table :table="matchesTable"/>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <Table :table="playersTable"/>
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
    import TeamService from "../../webservices/TeamService";
    import Team from "../../models/Team";
    import News from "../../models/News";
    import Table from "../partials/Table";
    import TableData from "../../models/TableData";
    import Banner from "../../models/Banner";

    export default {
        name: 'TeamPage',

        components: {
            AccountBanner,
            Table,
            NewsList,
        },

        data() {
            return {
                team: new Team({}),
                latestNewsList: [],
                matchesTable: new TableData({}),
                playersTable: new TableData({}),
            }
        },

        methods: {
            getTeamPageData: function () {
                new TeamService().get(this.$route.params.teamId).then((response) => {
                    this.team = new Team(response.team);

                    for (let item in response.latestNewsList)
                        this.latestNewsList.push(new News(response.latestNewsList[item]))

                    this.matchesTable = new TableData(response.matchesTable);
                    this.playersTable = new TableData(response.playersTable);
                });
            },

            getTeamData: function () {
                this.team = Dummy.team();
            },

            getLatestNewsListData: function () {
                this.latestNewsList = Dummy.newsList(3);
            },

            getMatchesTableData: function () {
                this.matchesTable = Dummy.table(5, 3, 'team');
            },

            getPlayersTableData: function () {
                this.playersTable = Dummy.table(7, 5, 'player');
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
                this.getTeamPageData();
                // this.getTeamData();
                // this.getLatestNewsListData();
                // this.getMatchesTableData();
                // this.getPlayersTableData();
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
