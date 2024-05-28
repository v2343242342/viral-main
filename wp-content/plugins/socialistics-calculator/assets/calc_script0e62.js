jQuery(document).ready(function(){
	jQuery('.leads-box').hide();
	jQuery('.sales-box').hide();
	
	//tooltip
	//jQuery('*').tooltip();
	jQuery('.socialistics-calc .form-input').tooltip({position: {
        my: "left top",
        at: "right+5 top-25",
        collision: "none"
      }});
	
	var title_text = '';

	jQuery(".socialistics-calc .form-tooltip .help_icon").hover(function() {
		//console.log("aaa");
		title_text = jQuery(this).siblings(".help_text").text();
		
		jQuery(this).parent().siblings(".form-input").tooltip('enable');
		jQuery(this).parent().siblings(".form-input").css('cursor','pointer').attr('title', title_text);
		jQuery(this).parent().siblings(".form-input").trigger('mouseover');
		
	}, function() {
		title_text = '';

		jQuery(this).parent().siblings(".form-input").tooltip('disable');
		jQuery(this).parent().siblings(".form-input").css('cursor','auto').attr('title', title_text);
		jQuery(this).parent().siblings(".form-input").trigger('mouseleave');
	});
		
});
jQuery('#selectpriority').on('change', function (e) {
	jQuery('.priority-block').show();
	var optionSelected = jQuery("option:selected", this);
	var valueSelected = this.value;

	jQuery("#order_amount").val(''); jQuery("#people_reached").val(''); jQuery("#fb_page_likes").val(''); jQuery("#engagements").val('');
	jQuery("#website_clicks").val(''); jQuery("#leads").val(''); jQuery("#sales").val(''); jQuery("#ad_budget").val('');

	if(valueSelected == 'leads'){
		jQuery('.leads-box').show();
		jQuery('.sales-box').hide();
	}if(valueSelected == 'sales'){
		jQuery('.leads-box').hide();
		jQuery('.sales-box').show();
	}
});
jQuery( document ).on('change', '#order_amount,#people_reached,#fb_page_likes,#engagements,#website_clicks,#leads,#sales', function() {
	var people_reached = 0; var fb_page_likes = 0; var engagements = 0; var website_clicks = 0; var leads = 0; var ad_budget = 0;
	var people_reached1 = 0; var fb_page_likes1 = 0; var engagements1 = 0; var website_clicks1 = 0; var leads1 = 0;
	var order_amount = 0; var sales = 0; var order_amount1 = 0; var sales1 = 0;

	var valueSelected = jQuery("#selectpriority option:selected").text();
	//console.log('ac '+valueSelected);

	people_reached = jQuery('#people_reached').val();
	fb_page_likes = jQuery('#fb_page_likes').val();
	engagements = jQuery('#engagements').val();
	website_clicks = jQuery('#website_clicks').val();
	leads = jQuery('#leads').val();

	order_amount = jQuery('#order_amount').val();
	sales = jQuery('#sales').val();

	//console.log('test people_reached '+people_reached+' fb_page_likes '+fb_page_likes+' engagements '+engagements+' website_clicks '+website_clicks+' leads '+leads);

	if(order_amount && sales){
		sales1 = parseInt(sales);
		order_amount1 = (parseInt(order_amount)/4) * sales1;
		ad_budget += parseFloat(order_amount1);
	}
	if(people_reached){
		people_reached1 = (parseInt(people_reached) * 2 )/1000;
		ad_budget += parseFloat(people_reached1);
	}if(fb_page_likes){
		fb_page_likes1 = parseInt(fb_page_likes) * 1.50;
		ad_budget += parseFloat(fb_page_likes1);
	}if(engagements){
		engagements1 = parseInt(engagements) * 0.15;
		ad_budget += parseFloat(engagements1);
	}if(website_clicks){
		website_clicks1 = parseInt(website_clicks) * 1;
		ad_budget += parseFloat(website_clicks1);
	}if(leads){
		leads1 = parseInt(leads) * 20;
		ad_budget += parseFloat(leads1);
	}

	//console.log('test people_reached1 '+people_reached1+' fb_page_likes1 '+fb_page_likes1+' engagements1 '+engagements1+' website_clicks1 '+website_clicks1+' leads1 '+leads1+'sales1 '+sales1+' order_amount1 '+order_amount1);

	//console.log('test ad_budget '+ad_budget);
	jQuery('#ad_budget').val('$'+ad_budget.toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}));
});