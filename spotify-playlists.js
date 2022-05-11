//var request = require('request');
import request from 'request';
var user_id = '12151874547';
var token = "Bearer BQACgcGXCKGu7xTqdx4YqP-BQDK4F97ZoLTQrEQMvNWf8My08blwoYr2a1Zz3zeIPC69hQ5xkvjTMpSPikIWv7hg-3LLQCv58jyAMGkfmMgZGjM1D_Osxv1CP9fklQjOV_w8RNKzJKEapS0T_iBMju_H4VEgJUbACBQ7zEWXJE";
var playlists_url = 'https://api.spotify.com/v1/users/' + user_id + '/playlists';


//const express = require("express");
//const app = express();
//app.get("/", function (req, res) {
//    res.sendFile(__dirname + "/index.html");
//});
//app.listen(3000, function () {
//    console.log("Server is running on localhost3000");
//});


request({url:playlists_url, headers:{"Authorization":token}}), function(err,res){
        if (res){
            var playlists=JSON.parse(res.body);
            console.log(JSON.stringify(playlists.items,null, " "));
            var playlist_url = '';//playlists.items[0].href;
            request({url:playlist_url, headers:{"Authorization":token}}), function(err,res){
                if (res){
                    var playlist = JSON.parse(res.body);
                    console.log("playlist: " + playlist.name);
                    playlist.tracks.items.forEach(function(track){
                        console.log(track.track.name)
                    });
                }
            }
        }
}
