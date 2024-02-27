 
<!-- App.vue -->
<template>
   <div >
   <router-link to="/about">About</router-link>
   <router-link to="/home">Home</router-link>
   <br/>

</div>
   App Page
     <router-view></router-view>
 </template>
 
 <script>
 export default {
   name: 'App'
 }
 </script>
 