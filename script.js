$(document).ready(function() {
		function hsl_col_perc(percent, start, end) {
		  var a = percent / 100,
		      b = (end - start) * a,
		      c = b + start;
		
		  // Return a CSS HSL string
		  return 'hsl('+c+', 100%, 50%)';
		}
		/*
		Quick ref:
		    0 – red
		    60 – yellow
		    120 – green
		*/
		function updateCalculation(){
      var bmi = $("#bmi").val();
      /* var atr_fibr = $("#atr_fibr").val(); */
			var atr_fibr = $('input[name=atrial_fibr_radio]:checked').val();
      var sys_pres = $("#sys_pres").val();
      var age = $("#age").val();
      var fill_pres = $("#fill_pres").val();
      var log_odds = -9.19174463966566 +
				0.0451129471272832*age +
				0.130730156015681*bmi +
				0.0858634402456586*fill_pres +
				0.051963758732548*sys_pres +
				1.69968057294513*atr_fibr;
      var odds = Math.pow(Math.E, log_odds);
      var hfpef = 100 * odds/(1 + odds);
      $("#log-odds").text("Log Odds = " + log_odds.toFixed(4));
      $("#odds").text("Odds = " + odds.toFixed(4));
      $("#hfpef-prob-text").text("HFpEF Probability:")
			$("#hfpef-prob").css('color', hsl_col_perc(100 - hfpef, 0, 120));
			var number = 0;
			var interval = setInterval(function() {
    	$("#hfpef-prob").text(number.toFixed(0) + "%");
    		if (number > hfpef){
				clearInterval(interval);
    		$("#hfpef-prob").text(hfpef.toFixed(2) + "%");
				}
    		number += 1;
    	}, 5);
      window.scrollTo(0, document.body.scrollHeight);
		}
		
    $("#submit").click(function(){
			updateCalculation();
    });
		$("#label_radio_yes").click(function(){
			$("#atrial_yes").prop("checked", true);
			updateCalculation();
		});
		$("#label_radio_no").click(function(){
			$("#atrial_no").prop("checked", true);
			updateCalculation();
		});
		$("#atrial_yes").click(function(){
			$("#atrial_yes").prop("checked", true);
			updateCalculation();
		});
		$("#atrial_no").click(function(){
			$("#atrial_no").prop("checked", true);
			updateCalculation();
		});
		$(document).keypress(function (e) {
		 var key = e.which;
		 if(key == 13)  // the enter key code
		  {
				updateCalculation();
		    return false;
		  }
		});
});
