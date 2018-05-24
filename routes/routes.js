
var fs = require('fs');
var express = require('express');
var router = express.Router();
var firebase = require("firebase");
const AWS = require('aws-sdk');
const parameters = require('../parameters')
const Rekognition = require('../AWS/rekognition');
const rekognition = new Rekognition(parameters.AWS);
//const Rekognition = require('node-rekognition');
/*
AWS.config.update(
  {
    accessKeyId: "AKIAJ5QRWA2C2L5RR4PA",
    secretAccessKey: "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",
    region:"ap-northeast-1",
    bucket:"refri"
  }
);
*/
//var database = firebase.database();
var postkey;
var fire_config = {
    apiKey: "AIzaSyDnrOWZAAUh_cQZK3hFBPUvBv81skxJhRQ",
    authDomain: "refri-97254.firebaseapp.com",
    databaseURL: "https://refri-97254.firebaseio.com",
    storageBucket: "refri-97254.appspot.com",
  };
  firebase.initializeApp(fire_config);

//const rekognition = new Rekognition(AWSParameters);
//var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});


var imagePaths="/Users/gim-useong/Desktop/file-upload/predictions.png";
async function go(imagePaths, folder){
  const aa=await rekognition.uploadToS3(imagePaths,folder);
  const result = await rekognition.detectLabels(aa);
  console.log(result);
}
go(imagePaths, parameters.defaultFolder);



/*
var params = {
  Image: {
   S3Object: {
    Bucket: "refri",
    Name: "dog.jpg"
   }
  },
  MaxLabels: 123,
  MinConfidence: 70
 };
 */
 /*
 rekognition.detectLabels(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    Labels: [
       {
      Confidence: 99.25072479248047,
      Name: "People"
     },
       {
      Confidence: 99.25074005126953,
      Name: "Person"
     }
    ]
   }
   */


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
    //
   }
 });
});
});


};
