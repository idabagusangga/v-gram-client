<template lang="html">
  <div class="">
        <div class="sm-3">
          <div class="card-body">
            <img style="height: 200px; width: 300px; display: block;" :src="follows.profilePic" alt="Card image">
            <p class="card-text">{{follows.email}}</p>
            <a href="#" class="card-link">Albums</a>
            <a href="#" class="card-link">Unfollow</a>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    props : ['follows']
}
</script>

<style lang="css">
.card{
    width : 350px;
    height: 450px;
    padding: 20px;
}
.row{
    padding: 20px;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto }
</style>
