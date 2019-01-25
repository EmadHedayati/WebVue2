<template>
    <div class="container-fluid fill-border">
        <div class="row mb-3 px-3 pt-4">
            <div class="col">
                <span class="h4 font-weight-bold">{{title}}</span>
            </div>
            <div class="col-auto align-self-md-end" v-if="!singleType">
                <span class="h6 cp" :class="[selected == 'Latest' ? 'text-info' : 'text-muted']"
                      @click="selectTab('Latest')"
                      v-text="'Latest'"></span>
                <span class="h6 font-weight-bold text-muted"> / </span>
                <span class="h6 cp" :class="[selected == 'Favourites' ? 'text-info' : 'text-muted']"
                      @click="selectTab('Favourites')"
                      v-text="'Favourites'"></span>
            </div>
        </div>
        <div class="row">
            <div class="col line"/>
        </div>
        <div class="row py-4">
            <MatchListItem v-for="(item, index) in latestMatchList"
                           :match="item"
                           :key="index * 2"
                           v-show="selected == 'Latest'"/>
            <MatchListItem v-for="(item, index) in favouritesMatchList"
                           :match="item"
                           :key="index * 2 + 1"
                           v-show="selected == 'Favourites'"/>
        </div>
    </div>
</template>

<script>
    import MatchListItem from "../item/MatchItem";

    export default {
        name: 'MatchList',

        components: {MatchListItem},

        props: {
            singleType: true,
            latestMatchList: [],
            favouritesMatchList: [],
            title: "",
        },

        data() {
            return {
                selected: 'Latest'
            }
        },

        methods: {
            selectTab: function (tab) {
                this.selected = tab;
            }
        }
    }
</script>

<style scoped>
</style>
