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
            // data: {week_id:1}
        }).done(function(data){
            $('#tab_container').html(data);
            applyBigboardAjax();
        })
    });

    $('a[href="#mypicks"]').on('click',function(){
        $.ajax({
            type:'get',
            url:'/partials/mypicks'
        }).done(function(data){
            $('#tab_container').html(data);
            $('.weeks_accordion').collapse();
            applyPickAjax();
            applyWeekSelect();
        });
    });

    $('a[href="#contact"]').on('click',function(){
        $.ajax({
            type:'get',
            url:'/partials/contact'
        }).done(function(data){
            $('#tab_container').html(data);
        })
    });

    function bnPick(el){
        var button = el;
        var oButton = el.closest('.row').find('button').not(button);
        var icon = el.find('i');
        var oIcon = el.closest('.row').find('i').not(icon);

        var team_id = el.find('input').val();
        var game_id = el.closest('.row').find('.gameid').val();
        $.ajax({
            type:'post',
            url:'/api/picks',
            data: {team_id:team_id,game_id:game_id}
        }).done(function(data){
            button.removeClass('bnpick');
            button.addClass('btn-success');
            button.prop('disabled','disabled');
            icon.removeClass('icon-pencil');
            icon.addClass('icon-white');
            icon.addClass('icon-ok');

            if (oButton.hasClass('btn-success')){
                oButton.removeClass('btn-success');
                oButton.addClass('bnpick');
                oButton.prop('disabled',false);
                oIcon.addClass('icon-pencil');
                oIcon.removeClass('icon-white');
                oIcon.removeClass('icon-ok');
            }
            el.one('click',function(){
                bnPick();
            });
        }).error(function(errorThrown){
            console.log(errorThrown);
        });
    }

    function applyPickAjax(){
        $('.bnpick').one('click',function(){
            var button = $(this);
            var oButton = $(this).closest('.row').find('button').not(button);
            var icon = $(this).find('i');
            var oIcon = $(this).closest('.row').find('i').not(icon);

            var team_id = $(this).find('input').val();
            var game_id = $(this).closest('.row').find('.gameid').val();
            $.ajax({
                type:'post',
                url:'/api/picks',
                data: {team_id:team_id,game_id:game_id}
            }).done(function(data){
                button.removeClass('bnpick');
                button.addClass('btn-success');
                button.prop('disabled','disabled');
                icon.removeClass('icon-pencil');
                icon.addClass('icon-white');
                icon.addClass('icon-ok');

                if (oButton.hasClass('btn-success')){
                    oButton.removeClass('btn-success');
                    oButton.addClass('bnpick');
                    oButton.prop('disabled',false);
                    oIcon.addClass('icon-pencil');
                    oIcon.removeClass('icon-white');
                    oIcon.removeClass('icon-ok');
                }
            }).error(function(errorThrown){
                console.log(errorThrown);
            });
            oButton.one('click',function(){
                bnPick($(this));
            });
        });
    }

    function applyWeekSelect(){
        $('.week_link').one('click',function(){
            var inner = $(this).closest('.accordion-group').find('.accordion-inner');
            var week = $(this).find('.week_num').val();
            $.ajax({
                type:'get',
                url:'/partials/finishedpicks',
                data:{week:week}
            }).done(function(data){
                inner.html(data);
            }).fail(function(errorThrown){
                console.log(errorThrown);
            });
        });
    }

    function applyBigboardAjax(){
        $('.bigboard_week_link').one('click',function(){
            var inner = $(this).closest('.accordion-group').find('.accordion-inner');
            var week = $(this).find('.week_num').val();
            $.ajax({
                type:'get',
                url:'/partials/finishedbigboard',
                data:{week_id:week}
            }).done(function(data){
                inner.html(data);
            }).fail(function(errorThrown){
                console.log(errorThrown);
            });
        });
    }





})