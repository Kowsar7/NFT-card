$(document).ready(function(){

    $('#creator-name, #name').on('mouseenter',function(){
        $(this).addClass('active');
    })

    $('#image, #view-icon').on('mouseenter',function(){
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