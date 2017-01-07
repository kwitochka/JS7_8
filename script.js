$(document).ready(function(){

// Tabs
$('.tab_menu li a').on('click',(function(){
$(this).removeClass('active');
$(this).addClass('active');
tab = $(this).attr('href');
$('.tabs .active').removeClass('active');
$(tab).addClass('active');
}));

// Input form

$('input').mouseleave(function(){
    $(this).siblings('span').hide(); 
});

$('input').mouseenter(function(){
    $(this).siblings('span').show();
});


$('fieldset').append('<button>Show</button>');
$('button').on('click', function(){
$('span').show();
});
});


