<template>
    <div class="App">
        <div>
            hello world...., {{message}}
        </div>
        <div>
            <p>{{getCounter}}</p>
            <button @click="add">add</button>
        </div>
        <div>
            <!--router-link 组建用于导航到哪个路由-->
            <router-link to="/Home">go Home</router-link>
            <router-link to="/About">go About</router-link>
        </div>
        <div>
            <!--用于展示匹配的路由视图组件-->
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'App',
        data(){
            return {
                message: '大家好,我是明明，今年20岁了。。。'
            }
        },
        computed: {
            ...mapGetters(['getCounter'])
        },
        methods: {
            ...mapActions(['add'])
        }
    }
</script>
<style lang="scss" scoped>
    .App{
        color: skyblue;
    }
</style>