<template>
    <form class="border border-red-300">
        <h1 class="text-3xl bg-indigo-500 rounded-xl text-stone-50 text-center  ">SignupForm</h1>
      <label>Email: </label>
      <input type="email" required v-model="email" />
      <label>Password: </label>
      <input type="password" required v-model="password" />
      <label>Role: </label>
      <select v-model="role">
        <option value="developr">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
      <label>Skills:   Alt+, </label>
      <input type="text" v-model="tempSkill" @keyup="addskill">
      <div v-for="skill in skills" :key="skill" class="pill">
        {{ skill }}
      </div>
      <div class="terms">
        <input type="checkbox" v-model="terms" required />
        <label>Accept Terms and Condition</label>
      </div>
    
    </form>
  
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "Alisan",
        password: "Abdi",
        role: "designer",
        terms: true, 
        tempSkill: '',
        skills:[]
    
      };
    },
    methods:{
      addskill(e){
          if(e.key===',' && this.tempSkill){
            if(! this.skills.includes(this.tempSkill)){
              this.skills.push(this.tempSkill)
            }
          this.tempSkill=''
         }
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  
  select,
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  </style>
  