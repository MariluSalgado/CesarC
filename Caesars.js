var caesarsShift = function(){

	var myString = "hello";
	var shiftAmount = 14;
	var cipherString= " ";


	for(var counter=0 ; counter<5; counter++){
	
		var x = "";
		var asciiCode = myString.charCodeAt(counter);

		x = String.fromCharCode((asciiCode -65 + shiftAmount) +65);
		cipherString+=x;
	}

	return cipherString;
}


document.getElementById("demo").innerHTML = window.caesarsShift();