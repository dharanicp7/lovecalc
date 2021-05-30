document.getElementById("bt").addEventListener("click",cl);

function cl(){
  var yourName=document.querySelector(".lc input.yn").value;
  var crushName=document.querySelector(".lc input.cn").value;
  var mess=document.querySelector(".message");
  var percent=document.querySelector(".random-percent");
  var dk=["Dharani","dharani","Dharani kiran","dharani kiran"];
  var ka=["Krithika","krithi","krithika","Krithi"];
  if(yourName==""||crushName==""){
    percent.innerHTML="";
    mess.innerHTML="Oops,Insert a proper name!";
  }else if(dk.includes(yourName)&& ka.includes(crushName) || dk.includes(crushName)&& ka.includes(yourName)){
    percent.innerHTML="100%";
    mess.innerHTML="Soulmates,They are made for each other";
    } else {
  var loveScore = Math.random();
  loveScore*=100;
  loveScore=Math.floor(loveScore)+1;
  percent.innerHTML=`${loveScore}%`;
  if(loveScore>50){
    mess.innerHTML="BFF,They know well eachother";
  }else if(loveScore>30){
    mess.innerHTML="Dreamer,Get to know about your crush"
  }else if(loveScore==100){
    mess.innerHTML="Soulmates,They are made for each other";
  }else{
    mess.innerHTML="Hey,Don't lose hope its just a random number generator.Trust your love!"
  }
  }
}
