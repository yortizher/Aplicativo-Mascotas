<script setup>

</script>

<template>
    <div class="page-found">
        <span class="text">404</span>
        <img clas="img" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-MHzYyqsjis8%2FUO3_YYcVcdI%2FAAAAAAAAAL8%2FxoglMjfSNdc%2Fs1600%2Fperro_droopy_detective.gif&f=1&nofb=1&ipt=96ec2d5cd0b0f3b3a9875d8d027ac4bd7307c0fdfc9b0b43ccd449f28543dfaa&ipo=images" alt="imagenError404">
    </div>
</template>
<style scoped>
   .page-found{
    display: flex;
    flex-direction: column;
     width: 30%;
     margin: 15% auto;
     color: #0dcaf0;
     font-size: 60px;
     font-weight: 900;

   }
   .img{
    widows: 20px;
    height: 20px;
   }
   .text {
    text-align: center;
    padding: 5% auto;
   }
 @media (min-width: 768px) {
    .page-found{
        display: flex;
        flex-direction: row;
        width: 50%;
        font-size: 130px; 
        margin: 10% auto;  
        font-size: 120px;
   }
   .text {
    text-align: center;
    padding: 55% auto;
   }
    .img{
    widows: 30%;
    height: 30%;
   }
 }
@media (min-width: 1024px) {
  
} 
</style>