
function fibonacci(){
    var a=0;
    var b=1;
    var s;

    var fibon=[];

    for(var i=0;i<26;i++){
        if(i===0||i===1){
            fibon.push(i);
        }
        else{
            s=a+b;
            a=b;
            b=s;
            fibon.push(s);
        }
    }
   return fibon; 
}

function generate(num){
    var arr=[];

    for(var i=0;i<num;i++){
        arr.push(Math.floor(Math.random()*100))
        
      
    }
        return arr;
}
 
    var fib=[];
    var gen=[];
    var sum =0;
   fib= fibonacci();
   gen= generate(26);
    for(var i=0;i<26;i++){
        
        if(fib[i]===i)
        {
            sum=sum+gen[i];
        }
        console.log(""+sum);
    }
        

