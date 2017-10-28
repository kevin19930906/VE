<template>
  <div class="home">
    <banner></banner>
    <syul1banner></syul1banner>
    <ssjg></ssjg>
    <syft></syft>
  </div>
</template>
<script>
  import banner from "./banner.vue"
  import syul1banner from "./syul1banner.vue"
  import ssjg from "./ssjg.vue"
  import syft from "./syft.vue"
  export default {
    components:{
      banner,syul1banner,ssjg,syft
    }
  }
</script>
