function switchDisplayMode(mode){
    var element = document.getElementById("body");
    

    var newMode = mode
    
    /*If no mode is set, toogle*/
    if(newMode  == null)
    	newMode = element.className.indexOf("light") > -1 ? "dark" : "light";

    
    element.classList.remove("light");
    element.classList.remove("dark");

    
    if(newMode == "light"){
        element.classList.add("light");
    }
    else if(newMode == "dark"){
        element.classList.add("dark");

    }
    else{
        element.classList.add("light");

    }
}

function checkInitDisplayMode(){

	/*Check for darkmode status of browser*/
	var mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
	
	/* If there is no darkmode support, switch to darkmode between 22:00 and 05:00*/
	if(mode == "light"){
		var date = new Date();
		if(date.getHours() < 6 || date.getHours > 21)
			mode = "dark"
			
	}
	
 	switchDisplayMode(mode)
}
