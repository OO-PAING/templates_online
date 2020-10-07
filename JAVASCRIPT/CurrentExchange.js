$(document).ready(function(){
   $("#firstinput").on("input",function(){
       var changemoney=$("#firstinput").val();
       $("#secondinput").val(changemoney*1000);
   })
})