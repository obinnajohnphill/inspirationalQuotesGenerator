// generavimas
$("form#options").submit( function() {
    $.getJSON("json/sentences.json", function(json){
        var qty = parseInt($("form#options").find("input[name=qty]").val());
        var dup = $(this).find("input[name=dup]").is(':checked');
        var r = randomiseNumbers(0, json.data.length-1, qty, false);
        $("#result").empty();

        for(var i=0; i<r.length; i++){
            var url_part = encodeURIComponent(json.data[r[i]].sentence);
            $("#result").append("<li><div> \
				<span class='support-sentence'>"+json.data[r[i]].sentence+"</span></div></li>");
        }
    });
    return false;
});