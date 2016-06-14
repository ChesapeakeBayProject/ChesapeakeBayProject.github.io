$(document).ready(function() {
    $('#input_h3_1').click(function() {
		var input_val = prompt("In how many years do you want the Bay cleaned with its current pollution level and its current pollution rate?");
		var w_output_val_l_1 = 15000000000000 / input_val / 17500;
		var w_output_val_l_2 = w_output_val_l_1 + ((300000000 * input_val) / input_val / 17500);
		var w_output_val_h_1 = 18000000000000 / input_val / 17500;
		var w_output_val_h_2 = w_output_val_h_1 + ((12000000 * input_val) / input_val / 17500);
		$('.output').prepend("<li>Considering the density of nitrogen in the Chesapeake bay is 5mg/L of water, it would take between " + w_output_val_l_2 + " and " + w_output_val_h_2 + " oysters " + input_val + " years to clean the Bay completely with its current amount of pollution and its continued rate of pollution.</li>")
	});
	$('#input_h3_2').click(function() {
		var input_val = prompt("In how many years do you want the Bay cleaned with its current pollution level and no further pollution?");
	});
});
