var folder = "https://thomasclarke.github.io/el_stats/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("img").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) {
                $("body").append( "<img src='"+ folder + val +"'>" );
            }
        });
    }
});
