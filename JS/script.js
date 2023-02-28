// Author:Bismi John
function validate() {
    let x = document.getElementById("em").value;
    let xreg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9])+\.[a-zA-Z]{2,}))$/;

    if (x == "") {
        alert("enter the email id");
        return false;
    } else if (!xreg.test(x)) {
        alert("You have entered an invalid email address!");
        return false;
    }
}
