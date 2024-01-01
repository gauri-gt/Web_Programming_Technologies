function validateUsername() {
    var name = document.getElementById("uname").value;
    if (name.length < 3) {
        document.getElementById("err").innerHTML = "less than 3 Characters ";
        document.getElementById("uname").select();
            return false;
    }
    else {
        document.getElementById("err").innerHTML = " ";
        document.getElementById("name").innerHTML = name;
        return true;
    }
}
function validatePswrd() {
    var password = document.getElementById("pswrd").value;
   if (name.length < 3 && name.length > 10) {

        document.getElementById("err2").innerHTML = "paswrd length invalid";
        return false;
    }
    else {
        document.getElementById("err2").innerHTML = " ";
        document.getElementById("validpswrd").innerHTML = password;
        return true;
    }
}

function valiateForm()
{
   if( validateUsername() &&   validatePswrd())
   return true;
   else return false;

}