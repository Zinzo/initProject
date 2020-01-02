<template>
    <div class='root-page-wrap'>
        <header>
            <nav>네비게이션</nav>
        </header>

        <div class="page-body-wrap">
            <transition name="fade-transform" mode="out-in">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </transition>
        </div>

        <footer>푸터</footer>
    </div>
</template>

<style lang="scss">
    
</style>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({})
    export default class Root extends Vue {
        
    }
</script>