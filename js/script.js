$(document).ready(function(){

	$("#libro").booklet({

		width:700,
		height:400,
		closed:1,
		covers:1,
		hoverWidth:100,

		pagePadding:0,

		auto:0,
		delay:1000,

	});

	$("#anterior").click(function(){
		$("#libro").booklet("prev");
	});

	$("#siguiente").click(function(){
		$("#libro").booklet("next");
	});
	$("#boton").click(function(){
		$("#libro").booklet("gotopage", $("#campo").val() );
	});

});