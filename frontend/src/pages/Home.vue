<script setup lang="ts">

</script>

<template>
  <div>
    <a href="https://lgauthier.com/" target="_blank">
      <img src="/lga.png" class="logo" alt="Vite logo" />
    </a>
  </div>
  <h1> HTML to PDF Generator Benoit </h1>
  <div class='subtext'> <span class='highlight'>Effortlessly</span> convert your HTML documents into <span class='highlight'>professional-grade</span> PDF files with our <span class='highlight'>easy-to-use</span> PDF generation tool.</div>
  <div class='examples'>
    <router-link class='example' to="/example">Single Page</router-link>
    <router-link class='example' to="/example2">Multi Page</router-link>
    <router-link class='example' to="/example">Styled Page</router-link>
  </div>
</template>

<style scoped>
.highlight { color: rgb(145, 252, 220); font-weight: 600;}
.highlight:hover { filter: drop-shadow(0 0 2em #646cffaa);}
.subtext { width: 60%;font-size: 24px;}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.examples{    
    display: flex;
    min-width: 60%;
    justify-content: space-between;
    margin-top: 80px;
  }
.example {
  color:  rgb(145, 252, 220);
  background: rgb(14, 25, 45);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(145, 252, 220);
  border-radius: 10px 0 10px 0;
}
.example:hover { filter: drop-shadow(0 0 2em #646cffaa);}
</style>
