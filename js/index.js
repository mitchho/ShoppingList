$(document).ready(function() {

	$( "#js-shopping-list-form" ).submit(function(event) {
        //alert( "Handler for .submit() called." );
  		console.log('submit button clicked');
  		console.log($(event.currentTarget).children('input').val());
  		// the code below logs the form text, not the input box text (see above for that)
  		// console.log($(event.currentTarget).text());

  		//  prevents the submit button from submitting the form. Apparently without
  		//  this statement the page refreshes and the append function below is
  		//  not called - will investigate this further - not sure about it.
  		event.preventDefault();

		$("ul").append(
      	"<li><span class='shopping-item'>" + $(event.currentTarget).children('input').val()
      	+ "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>");
 

});

	//$(".shopping-item-toggle").click(function(event) { 
	$('ul').on('click', 'button.shopping-item-toggle', function(event) {
		console.log('check button clicked');   
    	console.log($(this).parent().siblings('span'));

     	//  "this" just means "event.currentTarget"
		$(this).parent().siblings('span').toggleClass("shopping-item__checked");

	});

	//$(".shopping-item-delete").click(function(event) {
	$('ul').on('click', 'button.shopping-item-delete', function(event) {
		console.log('delete button clicked');
        console.log($(event.currentTarget).parent().parent());
	    //	console.log($(event.currentTarget).parent());
 
 	   //  "this" just means "event.currentTarget"
  	   $(this).parent().parent().remove();  
          

	});
});

/*  ****************** Thinkful.com design *****************************

$(document).ready(function() {

  // logic for adding an item to shopping list
  $("#js-shopping-list-form").submit(function(event) {
    // stops default browser behavior for form submission,
    // since we don't actually want to submit to server
    event.preventDefault();

    // add new item to botom of list
    $('.shopping-list').append(
      '<li>' +
        '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
    );
    // remove the submitted item from the form input
    $(this)[0].reset();
  });

  // logic for deleting items from list
  $(".shopping-list").on("click", ".shopping-item-delete", function(event){
    // here `this` refers to the `.shopping-item-delete` element that was clicked.
    // we travel up the document tree to get the nearest parent element
    // that"s an `li`
    $(this).closest("li").remove();
  });

  // logic for checking/unchecking items
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event){

    // toggle the .shopping-item__checked class
    $(this).closest("li").find(".shopping-item").toggleClass(
      "shopping-item__checked");
  });

})

****************************************************** */

