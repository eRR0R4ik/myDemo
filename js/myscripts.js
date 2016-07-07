
$(document).ready(function(){
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
    $("#loginform").validate({
        
       rules:{ 
        
            username:{
                required: true,
                minlength: 3,
                maxlength: 11,
                pattern: "[A-Za-z]{3,} [A-Za-z]{3,}",
            },
            
            userid:{
                required: true,
                pattern: "[A-Z]{2}[0-9]{6}",
                maxlength: 9,
            },

            mail:{
                required: true,
                email: true,
            },

            gender:{
                required: true,
            },

            birthday:{
                required: true,
                date: true,
            }
       },
       
       messages:{
        
            username:{
                required: "This field is required",
                minlength: "Please, enter at least 3 characters",
                maxlength: "Please, enter no more than 11 characters.",
                pattern: "Please, use example! (Full name only)",
            },
            
            userid:{
                required: "Please, 2 leters and 6 numbers",
                pattern: "Please, 2 leters and 6 numbers",
                
            },

            birthday:{
                required: "This field is required",
                date: "Please, use example!",

            },

            mail:{
                required: "This field is required",
                email: "Please, use example",
            },

            gender:{
                required: "This field is required",
            }
        
       }
        
    });


}); //end of ready