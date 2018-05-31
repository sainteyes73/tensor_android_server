

module.exports=async function jsonsort(result){
  var arr = new Array;
  result.Labels.filter(function(item){
    if(item.Name==="Potato"){
      arr.push("Potato");
    }else if(item.Name==="Sweet Potato"){
      arr.push("sweet potato");
    }else if(item.Name==="Sweet Pepper"){
      arr.push("sweet pepper");
    }else if(item.Name==="Paprika"){
      arr.push("paprika");
    }else if(item.Name==="Spring Onion"){
      arr.push("spring onion");
    }else if(item.Name==="Onion"){
      arr.push("onion");
    }else if(item.Name==="Chives"){
      arr.push("chives");
    }else if(item.Name==="Chives"){
      arr.push("chives");
    }else if(item.Name==="Broccoli"){
      arr.push("broccoli");
    }else if(item.Name==="Hot Pepper"){
      arr.push("hot pepper");
    }else if(item.Name==="Spinach"){
      arr.push("spinach");
    }else if(item.Name==="Cabbage"){
      arr.push("cabbage");
    }else if(item.Name==="Lettuce"){
      arr.push("lettuce");
    }else if(item.Name==="Chinese Cabbage"){
      arr.push("chinese cabbage");
    }else if(item.Name==="Lettuce"){
      arr.push("lettuce");//15
    }else if(item.Name==="Kale"){
      arr.push("kale");
    }else if(item.Name==="Beet"){
      arr.push("beet");
    }else if(item.Name==="Radish"){
      arr.push("radish");
    }else if(item.Name==="Turnip"){
      arr.push("turnip");
    }else if(item.Name==="Young Radish"){
      arr.push("young radish");
    }else if(item.Name==="Eggplant"){
      arr.push("eggplant");
    }else if(item.Name==="Sesame leaves"){
      arr.push("sesame leaves");
    }else if(item.Name==="Pak Choi"){
      arr.push("pak choi");
    }else if(item.Name==="Dried Radish Greens"){
      arr.push("dried radish greens");
    }else if(item.Name==="Chicory"){
      arr.push("chicory");
    }else if(item.Name==="Been Sprouts"){
      arr.push("been sprouts");
    }else if(item.Name==="Been Sprouts"){
      arr.push("been sprouts");
    }else if(item.Name==="Bracken"){
      arr.push("bracken");
    }else if(item.Name==="Balloon Flower Root"){
      arr.push("balloon flower root");
    }else if(item.Name==="Carrot"){
      arr.push("carrot");//30
    }else if(item.Name==="Cucumber"){
      arr.push("cucumber");
    }else if(item.Name==="Zucchini"){
      arr.push("zucchini");
    }else if(item.Name==="Pumpkin"){
      arr.push("pumpkin");
    }else if(item.Name==="Sweet Pumpkin"){
      arr.push("sweet pumpkin");
    }else if(item.Name==="Young Radish"){
      arr.push("young radish");
    }else if(item.Name==="A Crown Daisy"){
      arr.push("a crown daisy");
    }else if(item.Name==="Garlic"){
      arr.push("garlic");
    }else if(item.Name==="Wild Chive"){
      arr.push("wild chive");
    }else if(item.Name==="Asparagus"){
      arr.push("asparagus");
    }else if(item.Name==="Taro"){
      arr.push("taro");//40
    }else if(item.Name==="Burdock"){
      arr.push("burdock");
    }else if(item.Name==="Ginger"){
      arr.push("ginger");
    }else if(item.Name==="Tomato"){
      arr.push("tomato");
    }else if(item.Name==="Corn"){
      arr.push("corn");
    }else if(item.Name==="Chwinamul"){
      arr.push("chwinamul");
    }else if(item.Name==="Butterbur"){
      arr.push("butterbur");
    }else if(item.Name==="Shepherd's Purse"){
      arr.push("shepherd's purse");
    }else if(item.Name==="Ginseng"){
      arr.push("ginseng");
    }else if(item.Name==="Mugwort"){
      arr.push("mugwort");
    }else if(item.Name==="Stem Of Garlic"){
      arr.push("stem of garlic");//50
    }else if(item.Name==="chinese yam"){
      arr.push("chinese yam");
    }else if(item.Name==="Lettuce"){
      arr.push("lettuce");
    }else if(item.Name==="Lotus Root"){
      arr.push("lotus root");
    }else if(item.Name==="Sea Mustard"){
      arr.push("sea mustard");
    }else if(item.Name==="Kelp"){
      arr.push("kelp");
    }else if(item.Name==="Deodeok"){
      arr.push("deodeok");
    }else if(item.Name==="Mushroom"){
      arr.push("mushroom");
    }else if(item.Name==="Cherry tomato"){
      arr.push("cherry tomato");//60
    }else if(item.Name==="Head Cabbage"){
      arr.push("head cabbage");
    }else if(item.Name===("Pepper")){
      arr.push("pepper");
    }else if(item.Name===("Persimmon")){
      arr.push("persimmon");
    }else if(item.Name===("Bell Pepper")){
      arr.push("Bell Pepper");
    }else if(item.Name===("Squash")){
      arr.push("Squash");
    }else if(item.Name===("Flora")){
      arr.push("flora");
    }else if(item.Name===("Bean")){
      arr.push("bean");
    }else if(item.Name===("Green Bean")){
      arr.push("green bean");
    }
  });
  console.log(arr);
  return arr;
}
