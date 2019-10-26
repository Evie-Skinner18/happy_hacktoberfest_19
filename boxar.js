function myFiddle(){
    
    var x = event.pageX;
    var y = event.pageY;
    
    
    
    var cords = "X: " + x + " Y: " + y ;
    
    document.getElementById("values").innerHTML = cords;
    var data = getDate();
    var datavar = data*10;

    document.getElementById("checkthis").innerHTML = "Find this: " + datavar;
    
    if(x === datavar || y === datavar){
            document.getElementById("changethis").innerHTML = "Happy Hacktober!";
        }
    
}

function getDate(){
    var date = new Date();
    var seconds = date.getSeconds();
    return seconds;
}

function emptyString(event){
    document.getElementById("changethis").innerHTML="";
}