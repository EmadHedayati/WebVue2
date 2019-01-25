<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <div class="row border p-3">
                        <div class="col-auto align-self-center">
                            <div class="row mx-2">
                                <img class="icon-size float-right" src="../../assets/icons/baseline-search-24px.svg">
                            </div>
                        </div>
                        <div class="col align-self-center p-0">
                            <input class="w-100 search" v-model="searchText" @keyup.enter="searchInData()"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <LeagueList :leagueList="upcomingLeagueList" title="UPCOMING LEAGUES"/>
                </div>
                <div class="col">
                    <LeagueList :leagueList="finishedLeagueList" title="FINISHED LEAGUES"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dummy from "../../utils/Dummy";
    import LeagueList from "../partials/list/LeagueList";
    import LeagueService from "../../webservices/LeagueService";
    import League from "../../models/League";

    export default {
        name: 'LeagueListPage',

        components: {
            LeagueList,
        },

        data() {
            return {
                searchText: 'Search in here...',
                upcomingLeagueList: [],
                finishedLeagueList: [],
            }
        },

        methods: {
            getLeagueListPageData: function (query) {
                new LeagueService().index(query).then((response) => {
                    for (let item in response.upcomingLeagueList)
                        this.upcomingLeagueList.push(new League(response.upcomingLeagueList[item]))

                    for (let item in response.finishedLeagueList)
                        this.finishedLeagueList.push(new League(response.finishedLeagueList[item]))
                });
            },

            getUpcomingLeagueListData: function () {
                this.upcomingLeagueList = Dummy.leagueList(5 + Dummy.randomNumber(10));
            },

            getFinishedLeagueListData: function () {
                this.finishedLeagueList = Dummy.leagueList(5 + Dummy.randomNumber(10));
            },

            searchInData() {
                this.updateData({q: this.searchText});
            },

            updateData(query) {
                this.searchText = 'Search in here...';
                this.getLeagueListPageData(query);
                // this.getUpcomingLeagueListData();
                // this.getFinishedLeagueListData();
            }
        },

        created: function () {
            this.updateData();
        },

        watch: {
            '$route'() {
                this.updateData();
            }
        },
    }
</script>

<style scoped>
    .search {
        background: white;
        border: white;
    }

    .search:focus {
        background: white;
        border: white;
    }
</style>
