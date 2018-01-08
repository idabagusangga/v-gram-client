<template lang="html">
  <div class="container">
      <h3>{{regisMsg}}</h3>
      <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
    </div>
    <br>
    <button type="button" class="btn btn-outline-primary" @click="login">Login</button>
    <br><br>
     Or<br>
     <br>
    <button type="button" class="btn btn-outline-primary" @click="register">Register</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            regisMsg:''
        }
    },
    methods:{
        login(){
            axios.post('http://localhost:3000/users/login',{
                email: this.email,
                password:this.password
            })
            .then(response=>{
                console.log(response);
                localStorage.setItem('token',response.data.token)
                this.$router.push('/home')
            })
            .catch(err=>{
                this.regisMsg = 'Email / Password Not Found'
                console.log(err);
            })
        },
        register(){
            axios.post('http://localhost:3000/users',{
                email: this.email,
                password:this.password
            })
            .then(success=>{
                this.regisMsg = 'User Created! Please Log In'
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style lang="css">
</style>
