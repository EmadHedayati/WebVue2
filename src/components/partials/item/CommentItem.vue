<template>
    <div class="container-fluid fill-border">
        <div class="row p-3">
            <div class="col-auto p-0 mr-3">
                <img class="circle author-image" :src="comment.author.image"/>
            </div>
            <div class="col align-self-center">
                <div class="row">
                    <span class="w-100 h6 text-info font-weight-bold">{{comment.author.title}}</span>
                    <span class="w-100 h6 text-muted font-weight-light">{{getFormattedTime(comment.dateCreated)}}</span>
                </div>
                <div class="row">
                    <span class="w-100 h6 font-weight-normal">{{comment.body}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Comment from "../../../models/Comment";

    export default {
        name: 'CommentItem',

        props: {
            comment: new Comment({}),
        },

        methods: {
            getFormattedTime(date) {
                var tmp = new Date();
                tmp.setTime(date);
                return tmp.toDateString();
            }
        },
    }
</script>

<style scoped>
    .author-image {
        width: 50px;
        height: 50px;
    }
</style>
