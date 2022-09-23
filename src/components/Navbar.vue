<template>
    <nav class="main-nav">
        <router-link :to="{name: 'home'}">Yapılacaklar</router-link>
        <router-link :to="{name: 'YapilacakEkle'}">Yapılacak Ekle</router-link>
    </nav>
</template>
<script></script>

<style>
    .main-nav{
        text-align: center;
        margin:40px auto;    }

        .main-nav a{
       display:inline-block;
       text-decoration: dashed;
       margin:0 10px;
       color:#333;
       font-size: 18px;
    
       }

       a.router-link-active{
        border-bottom: 2px solid rgba(66, 66, 131, 0.267);
        padding-bottom: 4px;
       }
</style>