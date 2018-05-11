$(function(){
    
        $('#alert').hide();
    
        $('#addnew').click(function(){
            
            var formdata = {
                id: $('#id').val(),
                name: $('#name').val(),
                description: $('#description').val(),
                photo: $('#photo').val(),
                price: $('#price').val(),
                weight: $('#weight').val(),
    
            }
    
            console.log(formdata);
            
            $.ajax({
    
                //CP2. Complete Ajax Code to INSERT new pin data 
                type: 'POST',
                url: "https://soaproductapi.herokuapp.com/products",
                data:formdata,
                
            }).then(function(data) {
        
                $('#alert').show();  
                $('#id').val('');          
                $('#name').val('');
                $('#description').val('');
                $('#photo').val('');
                $('#price').val('');
                $('#weight').val('');
                console.log('Added');
    
            });
        });
    });