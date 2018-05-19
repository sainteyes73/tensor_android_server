
var fs = require('fs');
var express = require('express');
var router = express.Router();
var firebase = require("firebase");
//var database = firebase.database();

var config = {
    apiKey: "AIzaSyDnrOWZAAUh_cQZK3hFBPUvBv81skxJhRQ",
    authDomain: "refri-97254.firebaseapp.com",
    databaseURL: "https://refri-97254.firebaseio.com",
    storageBucket: "refri-97254.appspot.com",
  };
  firebase.initializeApp(config);

  function writeUserData(userId, name) {
    firebase.database().ref('users/' + userId).set({
      username: name
    });
  }

module.exports = function(app){

  app.get('/',function(req,res){
    res.end("Node-File-Upload");
  });

app.post('/upload/:id',function(req,res){

  if(!req.files.image.path){
    res.json({'response':"이미지를 올려주세요"});
  }
  console.log(req.files.image.originalFilename);
  console.log(req.files.image.path);
  fs.readFile(req.files.image.path, function(err, data){
  var dirname = "/Users/gim-useong/Desktop/tensor_android/MyApplication/nodejs/data";
  var newPath = dirname + "/uploads" + req.files.image.originalFilename;
  fs.writeFile(newPath, data, function(err){
  if(err){
    res.json({'response':"Error"});
  }else{
    res.json({'response':"Saved"});
    setTimeout(function(){
      var exec = require('child_process').exec;

      exec("./darknet detect cfg/yolov3.cfg yolov3.weights data/uploads"+req.files.image.originalFilename, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('error: ' + err);
      }
    },1500);
    var id=req.params.id;
  //  console.log(id);
    //writeUserData(id,"woosung" );
    var refriBox=firebase.database().ref().child('users').push().key;
    var updates = {};
    updates['/users/'+id+'/refriBox']=["apple", "banana"];
    firebase.database().ref().update(updates);
  //  fs.exists('/Users/gim-useong/Desktop/tensor_android/MyApplication/nodejs/data'+req)
    });
   }
 });
});
});


};
