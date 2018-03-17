$(function() {

    $(function() {
        var owl = $('.owl-carousel').owlCarousel({
            margin  :0,
            nav     :true,
            autoWidth:true,
            nav: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

        /* animate filter */
        var owlAnimateFilter = function(even) {
            $(this)
            .delay(80 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('item')
            })
        }
        $('.main').on('click', function(e) {
          getFilter(this);
        });

        function getFilter(here){
            $('.owl-carousel li').addClass('item');
            var here = $(here);
              setTimeout(function(){
                $('.main').on('click',function(){
                    getFilter(this);
                })
            },0)
            var filter_data = here.data('filter')+',.main';

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) {
                $(_owl).find('li').each(owlAnimateFilter);
            });
        }



        // setTimeout(function(){
        //     var width=0;
        //    $('.product-carousel .owl-item').each(function(index,el){
        //         width+=$(el).width();
        //     });
        //     $('.product-carousel .owl-stage').css('width','10000');
        // },0);



    });




});
