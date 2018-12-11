<template>
    <div>
        <div class="row mb-5">
            <div class="col-md-10 offset-1">
                <Slider :newsList="getSliderData()"/>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-7 offset-1">
                <div class="row mb-5">
                    <div class="col">
                        <NewsList :newsList="getLatestNewsListData()" title="LATEST NEWS"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <NewsList :newsList="getFavouriteNewsListData()" title="FAVOURITE NEWS"/>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="row mb-5">
                    <div class="col">
                        <MatchList :latestMatchList="getLatestMatchListData()"
                                   :favouritesMatchList="getFavouriteMatchListData()"
                                   title="Football" :singleType="false"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <MatchList :latestMatchList="getLatestMatchListData()"
                                   :favouritesMatchList="getFavouriteMatchListData()"
                                   title="Football" :singleType="false"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from "../partials/list/SlideList";
    import NewsList from "../partials/list/NewsList";
    import MatchList from "../partials/list/MatchList";
    import Dummy from "../../utils/Dummy";

    export default {
        name: 'HomePage',

        components: {
            MatchList,
            NewsList,
            Slider,
        },

        methods: {
            getSliderData: function () {
                return Dummy.newsList(5);
            },

            getLatestNewsListData: function () {
                return Dummy.newsList(3);
            },

            getFavouriteNewsListData: function () {
                return Dummy.newsList(3);
            },

            getLatestMatchListData: function () {
                return Dummy.matchList(3 + Dummy.randomNumber(4));
            },

            getFavouriteMatchListData: function () {
                return Dummy.matchList(3 + Dummy.randomNumber(4));
            }
        }
    }
</script>

<style>
</style>
