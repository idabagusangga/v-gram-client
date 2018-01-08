<template lang="html">
  <div class="">
      <h3>Welcome</h3>
      
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Upload Photos</button><br><br>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModalPp">Upload Profile Picture</button><br><br>

      <modalUpload/>
      <modalPp/>
      
      
      <h6>Your Photos</h6>
      
          <div class="row">
              <userAlbum v-for="a in albums" :album='a'@fotoBaruNih="albums.push($event)"/>
          </div>

      <div class="">
          <h6>Followers</h6>
          
          
          <div class="row">
              <followers v-for="f in followers" :follows="f"/>
            <div class="sm-3">
              <div class="card-body">
                <img style="height: 200px; width: 300px; display: block;" src="../assets/aatik-tasneem-138230.jpg" alt="Card image">
                <p class="card-text">Follower's Name</p>
                <a href="#" class="card-link">Album</a>
                <a href="#" class="card-link">Unfollow</a>
              </div>
            </div>
            <div class="sm-3">
              <div class="card-body">
                <img style="height: 200px; width: 300px; display: block;" src="../assets/alexandru-zdrobau-195418.jpg" alt="Card image">
                <p class="card-text">Follower's Name</p>
                <a href="#" class="card-link">Album</a>
                <a href="#" class="card-link">Unfollow</a>
              </div>
            </div>
            <div class="sm-3">
              <div class="card-body">
                <img style="height: 200px; width: 300px; display: block;" src="../assets/foto-sushi-128246.jpg" alt="Card image">
                <p class="card-text">Follower's Name</p>
                <a href="#" class="card-link">Album</a>
                <a href="#" class="card-link">Unfollow</a>
              </div>
            </div>
          </div>
          
          
      </div>
  </div>
</template>

<script>
import followers from '@/components/followers'
import userAlbum from '@/components/userAlbum'
import modalUpload from '@/components/modalUpload'
import modalPp from '@/components/modalPp'
export default {
    data(){
        return{
            albums : [],
            followers : []
        }
    },
    components:{
        followers : followers,
        userAlbum : userAlbum,
        modalUpload : modalUpload,
        modalPp : modalPp
    },
    methods:{
        getUserAlbum(){
            let token = localStorage.getItem('token')
            axios.post('http://localhost:3000/users/findUser',{
                token : token
            })
            .then(resp=>{
                console.log(resp.data.users.album);
                this.albums = resp.data.users.album
                this.followers = resp.data.users.followers
                console.log(resp);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        getFollowers(){
            
        }
    },
    mounted :function(){
        this.getUserAlbum()
    }
}
</script>

<style lang="css">

</style>
