function ValidateForm(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var question = document.getElementById("question").value;
    
    
    
    if(fname === ""){
        alert("First Name cannot be null");
        return false;
    }
    else if(lname === ""){
        alert("Last name cannot be null");
        return false;
    }
    else if(question === ""){
        alert("Question cannot be left blank");
        return false;
    }
    else
        return true;
    

}