<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { TEngine} from '../../ts/TEngine';

const threeTarget = ref<HTMLElement>();

onMounted(()=>{
    const TE = new TEngine(threeTarget.value!);
    
})





</script>

<template>
<div class="three-canvas" ref="threeTarget">

</div>
</template>

<style scoped>
.three-canvas{
    width: 100%;
    height: 100%;
}

</style>