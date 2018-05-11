var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function(){

    $('#alert').hide();

    var pinid = getUrlParameter('id');

    $.ajax({
    
        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products"+pinid,

    }).then(function(data) {

        $('#name').val(data.Name);
        $('#title').val(data.title);
        $('#desc').val(data.description);
        $('#likes').val(data.likes);


    });

    $('#save').click(function(){

        var formdata = {
            Name: $('#name').val(),
            title: $('#title').val(),
            description: $('#desc').val(),
            likes: $('#likes').val(),
        }

        console.log(formdata);

        $.ajax({

            //CP4. Complete Ajax code to UPDATE the selected pin (pinid)  
            type:'PUT',
            url:"https://soaproductapi.herokuapp.com/products"+pinid,
            data:formdata,

    
        }).then(function(data) {
            
            $('#alert').show();            
            console.log('Edited');
            console.log(data);
            
        });
    });

    $('#delete').click(function(){

        $.ajax({

            //CP5. Complete Ajax code to DELETE the selected pin (pinid)  
           type:'DELETE',
           url:"https://soaproductapi.herokuapp.com/products"+pinid,
 

        }).then(function(data) {

            window.location.href = 'list.html';      
                  
        });
    });
});