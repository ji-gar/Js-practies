//regular expression
//Regularexpression.js
let regular=/hello/g;
let expression=/llo/g
let testexpression=/[a-e]$/g;
let mainString="hello how are you 7llo ? may i help you hello"
let teststring="alloe alloe word"
  console.log(mainString.match(expression))
console.log(mainString.replace(regular,"how"))
console.log(teststring.match(testexpression))
