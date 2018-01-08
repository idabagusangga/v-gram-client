<template lang="html">
    <div class=" sm-3" :id="id">
      <div class="card-body">
        <img style="height: 200px; width: 200px; display: block;" :src="album.link" alt="Card image">
        <p class="card-text">{{album.caption}}</p>
        <p>5 January, 2018</p>
        <div class="list-group">
            <p>Comments</p>
            <p>Comments</p>
        </div>
        <a href="#">View All Comments</a><br>
        <a href="#" @click="removePicture">Remove</a>
        
      </div>

    </div> 
</template>

<script>
export default {
    props : ['album'],
    data(){
        return{
            id:this.album._id
        }
    },
    methods:{
        removePicture(){
            

            axios.delete(`http://localhost:3000/pictures/${this.id}`)
            .then(resp=>{
                $(`#${this.album._id}`).remove()
            })
            .catch(err=>{
                console.log(err);
            })
            
        }
    }
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
