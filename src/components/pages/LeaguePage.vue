<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <AccountBanner :account="league"/>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-8">
                    <MatchDetail :match="league.nextMatch"/>
                </div>
                <div class="col-md-4">
                    <MatchList :latestMatchList="league.matchList"
                               title="Match List" :singleType="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Table :table="league.leagueTeamTable"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dummy from "../../utils/Dummy";
    import Table from "../partials/Table";
    import AccountBanner from "../partials/AccountBanner";
    import League from "../../models/League";
    import MatchList from "../partials/list/MatchList";
    import MatchDetail from "../partials/MatchDetail";
    import LeagueService from "../../webservices/LeagueService";

    export default {
        name: 'LeaguePage',

        components: {
            MatchDetail,
            MatchList,
            AccountBanner,
            Table,
        },

        props: {
            table: Table,
        },

        data() {
            return {
                league: League,
            }
        },

        methods: {
            getLeaguePageData: function () {
                new LeagueService().get(this.$route.params.leagueId).then((response) => {
                    console.log(response)
                    this.league = response.league;
                });
            },

            getLeagueData: function () {
                this.league = Dummy.league();
            },

            updateData() {
                this.getLeaguePageData();
                // this.getLeagueData();
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
