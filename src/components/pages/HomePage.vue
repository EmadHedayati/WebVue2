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
        <!--<Lottie :options="defaultOptions" :height="400" :width="400"-->
        <!--v-on:animCreated="handleAnimation"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <Test2 :loop="true" :haikuStates="getState()">
        </Test2>
        <div class="row mb-5">
            <div class="col-md-7 offset-1">
                <div class="row mb-5">
                    <div class="col">
                        <NewsList :newsList="latestNewsList" title="LATEST NEWS"/>
                    </div>
                </div>
                <div v-if="isLogin" class="row">
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
    import News from "../../models/News";
    import Match from "../../models/Match";
    import Moto from '@haiku/hedayatiemad-moto/vue'
    import Test2 from '@haiku/hedayatiemad-test2/vue'

    export default {
        name: 'HomePage',

        components: {
            Lottie,
            MatchList,
            NewsList,
            SlideList,
            Moto,
            Test2,
        },

        data() {
            let x = require('../../assets/data.json');
            // x.assets[0].p=require('../../assets/logo.png');
            return {
                defaultOptions: { animationData: x },
                animationSpeed: 1,
                isLogin: false,
                sliderNewsList: [],
                latestNewsList: [],
                favouriteNewsList: [],
                footballMatchList: {
                    latest: [],
                    favourites: [],
                },
                basketballMatchList: {
                    latest: [],
                    favourites: [],
                },
            }
        },

        mounted() {
            if (localStorage.login) {
                this.isLogin = localStorage.login == 'true' ? true : false;
            }
        },

        methods: {
            getHomePageData: function () {
                new HomeService().index().then((response) => {
                    for (let item in response.sliderNewsList)
                        this.sliderNewsList.push(new News(response.sliderNewsList[item]))

                    for (let item in response.latestNewsList)
                        this.latestNewsList.push(new News(response.latestNewsList[item]))

                    for (let item in response.favouriteNewsList)
                        this.favouriteNewsList.push(new News(response.favouriteNewsList[item]))

                    for (let item in response.footballMatchList.latest)
                        this.footballMatchList.latest.push(new Match(response.footballMatchList.latest[item]))
                    for (let item in response.footballMatchList.favourites)
                        this.footballMatchList.favourites.push(new Match(response.footballMatchList.favourites[item]))

                    for (let item in response.basketballMatchList.latest)
                        this.basketballMatchList.latest.push(new Match(response.basketballMatchList.latest[item]))
                    for (let item in response.basketballMatchList.favourites)
                        this.basketballMatchList.favourites.push(new Match(response.basketballMatchList.favourites[item]))
                });
                axios.get("/api/test").then((response) => console.log(response.data))
            },

            getState: function () {
                return {
                    color: {
                        "value": "#000000"
                    }
                };
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
