$(function () {
    $.ajax({
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products"
        //CP1. Complete Ajax Code to GET ALL pin data 

    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><a href="edit.html?id='+data[i].id+'">Buy</a></td><td> <img src=" '+data[i].photo+' height="80px" width="120px" "> </td><td>' + data[i].name + '</td><td>' + data[i].description + '</td><td>' + data[i].price + '</td>+><td>' + data[i].weight +
             '</td></tr>';
            $('#pinlist').append(row);
        }
        
    }

});