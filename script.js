$(document).ready(function() {
	$('#input_h3_1').click(function() {
		var input_val = prompt("In how many years do you want the Bay cleaned with its current pollution level and its current pollution rate?");
		var w_output_val_l_1 = 15000000000000 / input_val / 17500;
		var w_output_val_l_2 = Math.floor(w_output_val_l_1 + ((15000000000000 * input_val) / input_val / 17500));
		var w_output_val_h_1 = 18000000000000 / input_val / 17500;
		var w_output_val_h_2 = Math.floor(w_output_val_h_1 + ((18000000000000 * input_val) / input_val / 17500));
		$('.output').prepend("<li>Considering the density of nitrogen in the Chesapeake Bay is 5mg/L of water, that an oyster filters approximately 50 gallons of water a day, that the Bay receives about 300 million pounds of pollution each year, and that there is between 15 and 18 trillion gallons of water in the Bay, it would take between " + w_output_val_l_2 + " and " + w_output_val_h_2 + " oysters, " + input_val + " years to clean the Bay completely with its current amount of pollution and its continued rate of pollution.</li>");
	});
	$('#input_h3_2').click(function() {
		var input_val = prompt("In how many years do you want the Bay cleaned with its current pollution level and no further pollution?");
		var wo_output_val_l_1 = Math.floor(15000000000000 / input_val / 17500);
		var wo_output_val_h_1 = Math.floor(18000000000000 / input_val / 17500);
		$('.output').prepend("<li>Considering the density of nitrogen in the Chesapeake Bay is 5mg/L of water, that an oyster filters approximately 50 gallons of water a day, and that there is between 15 and 18 trillion gallons of water in the Bay, it would take between " + wo_output_val_l_1 + " and " + wo_output_val_h_1 + " oysters, " + input_val + " years to clean the Bay completely with its current amount of pollution and no continued rate of pollution.</li>");
	});
	$('#clear_h3').mouseenter(function() {
		$('#clear').fadeOut(1000);
		$('.output li').fadeOut(400);
	});
	$('#clear_h3').mouseleave(function() {
		$('#clear').fadeIn(1000);
	});
});
