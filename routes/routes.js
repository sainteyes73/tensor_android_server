
var fs = require('fs');
var express = require('express');
var router = express.Router();
var firebase = require("firebase");
const AWS = require('aws-sdk');
const parameters = require('../parameters')
const Rekognition = require('../AWS/rekognition');
const rekognition = new Rekognition(parameters.AWS);
const json_sort = require('./sort');

var postkey;
var photo;
var fire_config = {
    apiKey: "AIzaSyDnrOWZAAUh_cQZK3hFBPUvBv81skxJhRQ",
    authDomain: "refri-97254.firebaseapp.com",
    databaseURL: "https://refri-97254.firebaseio.com",
    storageBucket: "refri-97254.appspot.com",
  };
  firebase.initializeApp(fire_config);


async function goreko(imagePaths, folder){
  const aa=await rekognition.uploadToS3(imagePaths,folder);
  console.log(aa.Location);
  photo=aa.Location;
  const result = await rekognition.detectLabels(aa);
  console.log(result);
  return result;
}



async function writeUserData(userId, name) {
  firebase.database().ref('users/' + userId).set({
    username: name
  });
}
function todayDate(){
  var today = new Date();
  today.setHours(today.getHours() + 9);
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var time = today.getHours();
  if(dd<10) {
    dd='0'+dd
  }

  if(mm<10) {
    mm='0'+mm
  }

  today = yyyy+'-'+mm+'-'+dd+':'+time+"시";
   return today;
  }

async function writeNewData(uid,m_date,newPath,author) {
  // A post entry.
  var value=null;
  var result =await goreko(newPath, parameters.defaultFolder);
  value=await json_sort(result);
  
  var postData = {
      uid: uid,
      body: value,
      title: m_date,
      author:author,
      starCount:0,
      photo:photo
    };
    // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('user_data').push().key;
  postkey=newPostKey; //전달할 포스트키 변수에 저장

  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  return await firebase.database().ref().update(updates);

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
  console.log(req.body.author);
  fs.readFile(req.files.image.path, function(err, data){

    var dirname = "/home/ubuntu/tensor_android_server/image";
    var newPath = dirname+"/uploads"+req.files.image.originalFilename;
    fs.writeFile(newPath, data, function(err){
      if(err){
        res.json({'response':"Error"});
      }else{
        var author = req.body.author;
        var id=req.params.id;
        var today = todayDate();
        writeNewData(id,today,newPath,author)

        setTimeout(function(){res.json({
          'response': "Saved",
	   'postkey':postkey })},7000);


   }
 });
});
});


};
