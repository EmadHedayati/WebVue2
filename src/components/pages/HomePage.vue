<template>
    <div>
        <div class="row mb-5">
            <div class="col-md-10 offset-1">
                <SlideList :newsList="sliderNewsList"/>
            </div>
        </div>
        <!--<div class="row mb-5">-->
        <!--<div class="col-md-10 offset-1">-->
        <!--<div class="align-content-center align-items-center">-->
        <!--<div class="col">-->
        <!--<Lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <div class="row mb-5">
            <div class="col-md-7 offset-1">
                <div class="row mb-5">
                    <div class="col">
                        <NewsList :newsList="latestNewsList" title="LATEST NEWS"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <NewsList :newsList="favouriteNewsList" title="FAVOURITE NEWS"/>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="row mb-5">
                    <div class="col">
                        <MatchList :latestMatchList="footballMatchList.latest"
                                   :favouritesMatchList="footballMatchList.favourites"
                                   title="Football" :singleType="false"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <MatchList :latestMatchList="basketballMatchList.latest"
                                   :favouritesMatchList="basketballMatchList.favourites"
                                   title="Basketball" :singleType="false"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SlideList from "../partials/list/SlideList";
    import NewsList from "../partials/list/NewsList";
    import MatchList from "../partials/list/MatchList";
    import Dummy from "../../utils/Dummy";
    import Lottie from "../partials/Lottie";
    import HomeService from "../../webservices/HomeService";
    import axios from 'axios'

    export default {
        name: 'HomePage',

        components: {
            Lottie,
            MatchList,
            NewsList,
            SlideList,
        },

        data() {
            return {
                // defaultOptions: {animationData: require('../../assets/dogrun.zip')},
                animationSpeed: 1,
                sliderNewsList: Array,
                latestNewsList: Array,
                favouriteNewsList: Array,
                footballMatchList: Object,
                basketballMatchList: Object,
            }
        },

        methods: {
            getHomePageData: function () {
                new HomeService().index().then((response) => {
                    this.sliderNewsList = response.sliderNewsList;
                    this.latestNewsList = response.latestNewsList;
                    this.favouriteNewsList = response.favouriteNewsList;
                    this.footballMatchList = response.footballMatchList;
                    this.basketballMatchList = response.basketballMatchList;
                });
                axios.get("/api/test").then((response) => console.log(response.data))
            },

            getSliderNewsList: function () {
                this.sliderNewsList = Dummy.newsList(5);
            },

            getLatestNewsListData: function () {
                this.latestNewsList = Dummy.newsList(3);
            },

            getFavouriteNewsListData: function () {
                this.favouriteNewsList = Dummy.newsList(3);
            },

            getFootballMatchListData: function () {
                this.footballMatchList = {
                    latest: Dummy.matchList(3 + Dummy.randomNumber(4)),
                    favourites: Dummy.matchList(3 + Dummy.randomNumber(4)),
                };
            },

            getBasketballMatchListData: function () {
                this.basketballMatchList = {
                    latest: Dummy.matchList(3 + Dummy.randomNumber(4)),
                    favourites: Dummy.matchList(3 + Dummy.randomNumber(4)),
                };
            },

            handleAnimation: function (anim) {
                this.anim = anim;
            },

            stop: function () {
                this.anim.stop();
            },

            play: function () {
                this.anim.play();
            },

            pause: function () {
                this.anim.pause();
            },

            updateData() {
                this.getHomePageData();
                // this.getSliderNewsList();
                // this.getLatestNewsListData();
                // this.getFavouriteNewsListData();
                // this.getFootballMatchListData();
                // this.getBasketballMatchListData();
            },
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

<style>
</style>
