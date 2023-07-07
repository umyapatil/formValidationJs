function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    
}


function seterror(id, error){
   
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}


function validateForm(){
    let returnval = true;
    // clearErrors();
    let name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    let adress = document.forms['myForm']["fadress"].value;
    if(adress.length < 5){
        seterror("adress","*Length of adress is too short");
        returnval = false;
    }
    
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    let email = document.forms['myForm']["femail"].value;
    if (email.length<12 ){
        seterror("email", "*Email length is too short");
        returnval = false;
    }

    let phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    if(returnval){
        clearErrors();
        alert("succed")
    }
    return returnval;
}
