var a=prompt("enter the number");
var a1=a;
var b,sum=0;
document.write("The given number is "+a+"<br>");
while(a>0){
		  b=a%10;
		  sum=sum*10+b;
		  a=parseInt(a/10);
		  }
		  if (sum==a1){
			  document.write ("the given number is palindrom");
		  }
          else{
			  document.write ("the given number is not a palindrom");
		  }