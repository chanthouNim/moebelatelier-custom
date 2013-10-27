$( document ).ready(function() {
//	Search feild on the top
	$('#search_field').focusin(function() {
		if( $(this).val() == 'Search' ){
			$(this).val('');
		}
		$(this).animate({width:'200px'}, 500);
		/*$(this).css({'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)','outline': '-webkit-focus-ring-color auto 0'});
		$(this).css({'-webkit-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)'});
		$(this).css({'-o-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)'});
		$(this).css({'-moz-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)'});*/
	});
	$('#search_field').focusout(function() {
		if( $("#search_field").val()!=''){
			$(this).css({width:'200px'});
			/*$(this).css({'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)','outline': '-webkit-focus-ring-color auto 0'});
			$(this).css({'-webkit-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)'});
			$(this).css({'-o-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)'});
			$(this).css({'-moz-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.4)'});*/
		}else {
			$(this).val('Search');
			$(this).animate({width:'86px'}, 500);
			/*$(this).css({'box-shadow': 'none'});
			$(this).css({'-moz-box-shadow': 'none'});
			$(this).css({'-o-box-shadow': 'none'});
			$(this).css({'-webkit-box-shadow': 'none'});*/
		}
	});
});