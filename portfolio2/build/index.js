
var mobileNavBar_on = true;
function changeMobileNavBarOn(){
	mobileNavBar_on = !mobileNavBar_on;
	if(mobileNavBar_on)
    {
        document.getElementById("navMobile").style.display = "flex";
    }else{
        document.getElementById("navMobile").style.display = "none";
    }
}

changeMobileNavBarOn();

