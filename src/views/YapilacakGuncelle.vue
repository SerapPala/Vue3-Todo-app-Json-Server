<template>
    <h1>Yapılacak Güncelle {{id}}</h1>
    <form action="" @submit.prevent="handleSubmit">
        <label>Başlık:</label><br>
        <input v-model="baslik" type="text" required />

        <label>İçerik:</label><br>
        <input v-model="icerik" type="text" required />

        <button>Güncelle</button>
    </form>
</template>


<script>
    export default {
        props: ['id'],
        data() {
            return {
                baslik: '',
                icerik: '',
                uri: 'http://localhost:3000/yapilacaklar/'+this.id
            }
        },
        mounted(){
            fetch(this.uri).then((res)=>res.json()).then(data=>{
                this.baslik=data.baslik;
                this.icerik=data.icerik
            })
        },
        methods:{
            handleSubmit(){
                fetch(this.uri,{
                    method:'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify({baslik:this.baslik,icerik:this.icerik})
                }).then(()=>{
                    this.$router.push('/')
                }).catch((err)=>console.log(err))

            }
        }
    }
    </script>
    
    <style>
    form {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
    }
    
    label {
        display: block;
        color: #bbb;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
    }
    
    input {
        padding: 10px;
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 100%;
        box-sizing: border-box;
    }
    
    textarea {
        border: 1px solid #ddd;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        height: 100px;
    }
    
    form button {
        display: block;
        margin: 20px auto 0;
        background-color: #00ce99;
        color: white;
        padding: 10px;
        border: 0;
        border-radius: 6px;
        font-size: 16px;
    }
    </style>