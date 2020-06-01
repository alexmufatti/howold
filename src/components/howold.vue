<template>
    <div>
    <h1 class="fiammi">{{initial}}</h1>

    <p>{{person.name}} is </p>
    <p>{{years}}&nbsp;years {{months}}&nbsp;months {{days}}&nbsp;days {{hours}}&nbsp;hours {{minutes}}&nbsp;minutes {{seconds}}&nbsp;seconds old</p>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: 'howold',
        props: ['person', 'now'],
        template: '',
        computed: {
            dur: function() { return moment.duration(this.now.diff(this.person.date))},
        years: function () {
                return this.dur.years();
            },
            months: function () {
                return this.dur.months();
            },days: function () {
                return this.dur.days();
            },hours: function () {
                return this.dur.hours();
            },minutes: function () {
                return this.dur.minutes();
            }, seconds: function () {
                return this.dur.seconds();
            },
            initial: function () {
                return this.person.name.substr(0,1);
            }
        }
    }
</script>

<style>
    /* app css stylesheet */

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #DEA3A0;
        color: white;
        font-size: 30px;
        font-weight: 100;
    }

    p {
        margin: 0 auto 30px;
        width: 80%;
        text-align: center;
    }

    .container
    {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    .fiammi
    {
        font-family: 'Marck Script', cursive;
        margin: 30px auto 60px;
        border: 2px solid white;
        width: 144px;
        height: 144px;
        font-size: 108px;
        line-height: 140px;
        display: block;
        font-weight: 100;
        color: #fff;
        text-align: center;
        cursor: default;
        border-radius: 15%;

    }
</style>
