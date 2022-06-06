$(document).ready(function() {
    $("#submit").click(function(){
        var bmi = $("#bmi").val();
        var atr_fibr = $("#atr_fibr").val();
        var sys_pres = $("#sys_pres").val();
        var age = $("#age").val();
        var fill_pres = $("#fill_pres").val();
        var log_odds = -9.19174463966566 + 0.0451129471272832*age + 0.130730156015681*bmi + 0.0858634402456586*fill_pres + 0.051963758732548*sys_pres + 1.69968057294513*atr_fibr;
        var odds = Math.pow(Math.E, log_odds);
        var hfpef = 100 * odds/(1 + odds);
        $("#log-odds").text("Log Odds = " + log_odds.toFixed(4));
        $("#odds").text("Odds = " + odds.toFixed(4));
        $("#hfpef-prob").text("HFpEF Probability = " + hfpef.toFixed(2) + "%");
        window.scrollTo(0, document.body.scrollHeight);
    });
});