$(document).ready(function(){

    $('#creator-name, #name').hover(function(){
        $(this).addClass('active');
    })

    $('#image, #view-icon').hover(function(){
        $('#image').addClass('active');
        $('#view-icon').addClass('active')
    })

    $('#creator-name, #name').on('mouseleave',function(){
        $(this).removeClass('active');
    })

    $('#image').on('mouseleave',function(){
        $(this).removeClass('active');
        $('#view-icon').removeClass('active');
    })


});