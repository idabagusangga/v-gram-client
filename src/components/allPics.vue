<template lang="html">
    <div class=" sm-3" :id="id">
      <div class="card-body">
        <img style="height: 200px; width: 200px; display: block;" :src="picture.link" alt="Card image">
        <p class="card-text">{{picture.caption}}</p>
        <p>{{picture.ownersId[0].email}}</p>
        <div class="list-group">
            <!-- <p><a href="#" @click="toProfilePage" :profile="owner">Follow</a></p> -->
            <!-- <visit @click="addFollower"/> -->
            <p class="text-info" @click="addFollower"><a href="#">Follow</a></p>
            <p class="unfollow">unfollow</p>
            <div class="form-group">
              <label class="col-form-label col-form-label-sm" for="inputSmall">Comment</label>
              <p>{{picture.comment}}</p>
              <input class="form-control form-control-sm" type="text" placeholder="Say something here!" id="inputSmall" v-model='comment' @keyup.enter='addComment'>
            </div>
        </div>
        <a href="#">View All Comments</a><br>
        
      </div>
    </div>
</template>

<script>
import visit from '@/components/visit'
export default {
    props   :   ['picture'],
    data(){
        return{
            id : this.picture._id,
            owner : this.picture.ownersId[0],
            comment : '',
            previousComment : ''
        }
    },
    methods :{
        toProfilePage(){
            this.$router.push('/profile')
        },
        addFollower(){
            // console.log(this.picture.ownersId[0]._id);
            let token = localStorage.getItem('token')
            axios.post('http://localhost:3000/users/addFollowers',{
                userId : this.picture.ownersId[0]._id,
                token : token 
            })
            .then(resp=>{
                console.log(resp);
                alert(resp)
            })
            .catch(err=>{
                console.log(err);
            })
        },
        addComment(){
            let token = localStorage.getItem('token')
            console.log('...............',this.picture.ownersId[0]._id);
            axios.post('http://localhost:3000/comments/add',{
                token:token,
                ownersId:this.picture.ownersId[0]._id,
                pictureId:this.id,
                comment:this.comment
            })
            .then(resp=>{
                
                alert('comment added')
                this.previousComment = resp.comment
                this.comment = ''
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    components:{
        visit : visit
    }
}
</script>

<style lang="css">
.text-info{
    visibility: visible;
}
.unfollow{
    visibility: visible;
}
</style>
