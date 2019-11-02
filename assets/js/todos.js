// Check off specific todos by clicking
$('ul').on('click','li',function() {
	$(this).toggleClass('completed');
});
// Click on X to delete todo
$('ul').on('click','span',function(e) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13) {
		// Grabbing input text
		var todoText = $(this).val();
		// Create new li and add to the end
		$('ul').append("<li>" + "<span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$('.fa-plus').click(function() {
	$("input[type='text'").fadeToggle();
});