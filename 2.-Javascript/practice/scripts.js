window.addEventListener("DOMContentLoaded", function(){
  
  	var img = document.getElementById("pic");
  
  	//FUNCTION randomInteger()   
  	function randomInteger(n) {
    return Math.ceil(Math.random() * n);
  	}

  	var randNumb = randomInteger(7);

  	//This script calls the external function randomInteger() to display random pictures
 	img.src = "imagenes/" + randomInteger(7) + ".png";

	var clickedTime;
	var createdTime;
	var reactionTime;

	function makeBox() {

		var time=Math.random();

		time=1000*time;

		setTimeout(function() {

		var top=Math.random();

			top=top*300;

		var left=Math.random();

			left=left*500;

		document.getElementById('box').style.top=top+"px";
				
		document.getElementById('box').style.left=left+"px";

		document.getElementById('box').style.display="block";

		//agregado
		img.src = "imagenes/" + randomInteger(7) + ".png";

		createdTime=Date.now();
		}, time);

		}
	
		document.getElementById('box').onclick=function () {
			clickedTime=Date.now();
			//Divided by 1000 to create seconds
			reactionTime=(clickedTime-createdTime)/1000;
			document.getElementById('time').innerHTML=reactionTime;
			//"this" refers to document.getElementById("box")
			this.style.display="none";
			makeBox();
		}

		makeBox();

		});
