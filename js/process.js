console.log("asdf");
var interval = setInterval( function(){
	if( $("ul.pricing").length){
		$("ul.pricing").hide();
		clearInterval(interval);
	}
});
// $("ul.pricing.multiple-prices").hide();