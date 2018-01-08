<template lang="html">
  <div class="">
      <h1>{{msg}}</h1>
      <div class="row">
          <allPics v-for='p in pictures' :picture="p"/>  
      </div>
  </div>
</template>

<script>
import allPics from '@/components/allPics'
export default {
    data(){
        return{
            msg         : 'Browse posts',
            pictures    : []
        }
    },
    components:{
        allPics : allPics
    },
    methods:{
        getAllPics(){
            let token = localStorage.getItem('token')
            axios.post('http://localhost:3000/pictures/browse',{
                token : token
            })
            .then(resp=>{
                console.log(resp.data.pictures);
                this.pictures = resp.data.pictures
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    mounted : function(){
        this.getAllPics()
    }
}
</script>

<style lang="css">
</style>
