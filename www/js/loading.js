$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
    setTimeout(function(){$('#page-preloader').fadeOut('slow')},500); 
});

    /* 
$(window).on('load', function () {
     var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
    */