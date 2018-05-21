
var fs = require('fs');
var express = require('express');
var router = express.Router();
var firebase = require("firebase");
//var database = firebase.database();
var postkey;
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
function todayDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd='0'+dd
  }

  if(mm<10) {
    mm='0'+mm
  }

  today = mm+'/'+dd+'/'+yyyy;
   return today;
  }

function writeNewData(uid, username,m_data,m_date) {
  // A post entry.
  var postData = {
      uid: uid,
      data: m_data,
      date: m_date
    };
    // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;
  postkey=newPostKey; //전달할 포스트키 변수에 저장

  var updates = {};
  //updates['/posts/' + newPostKey] = postData;
  updates['/user_data/' + uid + '/' + newPostKey] = postData;
  return firebase.database().ref().update(updates);
  }

 function startYolo(){
   setTimeout(function(){
     var exec = require('child_process').exec;

     exec("./darknet detect cfg/yolov3.cfg yolov3.weights data/uploads"+req.files.image.originalFilename, function (error, stdout, stderr) {
     console.log('stdout: ' + stdout);
     console.log('stderr: ' + stderr);
     if (error !== null) {
         console.log('error: ' + err);
     }
   },1500);
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
  var dirname = "/Users/gim-useong/Desktop/file-upload";
  var newPath = dirname + "/uploads" + req.files.image.originalFilename;
  fs.writeFile(newPath, data, function(err){
  if(err){
    res.json({'response':"Error"});
  }else{
  //  startYolo();
    var id=req.params.id;
    var today = todayDate();

    writeNewData(id,"woosung",["apple","banana"],today);
    res.json({
      'response': "Saved",
      'postkey' : postkey
    });
  //  fs.exists('/Users/gim-useong/Desktop/tensor_android/MyApplication/nodejs/data'+req)
    //});
   }
 });
});
});


};