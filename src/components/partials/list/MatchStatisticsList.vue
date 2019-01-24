<template>
    <div class="container-fluid fill-border">
        <div class="row mb-3 px-3 pt-4">
            <div class="col align-self-md-end align-content-center">
                <router-link :to="{ name: 'team', params: { teamId: match.homeTeam.id }}" tag="div" class="cp">
                    <img class="circle image float-left mr-2" :src="match.homeTeam.image"/>
                    <span class="h6 text-dark font-weight-bold float-left m-0">{{match.homeTeam.shortTitle}}</span>
                </router-link>
            </div>
            <div class="col-auto">
                <span class="h4 font-weight-bold">{{match.matchStatistics.title}}</span>
            </div>
            <div class="col align-self-md-end align-content-center">
                <router-link :to="{ name: 'team', params: { teamId: match.awayTeam.id }}" tag="div" class="cp">
                    <img class="circle image float-right ml-2" :src="match.awayTeam.image"/>
                    <span class="h6 text-dark font-weight-bold float-right m-0">{{match.awayTeam.shortTitle}}</span>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col line"/>
        </div>
        <div class="row py-4">
            <MatchStatisticsListItem v-for="item in match.matchStatistics.statisticsList"
                                     :statistics="item"
                                     :key="item.id"/>
        </div>
    </div>
</template>

<script>
    import MatchStatisticsListItem from "../item/MatchStatisticsItem";
    import Match from "../../../models/Match";

    export default {
        name: 'MatchStatisticsList',

        components: {
            MatchStatisticsListItem,
        },

        props: {
            match: Object,
        },

        methods: {
        }
    }
</script>

<style scoped>
    .image {
        width: 20px;
        height: 20px;
    }
</style>
