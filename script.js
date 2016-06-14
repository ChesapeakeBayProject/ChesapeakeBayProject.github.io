$(document).ready(function() {
    $('#input_h3_1').click(function() {
		var input_val = prompt("In how many years do you want the Bay cleaned with its current pollution level and its current pollution rate?");
		var output_val_l = 15000000000000 / input_val / 17500;
		console.log(output_val_l);
	});
	$('#input_h3_2').click(function() {
		var input_val = prompt("In how many years do you want the Bay cleaned with its current pollution level and no further pollution?");
	});
});
