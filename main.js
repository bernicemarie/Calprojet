alert("well done, keep doing it"); 
var  operator; //current operator
var leftoperand=0;
var rightoperand=0;
var memory='0';
var result=memory;
var isoperatorjustclicked=false;

var screen =document.getElementsByTagname('span')[0];
var button=document.getElementsByTagname('button')[0];
//console.log(screen);
//console.log(button.lenght);
for (var i =0;i <buttons.lenght; i++){
	var btn =buttons[i];
	btn.onclick=function(){
	var btntext=this.innertext
	switch(btntext){
		case '0'
		case '1'
		case '2'
		case '3'
		case '4'
		case '5'
		case '6'
		case '7'
		case '8'
		case '9'
		if (memory==='0')
			memory='';
		if(isoperatorjustclicked)
			memory='';
		memory+=btntext
		isoperatorjustclicked=false
		break;
		case '/'
		case '*'
		case '+'
		case '-'
		operator=btntext;
		leftoperand=memory;
		isoperatorjustclicked=true;
		break;
		case 'c':
		operator='';
		memory='0'
		leftoperand='0';
		rightoperand='0';
		isoperatorjustclicked=false
		break;
		case '='
		rightoperand=memory;
		result=process(operator,leftoperand,rightoperand,)

	}

	};

}