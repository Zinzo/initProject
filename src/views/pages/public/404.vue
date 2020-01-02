<template>
    <div>
        <h1>404.</h1> 
        <h3>The page requeted is not found.</h3>
        <button type="button" class="bnt" @click='goBack'>뒤로기가</button>
    </div>
</template>

<style lang="scss">
    
</style>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import CommonMixin from '@/mixin/common-mixin';

    @Component({})
    export default class PageNotFound extends CommonMixin {
        
    }
</script>