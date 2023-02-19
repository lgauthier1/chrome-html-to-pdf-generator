<script setup lang="ts">

</script>

<template>
    <div class="page">
        <h1> Hello </h1>
    </div>
    <div class="page">
        <h1> Hello </h1>
    </div>
</template>

<style scoped>
    body, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background:rgb(82, 86, 89)important;
        font: 12pt "Tahoma";
        
    }
    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    .page {
        color: black;
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: 10mm auto;
        border: 1px #D3D3D3 solid;
        border-radius: 5px;
        background: white!important;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    
    @page {
        size: A4;
        margin: 0;
    }
    @media print {
        html, body {
            width: 210mm;
            height: 297mm;
        }
        
        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            /* width: initial; */
            box-shadow: initial;
            page-break-before: avoid!important;
            page-break-after: avoid!important;
        }
    }
  </style>
