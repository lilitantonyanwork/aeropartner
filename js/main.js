$(function (){
    $( "#datepicker" ).datepicker();
    $('[data-decrease]').click(function (e){
        e.preventDefault();
        var value = $(this).parent().find('[data-value]').val();
        if(value > 1) {
            value--;
            $(this).parent().find('[data-value]').val(value);
        }
    });
    $('[data-increase]').click(function (e){
        e.preventDefault();
        var value = $(this).parent().find('[data-value]').val();
        if(value < 100) {
            value++;
            $(this).parent().find('[data-value]').val(value);
        }
    });
    $('[data-value]').change(function (e){
        e.preventDefault();
        var value = $(this).val();
        if(value == undefined || isNaN(value) == true || value <= 0) {
            $(this).val(1);
        } else if(value >= 101) {
            $(this).val(100);
        }
    });

    $('.mobile-menu').on('click',function (){
        $('.nav-right').toggle();
    })
    $('.tab-item').on('click',function (){
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('active');
        $('.tab-content').eq(($(this).index()+1)).addClass('active');


    })
})