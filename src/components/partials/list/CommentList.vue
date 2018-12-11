<template>
    <div class="container-fluid">
        <div class="row mb-3">
            <div class="col p-0">
                <span class="h4 text-dark font-weight-bold">{{title}}</span>
            </div>
        </div>
        <div class="row">
            <CommentItem class="item my-2"
                         v-for="item in commentList"
                         :comment="item"
                         :key="item.id"/>
        </div>
    </div>
</template>

<script>
    import CommentItem from "../item/CommentItem";

    export default {
        name: 'CommentList',

        components: {CommentItem},

        props: {
            commentList: Array,
            title: String,
        },
    }
</script>

<style scoped>
</style>
