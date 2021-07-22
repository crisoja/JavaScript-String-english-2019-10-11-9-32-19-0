// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase()
console.log(name)
//




// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var result = "";
for(var i=0;i<sentence.length;i++){
	if(i==0||i==5||i==16||i==19){
	result+=sentence.charAt(i).toUpperCase(0);
	}
	else{
		result+=sentence.charAt(i);
	}
}
console.log(result);
//





// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1,3));
//
