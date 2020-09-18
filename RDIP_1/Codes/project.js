/* var Snowball = require('snowball'); */


var tokenList = [];
var typeList = [];
var ansList = [];
var stemList = [];
var skip = ["a","i","an","it","me","so","to","are","the","you","show"];
var subHit = 0;
c1="A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.";

c2="A wolf carried off a lamb. The lamb said, 'I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.";

c3="A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair.";

c=["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.",

"A wolf carried off a lamb. The lamb said, 'I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."

,"A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair."];


var previous="";


function selectCorpus()
{
  reset();
  document.getElementById("b1").style.visibility = "visible";
    if(document.getElementById("Corpus").value=="Corpus 1")
    {
   document.getElementById("type1").innerHTML=c[0];
   previous = c[0];
    }

    else if (document.getElementById("Corpus").value=="Corpus 2")
    {
        document.getElementById("type1").innerHTML=c[1];
        previous = c[1];
         }
         else if(document.getElementById("Corpus").value=="Corpus 3" )
         {
            document.getElementById("type1").innerHTML=c[2];
            previous = c[2];
         }
  else if (document.getElementById("Corpus").value=="none")
  {
      alert("Select a Corpus");
      document.getElementById("type1").innerHTML=previous;
  }
  tableinput();
}
  function tableinput(){

   document.getElementById("tableinput").style.visibility="visible";

  }

  function check()
  {

    var answer= typeTokenCheck();
    if(answer[0]==true)
 {
  document.getElementById("val2").style.background="green";
 }
 else{
  document.getElementById("val2").style.background="red";
 }
 if(answer[1]==true)
 {
  document.getElementById("val1").style.background="green";
 }
 else{
  document.getElementById("val1").style.background="red";
 }
 if(answer[0] == true && answer[1] == true){
  document.getElementById("ans1").innerHTML = "Right Answer";
  document.getElementById("ans1").style.color = "green";
  subHit++;
  if(subHit == 1)document.getElementById("b2").style.visibility="visible";

 }
 else{
   document.getElementById("ans").innerHTML = "Wrong Answer!";
   document.getElementById("ans").style.color = "red";
 }

  }


  function reset(){
    document.getElementById("type1").innerHTML=" ";
    document.getElementById("val1").style.background="white";
    document.getElementById("ans1").innerHTML="";
    document.getElementById("val2").style.background="white";
    document.getElementById("ans").innerHTML=" ";
    document.getElementById("val1").value="";
    document.getElementById("val2").value="";
    document.getElementById("b2").style.visibility="hidden";
    document.getElementById("new").style.visibility="hidden";
    document.getElementById("box").style.visibility="hidden";
    document.getElementById("newtype").style.visibility="hidden";
    document.getElementById("b3").style.visibility="hidden";
    document.getElementById("ans2").innerHTML = '';
    document.getElementById("ans3").innerHTML = '';
    document.getElementById("newtype").style.backgroundColor = "white";
    document.getElementById("newtype").value = "";
    typeList = [];
    tokenList = [];
    ansList = [];
    subHit = 0;
  }



  function typeTokenCheck(){
    tokenList = [];
    typeList = [];
    ansList = [];
    document.getElementById("ans").innerHTML = '';
    document.getElementById("ans1").innerHTML = '';
    var val = document.getElementById("Corpus").value;
    var finalStr = '';
    if(val == "Corpus 1") finalStr = c1;
    else if(val == "Corpus 2") finalStr = c2;
    else if(val == "Corpus 3") finalStr = c3;
    tokenList = finalStr.split(" ");
    var typeUpperList = [];
    for(var i in tokenList){
      var str = tokenList[i];
      if(str.charAt(0) == "'"){
        str = str.substring(1,str.length);
      }
      if(str.charAt(str.length-2) == "'"){
        str = str.substring(0,str.length-2)+"s";
      }
      if(str.charAt(str.length-1) == "'" || str.charAt(str.length-1) == "?" || str.charAt(str.length-1) == "," || str.charAt(str.length-1) == "." || str.charAt(str.length-1) == "!"){
        str = str.substring(0,str.length-1);
      }
      if(str.charAt(str.length-1) == "?" || str.charAt(str.length-1) == "," || str.charAt(str.length-1) == "." || str.charAt(str.length-1) == "!"){
        str = str.substring(0,str.length-1);
      }

      tokenList[i] = str;
      if(typeList != null && typeList.length != 0 && !typeUpperList.includes(tokenList[i].toUpperCase())){
        typeList.push(tokenList[i].toLowerCase());
        typeUpperList.push(tokenList[i].toUpperCase());
      }
      else if(typeList.length == 0){
        typeList.push(tokenList[i].toLowerCase());
        typeUpperList.push(tokenList[i].toUpperCase());
      }

    }
    console.log('document.getElementById("val2").innerHTML'+document.getElementById("val2").value);
    console.log('document.getElementById("val1").innerHTML'+document.getElementById("val1").value);
    console.log('tokenList'+tokenList.length);
    console.log('typeList'+typeList);
    if(tokenList.length == document.getElementById("val2").value){
      ansList.push(true);
    }
    else{
      ansList.push(false);
    }
    if(typeList.length == document.getElementById("val1").value){
      ansList.push(true);
    }
    else{
      ansList.push(false);
    }
    console.log(ansList);
   return ansList;
  }

  function goahead()
  {

document.getElementById("b1").style.visibility="hidden";
document.getElementById("ans").style.visibility="hidden";
document.getElementById("ans1").style.visibility="hidden";
document.getElementById("box").style.visibility="visible";
document.getElementById("new").style.visibility="visible";
document.getElementById("box").style.visibility="visible";
document.getElementById("newtype").style.visibility="visible";
document.getElementById("b3").style.visibility="visible";
document.getElementById("b2").style.visibility="hidden";



  }

 function stemCall(){
  stemList = [];
  stemUniqueList = [];

   for(var k in typeList){



        var stemmer = new Snowball('English');
stemmer.setCurrent(typeList[k].trim().toLowerCase());
     stemmer.stem(typeList[k].trim().toLowerCase());
     stemList.push(stemmer.getCurrent());

   }
  stemUniqueList = [];
  for(var i in stemList){


    if(!stemUniqueList.includes(stemList[i]) && !skip.includes(stemList[i])){
        stemUniqueList.push(stemList[i]);}
    else{
      console.log('skipped stems'+stemList[i]);

    }
}

  console.log(stemUniqueList);

  if(document.getElementById("newtype").value == stemUniqueList.length)  return true;
  else return false;



}


  function  finalCheck()
  {var final=stemCall();
    if(final==true)
    {
       document.getElementById("ans2").innerHTML="Right answer!";
       document.getElementById("newtype").style.backgroundColor = "green";
       document.getElementById("ans3").innerHTML="";
    }
    else if(final==false)
    {
      document.getElementById("ans3").innerHTML="Wrong answer!";
      document.getElementById("newtype").style.backgroundColor = "red";
      document.getElementById("ans2").innerHTML="";
    }
  }
