$(document).ready(function() {


var apiUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

  //creates <div> elements for each user name

   for (i=0;i<apiUsers.length;i++){
    var html="<div class= bigBox><div id="+apiUsers[i].toLowerCase()+"0></div><div class= smallBox><div id="+apiUsers[i].toLowerCase()+"2><div><div id="+apiUsers[i].toLowerCase()+"1></div></div></div>";
    $(html).appendTo(".returnUserName");
  }


   apiUsers.forEach(function(apiUsers){

   var apiURLUsers="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/"+apiUsers+"/";
   var apiURLStreams="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/"+apiUsers+"/";

         $.getJSON(apiURLUsers, function(data) {
           console.log(data)

              var userLogo="#"+data.name.toLowerCase()+"0";
              var userName="#"+data.name.toLowerCase()+"1";

              var htmlLogo="<div class=userLogo><img class=userIMG src="+ data.logo +"></img></div>";
              var htmlName="<div class=userName>"+data.name+"</div>";

              $(htmlLogo).appendTo(userLogo);
              $(htmlName).appendTo(userName);
                  });

         $.getJSON(apiURLStreams, function(data) {

           var userStatus="#"+data._links.self.replace("https://api.twitch.tv/kraken/streams/","").toLowerCase()+"2";
           var userLink=data._links.self.replace("https://api.twitch.tv/kraken/streams/","").toLowerCase();
             if(data.stream===null)
               var htmlStatus="<div class=userStream>Offline</div>";
             else if(data.stream===undefined)
               var htmlStatus="<div class=userStream>Closed</div>";
             else
               var htmlStatus="<a href=https://www.twitch.tv/"+userLink+"><div class=userStream>"+data.stream.game+"</div><a>";

               $(htmlStatus).appendTo(userStatus);
         });
   });


$("#allUsers").on("click", function(){
   apiUsers.forEach(function(apiUsers){
       var apiURLUsers="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/"+apiUsers+"/";
   var apiURLStreams="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/"+apiUsers+"/";
     $.getJSON(apiURLStreams, function(data) {

       var userStatusStatus=data._links.self.replace("https://api.twitch.tv/kraken/streams/","").toLowerCase();
       var userStatusStatusStatus="#"+userStatusStatus+"0";
       var userStatusStatusName="#"+userStatusStatus+"1";
       var userStatusStatusLogo="#"+userStatusStatus+"2";
                 $(userStatusStatusStatus).children().show();
                 $(userStatusStatusName).children().show();
                 $(userStatusStatusLogo).children().show();
     });
   });

 });

$("#onlineStatus").on("click", function(){

   apiUsers.forEach(function(apiUsers){

   var apiURLUsers="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/"+apiUsers+"/";
   var apiURLStreams="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/"+apiUsers+"/";
     $.getJSON(apiURLStreams, function(data) {
       var userStatusStatus=data._links.self.replace("https://api.twitch.tv/kraken/streams/","").toLowerCase();
       var userStatusStatusStatus="#"+userStatusStatus+"0";
       var userStatusStatusName="#"+userStatusStatus+"1";
       var userStatusStatusLogo="#"+userStatusStatus+"2";
            if(data.stream===null || data.stream===undefined){

                 $(userStatusStatusStatus).children().hide();
                 $(userStatusStatusName).children().hide();
                 $(userStatusStatusLogo).children().hide();
           }

            if(data.stream!=null || data.stream!=undefined){
                   $(userStatusStatusStatus).children().show();
                 $(userStatusStatusName).children().show();
                 $(userStatusStatusLogo).children().show();
           }
     });
   });
});


$("#offlineStatus").on("click", function(){

   apiUsers.forEach(function(apiUsers){
   var apiURLUsers="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/"+apiUsers+"/";
   var apiURLStreams="https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/"+apiUsers+"/";
   $.getJSON(apiURLStreams, function(data) {
       var userStatusStatus=data._links.self.replace("https://api.twitch.tv/kraken/streams/","").toLowerCase();
       var userStatusStatusStatus="#"+userStatusStatus+"0";
       var userStatusStatusName="#"+userStatusStatus+"1";
       var userStatusStatusLogo="#"+userStatusStatus+"2";
             if(data.stream!=null || data.stream!=undefined){
                 $(userStatusStatusStatus).children().hide();
                 $(userStatusStatusName).children().hide();
                 $(userStatusStatusLogo).children().hide();
           }
         if(data.stream===null || data.stream===undefined){
                 $(userStatusStatusStatus).children().show();
                 $(userStatusStatusName).children().show();
                 $(userStatusStatusLogo).children().show();
           }
     });
   });
});
});
