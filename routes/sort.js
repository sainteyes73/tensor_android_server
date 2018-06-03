

module.exports=async function jsonsort(result){
  var arr = new Array;
  result.Labels.filter(function(item){
    if(item.Name==="Potato"){
      arr.push("감자");
    }else if(item.Name==="Sweet Potato"){
      arr.push("고구마");
    }else if(item.Name==="Sweet Pepper"){
      arr.push("피망");
    }else if(item.Name==="Paprika"){
      arr.push("파프리카");
    }else if(item.Name==="Spring Onion"){
      arr.push("대파");
    }else if(item.Name==="Onion"){
      arr.push("양파");
    }else if(item.Name==="Chives"){
      arr.push("쪽파");
    }else if(item.Name==="Chives"){
      arr.push("부추");
    }else if(item.Name==="Broccoli"){
      arr.push("브로콜리");
    }else if(item.Name==="Hot Pepper"){
      arr.push("고추");
    }else if(item.Name==="Spinach"){
      arr.push("시금치");
    }else if(item.Name==="Cabbage"){
      arr.push("양배추");
    }else if(item.Name==="Lettuce"){
      arr.push("양상추");
    }else if(item.Name==="Chinese Cabbage"){
      arr.push("배추");
    }else if(item.Name==="Lettuce"){
      arr.push("상추");//15
    }else if(item.Name==="Kale"){
      arr.push("케일");
    }else if(item.Name==="Beet"){
      arr.push("비트");
    }else if(item.Name==="Radish"){
      arr.push("무");
    }else if(item.Name==="Turnip"){
      arr.push("무");
    }else if(item.Name==="Young Radish"){
      arr.push("무");
    }else if(item.Name==="Eggplant"){
      arr.push("가지");
    }else if(item.Name==="Sesame leaves"){
      arr.push("깻잎");
    }else if(item.Name==="Pak Choi"){
      arr.push("청경채");
    }else if(item.Name==="Dried Radish Greens"){
      arr.push("시래기");
    }else if(item.Name==="Chicory"){
      arr.push("치커리");
    }else if(item.Name==="Been Sprouts"){
      arr.push("콩나물");
    }else if(item.Name==="Been Sprouts"){
      arr.push("숙주나물");
    }else if(item.Name==="Bracken"){
      arr.push("고사리");
    }else if(item.Name==="Balloon Flower Root"){
      arr.push("도라지");
    }else if(item.Name==="Carrot"){
      arr.push("당근");//30
    }else if(item.Name==="Cucumber"){
      arr.push("오이");
    }else if(item.Name==="Zucchini"){
      arr.push("호박");
    }else if(item.Name==="Pumpkin"){
      arr.push("호박");
    }else if(item.Name==="Sweet Pumpkin"){
      arr.push("호박");
    }else if(item.Name==="Young Radish"){
      arr.push("열무");
    }else if(item.Name==="A Crown Daisy"){
      arr.push("쑥갓");
    }else if(item.Name==="Garlic"){
      arr.push("마늘");
    }else if(item.Name==="Wild Chive"){
      arr.push("달래");
    }else if(item.Name==="Asparagus"){
      arr.push("아스파라거스");
    }else if(item.Name==="Taro"){
      arr.push("토란");//40
    }else if(item.Name==="Burdock"){
      arr.push("우엉");
    }else if(item.Name==="Ginger"){
      arr.push("생강");
    }else if(item.Name==="Tomato"){
      arr.push("토마토");
    }else if(item.Name==="Corn"){
      arr.push("옥수수");
    }else if(item.Name==="Chwinamul"){
      arr.push("취나물");
    }else if(item.Name==="Butterbur"){
      arr.push("머위");
    }else if(item.Name==="Shepherd's Purse"){
      arr.push("냉이");
    }else if(item.Name==="Ginseng"){
      arr.push("인삼");
    }else if(item.Name==="Mugwort"){
      arr.push("쑥");
    }else if(item.Name==="Stem Of Garlic"){
      arr.push("마늘쫑");//50
    }else if(item.Name==="Chinese yam"){
      arr.push("마");
    }else if(item.Name==="Lettuce"){
      arr.push("씀바귀");
    }else if(item.Name==="Lotus Root"){
      arr.push("연근");
    }else if(item.Name==="Sea Mustard"){
      arr.push("미역");
    }else if(item.Name==="Kelp"){
      arr.push("다시마");
    }else if(item.Name==="Deodeok"){
      arr.push("더덕");
    }else if(item.Name==="Mushroom"){
      arr.push("표고버섯");
    }else if(item.Name==="Mushroom"){
      arr.push("팽이버섯");
    }else if(item.Name==="Mushroom"){
      arr.push("양송이버섯");
    }else if(item.Name==="Cherry tomato"){
      arr.push("방울토마토");//60
    }else if(item.Name==="Head Cabbage"){
      arr.push("브로콜리");
    }else if(item.Name===("Pepper")){
      arr.push("피망");
    }else if(item.Name===("Persimmon")){
      arr.push("감");
    }else if(item.Name===("Bell Pepper")){
      arr.push("고추");
    }else if(item.Name===("Squash")){
      arr.push("호박");
    }else if(item.Name===("Bean")){
      arr.push("콩");
    }else if(item.Name===("Green Bean")){
      arr.push("콩");
    }else if(item.Name==="Litch"){
      arr.push("리치");
    }else if(item.Name==="Star fruit"){
      arr.push("스타후르츠");
    }else if(item.Name==="Fig"){
      arr.push("무화과");//70
    }else if(item.Name==="Apple"){
      arr.push("사과");
    }else if(item.Name==="Pear"){
      arr.push("배");
    }else if(item.Name==="Strawberry"){
      arr.push("딸기");
    }else if(item.Name==="Banana"){
      arr.push("바나나");
    }else if(item.Name==="Pineapple"){
      arr.push("파인애플");
    }else if(item.Name==="Orange"){
      arr.push("오렌지");
    }else if(item.Name==="Tangerine"){
      arr.push("귤");
    }else if(item.Name==="Cherry"){
      arr.push("체리");
    }else if(item.Name==="Apricot"){
      arr.push("살구");
    }else if(item.Name==="Kiwi"){
      arr.push("키위");//80
    }else if(item.Name==="Watermelon"){
      arr.push("수박");
    }else if(item.Name==="Mango"){
      arr.push("망고");
    }else if(item.Name==="Plum"){
      arr.push("자두");
    }else if(item.Name==="Grapefruit"){
      arr.push("자몽");
    }else if(item.Name==="Guince"){
      arr.push("모과");
    }else if(item.Name==="Sweet persimmon"){
      arr.push("감");
    }else if(item.Name==="Soft persimmon"){
      arr.push("감");
    }else if(item.Name==="Dried Persimmon"){
      arr.push("감");
    }else if(item.Name==="Peach"){
      arr.push("복숭아");
    }else if(item.Name==="Heavenly peach"){
      arr.push("복숭아");//90
    }else if(item.Name==="Raspberry"){
      arr.push("라즈베리");
    }else if(item.Name==="Mulberry"){
      arr.push("오디");
    }else if(item.Name==="Pomegranate"){
      arr.push("석류");
    }else if(item.Name==="Grape"){
      arr.push("포도");
    }else if(item.Name==="Green grape"){
      arr.push("포도");
    }else if(item.Name==="Kyoho grape"){
      arr.push("포도");
    }else if(item.Name==="Hanrabong"){
      arr.push("한라봉");
    }else if(item.Name==="Lime"){
      arr.push("라임");
    }else if(item.Name==="Avocado"){
      arr.push("아보카도");
    }else if(item.Name==="Plum"){
      arr.push("매실");//100
    }else if(item.Name==="Guava"){
      arr.push("구아바");
    }else if(item.Name==="Cherry"){
      arr.push("앵두");
    }else if(item.Name==="Durian"){
      arr.push("두리안");
    }else if(item.Name==="Papaya"){
      arr.push("파파야");
    }else if(item.Name==="Mangosteen"){
      arr.push("망고스틴");
    }else if(item.Name==="Melon"){
      arr.push("멜론");
    }else if(item.Name==="Lemon"){
      arr.push("레몬");
    }else if(item.Name==="Oriental Melon"){
      arr.push("참외");
    }else if(item.Name==="Blueberry"){
      arr.push("블루베리");
    }else if(item.Name==="Dragon fruit"){
      arr.push("용과");//110
    }
  });
  console.log(arr);
  return arr;
}
