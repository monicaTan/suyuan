var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["10天","20天","30天","40天","50天","60天","70天"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(60,126,224,0.2)",
					strokeColor : "rgba(60,126,224,1)",
					pointColor : "rgba(60,126,224,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(60,126,224,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}

		var lineChartData2 = {
			labels : ["10天","20天","30天","40天","50天","60天","70天"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(255,113,10,0.2)",
					strokeColor : "rgba(255,113,10,1)",
					pointColor : "rgba(255,113,10,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(255,113,10,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}

		window.onload = function(){
			var ctx = document.getElementById("canvas").getContext("2d");
			window.myLine = new Chart(ctx).Line(lineChartData, {
				responsive: true
			});

			var ctx2 = document.getElementById("canvas2").getContext("2d");
			window.myLine = new Chart(ctx2).Line(lineChartData2, {
				responsive: true
			});
		}