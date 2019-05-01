var spookyPictures = [
    
    
    "https://media1.tenor.com/images/8f870b546014a2940c3b02fe86e5e672/tenor.gif?itemid=6238034","https://steamuserimages-a.akamaihd.net/ugc/950708848810617304/E4DFCA5F8846EDD408CB2425B4B37F8F6BDD736D/","http://thestark.co/wp-content/uploads/2018/08/top-unique-pumpkin-designs-ideas-halloween-faces-easy.jpg"];
    var boredPictures =[
        "https://i.ytimg.com/vi/kZVez99ZKzg/maxresdefault.jpg","https://pbs.twimg.com/media/B1A_3gSCIAAGQYo.jpg","http://1.bp.blogspot.com/_vH2UZLVtkPs/TCRpcCECCmI/AAAAAAAAARE/iEdufktq3TY/s1600/so_bored.jpg"];
        var smugPictures=[
            "https://t0.rbxcdn.com/8b29cc93a1850d1db21fb6ef8cf19379","https://t4.rbxcdn.com/4c599796afe5e498c69bfa7b9fcefe80","https://i.pinimg.com/originals/57/3f/43/573f43e7314aace5238334752f0c2ffc.jpg"];
            var madPictures=[
                "http://clipart-library.com/images/6cp5qodEi.jpg","https://media1.tenor.com/images/2152b34d9df9a237e248192a78714716/tenor.gif?itemid=12008982","https://bobcat.grahamdigital.com/image/upload/view?width=1280&height=720&method=crop&url=https://sharedmedia.grahamdigital.com/photo/2017/09/04/25318_high_res_10509385_ver1.0.jpg"];
 $("#Go").click(function(){
     var mood=$('input').val();
     if(mood==="Spooky"){
         Spooky();
         spookyPictures.forEach(function(spooky){
             $("body").append("<img src="+spooky+">");
         });
     }
         else if(mood==="Bored"){
         Bored();
         boredPictures.forEach(function(bored){
             $("body").append("<img src="+bored+">");
         });
         }
          else if(mood==="Smug"){
         Smug();
         smugPictures.forEach(function(smug){
             $("body").append("<img src="+smug+">");
         });
          }
          else if(mood==="Mad"){
         Mad();
         madPictures.forEach(function(mad){
             $("body").append("<img src="+mad+">");
         });
}
});
function Spooky(){
    console.log("Spooky");
    changeBackgroundColor("gray");
        spookyPictures.forEach(function(spooky){
$("body").append("<img src=" + spooky + ">");
});
$("body").css("color", "white");
}
function Bored(){
    console.log("Bored");
    changeBackgroundColor("navy");
            boredPictures.forEach(function(bored){
$("body").append("<img src=" + bored + ">");
});
$("body").css("color", "white");
}
function Smug(){
    console.log("Smug");
    changeBackgroundColor("yellow");
            smugPictures.forEach(function(smug){
$("body").append("<img src=" + smug + ">");
});
$("body").css("color", "black");
}
function Mad(){
    console.log("Mad");
    changeBackgroundColor("red");
            madPictures.forEach(function(mad){
$("body").append("<img src=" + mad + ">");
});
$("body").css("color", "black");
}
function changeBackgroundColor(color){
    $("body").css("background-color",color);
}
