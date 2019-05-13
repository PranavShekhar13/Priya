var n= prompt("Enter the number");

function result(n){

    var s=0;
    for(var i=1;i<=n;i++){
        if(n%i===0){
            s=s+1;
        }
    }
        if(s<=2){
            return true;
        }
        else{
            return false;
        } 
    }
