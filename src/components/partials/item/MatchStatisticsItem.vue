<template>
    <div class="container-fluid">
        <div class="row p-3 align-items-md-center">
            <div class="col">
                <span class="h6 text-dark font-weight-bold float-left">{{statistics.homeValue}}</span>
            </div>
            <div class="col-auto">
                <div class="row p-0">
                    <div class="col p-0">
                        <span class="h6 text-muted">{{statistics.title}}</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <span class="h6 text-dark font-weight-bold float-right">{{statistics.awayValue}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Statistics from "../../../models/Statistics";

    export default {
        name: "MatchStatisticsListItem",

        props: {
            statistics: new Statistics({})
        },

        methods: {
            getFormattedTime(date) {
                var days = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ];
                var tmp = new Date();
                tmp.setTime(date);
                return days[tmp.getDay()] + " " + tmp.getHours() + ":" + tmp.getMinutes();
            }
        }
    };
</script>

<style scoped>
    .image {
        width: 20px;
        height: 20px;
    }
</style>
