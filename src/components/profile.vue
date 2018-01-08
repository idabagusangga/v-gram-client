<template lang="html">
  <div class="">
      <p>{{owner}}</p>
  </div>
</template>

<script>
export default {
    props : ['owner'],
    data(){
        return{
            ownerInfo : this.owner
        }
    }
}
</script>

<style lang="css">
</style>
