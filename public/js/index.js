$(document).ready(function(){

    $('#tabs').tab();

    $('a[href="#index"]').on('click',function(){
        $.ajax({
            type:'get',
            url:'/partials/index'
        }).done(function(data){
                $('#tab_container').html(data);
            })
    });

    $('a[href="#bigboard"]').on('click',function(){
        $.ajax({
            type:'get',
            url:'/partials/bigboard'
        }).done(function(data){
                $('#tab_container').html(data);
            })
    });

    $('a[href="#mypicks"]').on('click',function(){
        $.ajax({
            type:'get',
            url:'/partials/mypicks'
        }).done(function(data){
                $('#tab_container').html(data);
            })
    });

    $('a[href="#contact"]').on('click',function(){
        $.ajax({
            type:'get',
            url:'/partials/contact'
        }).done(function(data){
                $('#tab_container').html(data);
            })
    });
})