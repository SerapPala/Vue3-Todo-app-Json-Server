<template>
    <div class="yapilacak" :class="{yapildi:yapilacak.yapildi}">
        <div class="baslik">
            <h3 @click="detayGoster=!detayGoster">{{yapilacak.baslik}}</h3>
            <div class="icon">
                <router-link :to="{name:'YapilacakGuncelle',params:{id:yapilacak.id}}">
                    <span class="material-icons">edit</span>
                </router-link>
                <span class="material-icons" @click="yapilacakSil">delete</span>
                <span class="material-icons tick" @click="toggle" >done</span>
            </div>
        </div>
        <div v-if="detayGoster" class="detay">
            <p>{{yapilacak.icerik}}</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  
      props:['yapilacak'],
      data(){
          return {
              detayGoster:false,
              uri:'http://localhost:3000/yapilacaklar/'+this.yapilacak.id
          }
      },
      methods:{
          yapilacakSil(){
              fetch(this.uri,{method:'DELETE'})
                  .then(()=>this.$emit('sil',this.yapilacak.id))
                  .catch((err)=>console.log(err))
          },
          toggle(){
              fetch(this.uri,{
                  method:'PATCH',
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify({yapildi:!this.yapilacak.yapildi})
              }).then(()=>{
                  this.$emit('yapildi',this.yapilacak.id)
              }).catch((err)=>console.log(err))
          }
      }
  }
  </script>
  
  <style>
  
      .yapilacak{
          margin:20px auto;
          background-color: #FFF5E4;
          padding: 10px 20px;
          border-radius: 15px;
          border:3px solid #850E35;
          color:rgb(62, 60, 92);
      }
  
      .yapilacak:hover{
          box-shadow: 8px 10px 10px rgba(2,2,2,0.3);
      }
      h3{
          cursor: pointer;
      }
  
      .baslik{
          display: flex;
          justify-content: space-between;
          align-content: center;
      }
  
      .material-icons{
        padding-top: 10px;
          font-size: 25px;
          margin-left: 10px;
          color:#EE6983;
          cursor: pointer;
      }
      .material-icons:hover{
          color:#2f3543
      }
  
      .yapilacak.yapildi{
          border:3px solid #218c74
      }
  
      .yapilacak.yapildi .tick{
          color:#218c74
      }
  </style>