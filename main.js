let quote=['If You Fail,Never Give Up Because FAIL Means "FIRST ATTEMPT IN LEARNING"','I am not handsome but I can give my hand to someone who need help... Because beauty is required in heart not in face','Black color is sentimentally bad but every blackboard makes the students life bright','Every pain gives a lesson and every lesson changes a person.'];
let div=document.querySelector('div');
let body=document.querySelector('body');
let but=document.querySelector('button');
function quotes(){
        	let change=(parseInt(Math.random()*quote.length));
	        div.innerHTML=quote[change];
			div.style.boxShadow="0 0 30px #ccc";
			div.style.padding="250px 20px";
			div.style.fontSize="30px";
			div.style.margin="10px";
			body.style.background='black';
			but.style.background='lightgray';
			but.style.color='#000';
			

}