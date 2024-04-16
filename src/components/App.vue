<template>

    <div class="media-manager" v-bind:id="id">
        <Counter></Counter>
        
        <media-manager></media-manager>

    </div>

</template>

<script>
import MediaManager from './MediaManager.vue';
import Counter from "./Counter.vue";

export default {
    components: {Counter, MediaManager },
    props: [ 'id' ],
    created() {
        this.$root.id = this.id;
        this.$mm.onCreated({ vc: this });
    },
    mounted() {
        this.$mm.onMounted({ el: this.$el, vc: this });
    }
};
</script>

<style src="../assets/css/style.scss" lang="scss">
</style>
