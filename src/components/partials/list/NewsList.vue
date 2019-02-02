<template>
    <div class="container-fluid">
        <div class="row mb-3">
            <div class="col p-0">
                <span class="h4 text-dark font-weight-bold">{{title}}</span>
            </div>
            <div class="col-auto p-0">
                <span class="h6 font-weight-bold text-info cp">View More</span>
            </div>
        </div>
        <div class="row" v-show="newsList.length == 0">
            {{emptyString}}
        </div>
        <div class="row" v-show="newsList.length > 0">
            <NewsItem class="item my-2"
                      v-for="item in newsList.slice(0, 10)"
                      :news="item"
                      :key="item.id"/>
        </div>
    </div>
</template>

<script>
    import NewsItem from "../item/NewsItem";

    export default {
        name: 'NewsList',

        components: {NewsItem},

        props: {
            newsList: {
                type: Array,
                default: () => [],
            },
            title: {
                type: String,
                default: '',
            },
            emptyString: {
                type: String,
                default: 'No news to show',
            },
        },
    }
</script>

<style scoped>
</style>
