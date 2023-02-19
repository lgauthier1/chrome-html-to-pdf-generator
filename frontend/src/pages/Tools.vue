<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

// methods
function backHome() {
  router.push('/')
}
function localPrint() {
  window.print();
}

function cloudPrint() {
  alert('coming soon')
}
</script>

<template>
  <div class='toolbar'>
      <mdicon @click="backHome" name="keyboard-backspace" width="52" height="52"/> 
      <mdicon @click="localPrint" name="printer" width="52" height="52"/> 
      <mdicon @click="cloudPrint" name="cloud-download" width="52" height="52"/> 
  </div>
</template>

<style scoped>
  .toolbar{
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    background: rgb(14, 25, 45);
    border: 1px solid rgb(145, 252, 220);
    border-radius: 10px 0 10px 0;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .test{
    position: sticky;
    top: 0px;
  }
  .mdi {
    cursor: pointer;
    margin: 16px;
  }
  @media print {
    .toolbar {display: none;}
  }
</style>


