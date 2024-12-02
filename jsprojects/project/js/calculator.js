function addlabel(val)
{
    var res=document.getElementById('result1').value;
    
    document.getElementById("result1").value=res+val;
}
function result(){
    var result=eval(document.getElementById("result1").value);
    document.getElementById("result1").value=result;
    
}
function deleteitem(){
    document.getElementById("result1").value="";
}

function removestring(){
    var num=document.getElementById("result1").value;
    document.getElementById("result1").value=num.substring(0,num.length-1);
}