$(document).ready(function() {
	window.dataLayer = window.dataLayer || [];


	$('.delete a').click(function(  ){


		var qq = $(this).parents('tr');
		var iddeleete = $(qq).find('.prid').val();
		var prname = $(qq).find('.prname').val();

		dataLayer.push({
			"ecommerce": {
				"remove": {
					"products": [
						{
							"id": iddeleete,
							"name": prname,
						}
					]
				}
			}
		});

		console.log('datalayerpush');
	});

});
