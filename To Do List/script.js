$(document).ready(function(){
    var maxField = 100; //Input fields increment limitation
    var addButton = $('.plus'); //Add button selector
    var wrapper = ('.inputs'); //Input field wrapper
    var fieldHTML = '<div><input type="text" name="field_name[]" placeholder="Enter Your Task" class="new-input" autofocus/><a href="javascript:void(1);" class="remove_button" title="Remove field">Remove</a></div>'; //New input field html 
    var x = 1; //Initial field counter is 1
    $(addButton).click(function(){ //Once add button is clicked
        if(x < maxField){ //Check maximum number of input fields
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); // Add field html
			//$(wrapper).slideDown(800);
        }
    });
    $(wrapper).on('click', '.remove_button', function(e){ //Once remove button is clicked
        e.preventDefault();
        $(this).parent('div').fadeOut(); //Remove field html
        x--; //Decrement field counter
    });

    $('#dell').click(function(){
        $('.new-input').fadeOut()
        $('.remove_button').fadeOut();
    })
});