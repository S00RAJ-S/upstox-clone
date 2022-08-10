function phonevalidation() {
    var mobno = document.forms["myform"]["mno"].value;
    filter = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    if (filter.test(mobno)) {
        document.getElementById("mno").style.boxShadow = "1px 1px 2px 2px green";
        document.getElementById("validationresult").innerHTML = "";
        return false;
    } else {
        document.getElementById("mno").style.boxShadow = "1px 1px 2px 2px red";
        document.getElementById("validationresult").innerHTML = "Please enter valid mobile no.";
        return false;
    }
}
