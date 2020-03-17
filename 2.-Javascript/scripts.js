		function getRandomColor() {
			var letters='0123456789ABCDEF'.split('');
			var color='#';
			for (var i=0; i<6; i++) {
				color += letters[Math.round(Math.random()*15)];
			}
			return color;
		}

		
		var clickedTime;
		var createdTime;
		var reactionTime;

		function makeBox() {

			var time=Math.random();

			time=3000*time;
		
			setTimeout(function() {

				if (Math.random()>0.5) {

					document.getElementById('box').style.borderRadius="100px";

				} else {

					document.getElementById('box').style.borderRadius="0";
					
				}

				var top=Math.random();

				top=top*300;

				var left=Math.random();

				left=left*500;

				document.getElementById('box').style.top=top+"px";
				
				document.getElementById('box').style.left=left+"px";

				document.getElementById('box').style.backgroundColor=getRandomColor();

				document.getElementById('box').style.display="block";

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
