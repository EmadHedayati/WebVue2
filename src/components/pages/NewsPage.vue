<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mb-5 m-0 p-0">
                <div class="col mr-3 align-self-end">
                    <div class="row mb-3">
                        <span class="w-100 h6 text-info font-weight-light">{{getTagListString()}}</span>
                        <span class="w-100 h1 font-weight-bold">{{news.title}}</span>
                        <span class="w-100 h5 text-muted font-weight-normal">{{news.description}}</span>
                    </div>
                    <div class="row">
                        <div class="col-auto p-0 mr-3">
                            <img class="circle author-image" :src="news.author.image"/>
                        </div>
                        <div class="col align-self-center">
                            <div class="row">
                                <span class="w-100 h6 text-info font-weight-bold">{{news.author.title}}</span>
                                <span class="w-100 h6 text-muted font-weight-light">{{getFormattedTime(news.dateCreated)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col ml-3 p-0">
                    <img class="news-image border" :src="news.image"
                         @load="setImageHeight($event, (10/16))" :style="{ height: imageHeight + 'px' }"/>
                </div>
            </div>
            <div class="row mb-5 m-0 p-3">
                <div class="row border">
                    <span class="w-100 h5 text-muted font-weight-light p-4" v-html="news.body"></span>
                </div>
            </div>
            <div class="row p-3">
                <div class="col-md-8 pr-5">
                    <div class="row">
                        <CommentList :commentList="news.commentList" title="COMMENTS"/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <NewsList :newsList="relatedNewsList" title="RELATED NEWS"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dummy from "../../utils/Dummy";
    import News from "../../models/News";
    import CommentList from "../partials/list/CommentList";
    import NewsList from "../partials/list/NewsList";
    import NewsService from "../../webservices/NewsService";

    export default {
        name: 'NewsPage',
        components: {NewsList, CommentList},

        data() {
            return {
                imageHeight: 0,
                news: new News({}),
                relatedNewsList: [],
            }
        },

        methods: {
            getNewsPageData: function () {
                new NewsService().get(this.$route.params.newsId).then((response) => {
                    this.news = new News(response.news);
                    console.log(this.news)
                    for (let item in response.relatedNewsList)
                        this.relatedNewsList.push(new News(response.relatedNewsList[item]))
                });
            },

            getNewsData: function () {
                this.news = Dummy.news();
            },

            getRelatedNewsData: function () {
                this.relatedNewsList = Dummy.newsList(3);
            },

            getTagListString: function () {
                let tagString = this.news.tagList.length > 0 ? this.news.tagList[0].title : "";
                for (let i = 1; i < this.news.tagList.length; i++) {
                    tagString = tagString + "  .  " + this.news.tagList[i].title;
                }
                return tagString;
            },

            getFormattedTime(date) {
                var tmp = new Date();
                tmp.setTime(date);
                return tmp.toDateString();
            },

            setImageHeight(event, ratio) {
                let image = event.target;
                this.imageHeight = image.clientWidth * ratio;
            },

            updateData() {
                this.getNewsPageData();
                // this.getNewsData();
                // this.getRelatedNewsData()
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
    .news-image {
        width: 100%;
    }

    .author-image {
        width: 80px;
        height: 80px;
    }
</style>
