<!-- About.vue -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mt-5 mx-auto">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Register to Matri</h5>

          </div>
          <div class="card-body">
            <form @submit="register">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="name"   aria-describedby="nameHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input  v-model="confirm_password" type="password" class="form-control" id="confirm_password">
              </div>
               <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
   return {
    name:'',
    email:'',
    password:'',
    confirm_password:'',
    errors:[],
    successMsg :''
   };

  },
  methods:{
    register(e){
      e.preventDefault();
      if(this.password != this.confirm_password)
      { 
        this.errors=["Password and confirm password does not match"];
        alert("error");  
        return false;
      } 
      alert("submimtted");  
      axios.post('api/register', {
        name:this.name,
        email:this.email,
        password:this.password,
        confirm_password:this.confirm_password
      } 
      ).then( response =>{
        console.log("response",response);
      })
      .catch( error =>{
        console.log("error",error);
      })
    }

  }
}
</script>