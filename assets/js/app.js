$(function(){
    //
    $(window).on('scroll',function(){
        if($(window).scrollTop()>150){
            $('#my_nav').addClass('stickyNav')
        }else{
            $('#my_nav').removeClass('stickyNav')
        }
    })
    // slick slider
    $('.slick_slider').slick({
        arrows:false,
        fade:true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        dotsClass:'slider_dots',
    })

    //slick_chart
   $('.hchart_slick').slick({
    arrows:false,
    fade:true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    dotsClass:'slider_dots',
   })
    
    //
 
    
})


Highcharts.chart('hchart1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'মাসভিত্তিক প্রাপ্তি'
    },

    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'প্রাপ্তি (হাজার টাকায়)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'প্রাপ্তি <b>{point.y:1f} </b>'
    },
    series: [{
        name: 'Population',
        data: [
           
            ['জানুয়ারী', 3550370077],
            ['ফেব্রুয়ারী', 2174763852],
            ['মার্চ', 813414594],
            ['এপ্রিল', 0],
            ['মে', 0],
            ['জুন', 0],
            ['জুলাই', 0],
            ['আগস্ট', 0],
            ['সেপ্টেম্বর', 0],
            ['অক্টোবর', 0],
            ['নভেম্বর', 0],
            ['ডিসেম্বর', 0],
            
        ],
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#fff',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
//
Highcharts.chart('hchart2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'কর/সেবাভিত্তিক প্রাপ্তি'
    },

    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'প্রাপ্তি (হাজার টাকায়)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'প্রাপ্তি <b>{point.y:1f} </b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',],
            ['সরকারি…', 3550370077],
            ['বইপত্র ও প্রকা…',],
            ['মৎস্য ও মৎস্যজাত দ্রব্যাদি',]
        ],
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#fff',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
//
var splide = new Splide( '.splide', {
    type   : 'loop',
    direction: 'ttb',
    height   : '10rem',
    wheel    : true,
    autoplay:true,
    arrows : false,
    pagination : false,
    speed:1000,
    
   
  } );
  
  splide.mount();
  
