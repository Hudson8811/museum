var swiper = new Swiper(".prices-page__swiper-btns", {
	slidesPerView: 'auto',
	breakpoints: {
		991: {
			slidesPerView: 4,
		},
	},
});

	$("body").on('mouseover mouseleave', '.table-prices td', function (e) {
		if (e.type == 'mouseover') {
			$(this).parent().addClass("hover");
			//$(this).closest('table').find("colgroup").eq($(this).index()).addClass("hover");
      var idx=$(this).index();
      var nextTables = $(this).closest('table').nextAll('.table-prices');
      var actualTables=$('.table-prices').not(nextTables);
      actualTables.each(function(){
        $(this).find("colgroup").eq(idx).addClass("hover");
      });
      
		}
		else {
			$(this).parent().removeClass("hover");
			//$(this).closest('table').find("colgroup").eq($(this).index()).removeClass("hover");
      $('.table-prices colgroup').removeClass("hover");
		}
	});

$('.table-prices td').click(function(event) {
	$('.prices-page__buy-btn').addClass('active');
	$('.prices-page__overlay').addClass('active');
});
$('.prices-page__overlay').click(function(event) {
	$('.prices-page__buy-btn').removeClass('active');
	$('.prices-page__overlay').removeClass('active');
});