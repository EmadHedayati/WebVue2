<template>
    <div class="container-fluid">
        <div class="row main-container m-0 my-5">
            <div class="row background m-0">
                <div class="col-auto line name-container align-self-center">
                </div>
                <div class="col fill-border">
                </div>
                <div class="col-auto line name-container align-self-center">
                </div>
            </div>
            <div class="row top-header align-items-center justify-content-center">
                <div class="col-auto">
                    <img class="circle image float-left mr-2" :src="match.homeTeam.image"/>
                    <span class="h6 text-dark font-weight-bold float-left m-0">{{match.homeTeam.shortTitle}}</span>
                </div>
            </div>
            <div class="row bottom-header align-items-center justify-content-center">
                <div class="col-auto">
                    <img class="circle image float-right ml-2" :src="match.awayTeam.image"/>
                    <span class="h6 text-dark font-weight-bold float-right m-0">{{match.awayTeam.shortTitle}}</span>
                </div>
            </div>
            <div class="row center-events m-0 p-0">
                <div class="row time-line-container my-0 mx-3">
                    <div class="row top-event align-items-center justify-content-center p-0 m-0"
                         v-for="(item, index) in match.homeEventList"
                         :key="index * 4 + 0"
                         v-show="item.important"
                         :style="{ left: (((item.time - 2) * 100) / match.time) + '%' }">
                        <div class="col-auto p-0 m-0">
                            <img class="circle image" :src="item.image"/>
                        </div>
                    </div>
                    <div class="row top-minute align-items-center justify-content-center p-0 m-0"
                         v-for="(item, index) in match.homeEventList"
                         :key="index * 4 + 1"
                         v-show="item.important"
                         :style="{ left: (((item.time - 2) * 100) / match.time) + '%' }">
                        <div class="col-auto p-0 m-0">
                            <span class="h6 text-dark font-weight-bold m-0 p-0">{{item.time + "'"}}</span>
                        </div>
                    </div>
                    <div class="row bottom-event align-items-center justify-content-center p-0 m-0"
                         v-for="(item, index) in match.awayEventList"
                         :key="index * 4 + 2"
                         v-show="item.important"
                         :style="{ right: (((match.time - item.time - 2) * 100) / match.time) + '%' }">
                        <div class="col-auto p-0 m-0">
                            <img class="circle image" :src="item.image"/>
                        </div>
                    </div>
                    <div class="row bottom-minute align-items-center justify-content-center p-0 m-0"
                         v-for="(item, index) in match.awayEventList"
                         :key="index * 4 + 3"
                         v-show="item.important"
                         :style="{ right: (((match.time - item.time - 2) * 100) / match.time) + '%' }">
                        <div class="col-auto p-0 m-0">
                            <span class="h6 text-dark font-weight-bold m-0 p-0">{{item.time + "'"}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row commentary-container mt-5">
            <div class="col">
                <div class="row mb-3"
                     v-for="(item, index) in getCombinedEventList()"
                     :key="index">
                    <div class="col-auto mr-3 p-0">
                        <img class="circle image" :src="item.image"/>
                    </div>
                    <div class="col mr-3">
                        <span class="h6 text-dark font-weight-bold m-0 p-0">{{item.description}}</span>
                    </div>
                    <div class="col-auto p-0">
                        <span class="h6 text-dark font-weight-bold m-0 p-0">{{item.time + "'"}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Match from "../../models/Match";

    export default {
        name: 'MatchTimeLine',

        props: {
            match: Object,
        },

        methods: {
            getCombinedEventList() {
                let merged = [];
                merged = merged.concat(this.match.homeEventList, this.match.awayEventList);
                merged.sort(function (a, b) { return a.time - b.time });
                return merged;
            }
        }
    }
</script>

<style scoped>
    .background {
        position: absolute;
        width: 100%;
        height: 30px;
        left: 0px;
        top: 40px;
    }

    .main-container {
        position: relative;
        height: 110px;
    }

    .time-line-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .name-container {
        width: 100px;
    }

    .commentary-container {
        margin-left: 100px;
        margin-right: 100px;
    }

    .center-events {
        position: absolute;
        left: 100px;
        right: 100px;
        top: 0px;
        bottom: 0px;
    }

    .top-header {
        position: absolute;
        width: 100px;
        height: 40px;
        left: 0px;
        top: 0px;
    }

    .top-event {
        position: absolute;
        width: 30px;
        height: 30px;
        left: 0px;
        top: 0px;
    }

    .bottom-header {
        position: absolute;
        width: 100px;
        height: 30px;
        right: 0px;
        bottom: 0px;
    }

    .bottom-event {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 0px;
        bottom: 0px;
    }

    .top-minute {
        position: absolute;
        width: 30px;
        height: 30px;
        text-align: center;
        left: 0px;
        top: 40px;
    }

    .bottom-minute {
        position: absolute;
        width: 30px;
        height: 30px;
        text-align: center;
        right: 0px;
        top: 40px;
    }

    .image {
        width: 20px;
        height: 20px;
    }
</style>
