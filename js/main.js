//Fake json file
var streams =
[
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
]
;


$(document).ready(function() {
    //Requested channels, http request is only simulated here.
    var requested = ["FreeCodeCamp", "OgamingSC2", "ESL_SC2",
        "noobs2ninjas", "brunofin"];
    var remaining = requested.slice(0); //Track unprocessed channels
    //For security reasons json response has been harcoded in var streams
    for (var i = 0; i < streams.length; i++) {
        var thisStream = streams[i];
        if (!thisStream.hasOwnProperty("error")) { //Only existing channels
            if (thisStream.stream) { //Online channels
                var logo = "<img src=" + thisStream.stream.logo +
                    " class='logo img-circle'>";
                var name = thisStream.stream.display_name;
                var url = "https://www.twitch.tv/" + name.toLowerCase();
                var nameLink = '<a href=' + url + '>' + name + '</a>';
                var status = thisStream.stream.status;// .substring(0, 30) + "...";
            } else { //Offline channels
                var logo = '<img src="http://placehold.it/40x40" class="logo img-circle">';
                var name = thisStream.display_name;
                var url = "https://www.twitch.tv/" + name.toLowerCase();
                var nameLink = '<a href=' + url + '>' + name + '</a>';
                var status = "Offline";
            };
            $(".links").append( //Online channels html
                '<div class="row channel online">' +
                '<div class="col-xs-1 logo-center">' + logo + '</div>' +
                '<div class="col-xs-3 channel-name text-center">' + nameLink + '</div>' +
                '<div class="col-xs-8 channel-status text-center">' + status + '</div>' +
                '</div>'
            );
            if (status == "Offline") { //Offline channels html
                $(".channel:last").removeClass("online").addClass("offline");
                $(".channel-status:last").css("padding-top", "15px");
            }
            //Remove processed existing channels from requested array
            var index = remaining.indexOf("name");
            remaining.splice(index, 1);
        }

    }
    //Add placeholders for non-existing/invalid channels
    var logo = '<img src="http://placehold.it/40x40" class="logo img-circle">';
    for (var i = 0; i < remaining.length; i++) {
        $(".links").append( //Invalid channels html
            '<div class="row channel invalid">' +
            '<div class="col-xs-1 logo-center">' + logo + '</div>' +
            '<div class="col-xs-3 channel-name text-center">' + remaining[i] + '</div>' +
            '<div class="col-xs-8 channel-status text-center">' + "Invalid channel" + '</div>' +
            '</div>'
        );
        $(".channel-status:last").css("padding-top", "15px");
    }

    //Navbar list filter
    $(".nav-online").on("click", function() {

        $(".online").show("slow");
        $(".offline").hide("slow");
        $(".invalid").hide("slow");
    });
    $(".nav-offline").on("click", function() {

        $(".offline").show("slow");
        $(".online").hide("slow");
        $(".invalid").hide("slow");
    });
    $(".nav-all").on("click", function() {

        $(".offline").show("slow");
        $(".online").show("slow");
        $(".invalid").show("slow");
    });

    $("li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
    })

    $("li").mouseover(function() {
        $(this).css("cursor", "pointer");
    })


})