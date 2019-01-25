<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <AccountBanner :banner="getBannerFromAccount(league)"/>
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
    import AccountBanner from "../partials/AccountBanner";
    import League from "../../models/League";
    import MatchList from "../partials/list/MatchList";
    import MatchDetail from "../partials/MatchDetail";
    import LeagueService from "../../webservices/LeagueService";
    import Table from "../partials/Table";
    import Banner from "../../models/Banner";

    export default {
        name: 'LeaguePage',

        components: {
            Table,
            MatchDetail,
            MatchList,
            AccountBanner,
        },

        data() {
            return {
                league: new League({}),
            }
        },

        methods: {
            getLeaguePageData: function () {
                new LeagueService().get(this.$route.params.leagueId).then((response) => {
                    this.league = new League(response.league);
                    console.log(this.league)
                });
            },

            getLeagueData: function () {
                this.league = Dummy.league();
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
