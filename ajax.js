/**
 * Method to View date and time
 * 
 */

function crunchifyAjax() {
    	crunchifyAjax1();
        $.ajax({type:"GET",
            url : 'ajaxtest.html',
            success : function(data) {
                $('#result').html(data);
            }
        });
    }
    
    function crunchifyAjax1() {
        $.ajax({
            type: "POST",
            data:"TEST",
            url : 'print.html',
            contentType: 'application/json',
            success : function(data) {
            $('#result1').html(data);
            }
        });
    }
    
    var intervalId = 0;
    intervalId = setInterval(crunchifyAjax, 1000);
