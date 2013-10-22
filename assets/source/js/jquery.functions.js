jQuery(document).ready(function($) {
    
    //inputs clear and restore value
    var el = $('input[type=text], input[type=email], textarea, input.header-search');
    el.focus(function(e) {
        if (e.target.value === e.target.defaultValue)
            e.target.value = '';
    });
    el.blur(function(e) {
        if (e.target.value === '')
            e.target.value = e.target.defaultValue;
    });

    //apply magnific popup to all links to image files
    $('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
        if ($(this).parents('.gallery').length == 0) {
            $(this).magnificPopup({type:'image'});
        }
    });

    //initialize magnifici popup galleries
    $('.file-structure').magnificPopup({
        delegate: 'a',
        type: 'image',
        image: {
            titleSrc: 'rel'
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });

    //apply class to ie8 list items of first and last
    if ($('body.lt-ie9')) {
        $("li:first-child").addClass("first-child");
        $("li:last-child").addClass("last-child");
    }

});