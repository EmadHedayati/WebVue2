<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <AccountBanner :account="team"/>
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
    import Table from "../partials/Table";
    import AccountBanner from "../partials/AccountBanner";
    import TeamService from "../../webservices/TeamService";
    import axios from 'axios'

    export default {
        name: 'TeamPage',

        components: {
            AccountBanner,
            Table,
            NewsList,
        },

        data() {
            return {
                team: {},
                latestNewsList: [],
                matchesTable: [],
                playersTable: [],
            }
        },

        methods: {
            getTeamPageData: function () {
                TeamService.get().then((response) => {
                    this.team = response.data.team;
                    this.latestNewsList = response.data.latestNewsList;
                    this.matchesTable = response.data.matchesTable;
                    this.playersTable = response.data.playersTable;
                });
            },

            getTeamData: function () {
                this.team = Dummy.team();
                // TeamService.get({teamId: this.$route.params.id}).then((response) => this.team = response);
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

            updateData() {
                // this.getTeamPageData();
                this.getTeamData();
                this.getLatestNewsListData();
                this.getMatchesTableData();
                this.getPlayersTableData();
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
