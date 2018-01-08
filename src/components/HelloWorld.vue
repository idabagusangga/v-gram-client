<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Login to continue</p>
    <formLogin/>
  </div>
</template>

<script>
import formLogin from '@/components/form'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'V-Gram'
    }
  },
  components:{
      formLogin : formLogin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
