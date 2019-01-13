<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function(){
	
		$('.js_caltalog_smart_filter_range<?=$jsId?>').ionRangeSlider({
			type: "double", 
			grid: false,
			min: <?=$minValue?>,
			max: <?=$maxValue?>,
			grid_snap: false,
			force_edges: true,
			hide_min_max: true,
			hide_from_to: true,
			// hide_grid_text: true,
			onStart: function (data) {

			},
			onChange: function (data) {
				$('#<?= $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>').val(data.from);
				$('#<?= $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>').val(data.to);
			}, 
			onFinish: function (data) {

				$('#<?= $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>').val(data.from);
				$('#<?= $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>').val(data.to);
				
				smartFilter.keyup(BX('<?= $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>'));
			},
			onUpdate: function (data) {
				smartFilter.keyup(BX('<?= $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>'));
			}
		});
	
		$('#<?= $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>').on("change", function () {
			$('.js_caltalog_smart_filter_range<?=$jsId?>').data("ionRangeSlider").update({
				from : $(this).val()
			}); 
		});
		$('#<?= $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>').on("change", function () {
			$('.js_caltalog_smart_filter_range<?=$jsId?>').data("ionRangeSlider").update({
				to : $(this).val()
			});
		});
		
	});
</script>
<div class="aside-filter__range slider-range filter">
	<input 
		style="display: none;"
		class="js_caltalog_smart_filter_range<?=$jsId?> range-slider" type="text">
</div>