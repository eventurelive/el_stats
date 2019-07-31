var folder = "https://raw.githubusercontent.com/thomasclarke/el_stats/master/img/yes";

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
