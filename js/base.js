var folder = "https://dl.dropboxusercontent.com/spa/5rh51y7rqq0sifl/eventurelive/img/yes";

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
