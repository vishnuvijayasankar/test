    $('#destinations').on('change',function(){                          <!-- "I changed the id from fetch to destinations"-->
        $.getJSON('http://10.1.4.130/json/JSON.json', function(data) {
            // $("#destinations option").remove();
            destinations = data['Destinations'];
            console.log(data['Destinations']);
            $.each(destinations, function(id, destination) {
                $('select').append('<option value="">'+destination["destinationName"]+'</option>');
            });
        });
    });
