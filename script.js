let string ="";
let btns=document.querySelectorAll('.Button');
Array.from(btns).forEach((Button)=>
{
	Button.addEventListener('click',(e)=>
	{
		if(e.target.innerHTML == '=')
		{
			string=eval(string);
			document.querySelector('input').value =string;
		}
		else if(e.target.innerHTML == 'c')
		{
			string=""
			document.querySelector('input').value =string;
		}
		else if(e.target.innerHTML == 'X')
		{
			console.log(e.target)
			string=string.slice(0,-1)
			document.querySelector('input').value =string
		}
		else if(e.target.innerHTML == '%')
		{
			console.log(e.target)
			string=string[0]*string[2]*0.1;
			document.querySelector('input').value =string
		}
		else{
			console.log(e.target)
			string=string + e.target.innerHTML;
			document.querySelector('input').value =string;
		}
		
	})
})