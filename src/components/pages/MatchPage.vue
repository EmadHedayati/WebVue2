<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mb-5">
                <div class="col-md-8">
                    <MatchDetail :match="match"/>
                </div>
                <div class="col-md-4">
                    <MatchStatisticsList :match="match"/>
                </div>
            </div>
            <div class="row my-5">
                <MatchTimeLine :match="match"/>
            </div>
            <div class="row m-0">
                <NewsList :newsList="latestNewsList" title="LATEST NEWS"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Dummy from "../../utils/Dummy";
    import Table from "../partials/Table";
    import AccountBanner from "../partials/AccountBanner";
    import MatchList from "../partials/list/MatchList";
    import MatchDetail from "../partials/MatchDetail";
    import Match from "../../models/Match";
    import MatchStatisticsList from "../partials/list/MatchStatisticsList";
    import MatchTimeLine from "../partials/MatchTimeLine";
    import NewsList from "../partials/list/NewsList";
    import MatchService from "../../webservices/MatchService";

    export default {
        name: 'MatchPage',

        components: {
            NewsList,
            MatchTimeLine,
            MatchStatisticsList,
            MatchDetail,
            MatchList,
            AccountBanner,
            Table,
        },

        data() {
            return {
                match: Object,
                latestNewsList: Array,
            }
        },

        methods: {
            getMatchPageData: function () {
                new MatchService().get(this.$route.params.matchId).then((response) => {
                    this.match = response.match;
                    this.latestNewsList = response.latestNewsList;
                });
            },

            getMatchData: function () {
                this.match = Dummy.match();
            },

            getLatestNewsListData: function () {
                this.latestNewsList = Dummy.newsList(3);
            },

            updateData() {
                this.getMatchPageData();
                // this.getMatchData();
                // this.getLatestNewsListData();
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
