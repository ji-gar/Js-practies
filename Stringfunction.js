var stringname="abcd-qscbcbc"
var stringspilit="abc45bc"
//onsole.log(stringname.replace("ab","pq"))
//does not change orignal string 
var name='my name is "Jigar"'
console.log(name)
console.log(stringname.slice(3,6))//d-q
console.log(stringspilit.split("5"))
var str = "Apple, Banana, Kiwi";
console.log(str.substr(7,3))
var string1="abc"
var string2="pqr"
var string3="mnq"
var c=string1.concat(string2,string3)
console.log(c)
console.log(string1.charAt(2))
var stringendwidth="abcaqar/"
var textmessage="a+bcqrds"
var serach ="abcd djddj"
console.log("charAtfunction "+textmessage.charCodeAt(-1))
console.log(stringendwidth.split('c'))
console.log("index of"+stringendwidth.indexOf('a',4))//if not get then it will return -1
console.log("last indexof"+stringendwidth.lastIndexOf('q'))//backword serach 
console.log("Search "+serach.search(" "))//case sentive false if return -1


//Silce substring ,substr
 var sliceinfo="abc,xyz,mnopq"
 console.log("slice info"+sliceinfo.slice(3,-4))//last endargument not take//if we take minus argument than it retrun last two char 
// var a=new String("abc")
// var b=new String("pqr")
var infosystem="i am hear"
console.log("without nagative argument Substring function()  "+infosystem.substring(3,4))
console.log("with nagative arguments  Substring function()  "+infosystem.substring(3,-4))
//Sub  string function () not working  
// console.log(a.toString()==b.toString())//false


//SubStr() function //len in second parameter
var substrname="abcd pqrs,kiwi "
var res=substrname.substring(-2)
console.log("subStr()"+res)


// Replacing the String content


var replacingtext="hello how are you hello ?"
console.log("Replacing   "+replacingtext.replace("hello","Howgoing"))//returns new String

//Extreacting String charcters
stringname="abcdef"
console.log("codepoint"+stringname.codePointAt('a'))

// function test(...args) {
//     console.log("cddjdjdjv  "+typeof args);
//    }
//    test( "HELLO");

//    const obj1 = {first: 20, second: 30, first: 50};
// console.log("OBJECT"+obj1);


// function dog() {
//     print("I am a dog.");
//  }
//  dog.sound = "Bark";