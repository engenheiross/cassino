var owl = $('.owl-carousel');

let currentItem;
let rolling = false;

let listItems = 7;


owl.owlCarousel({
    dots: false,
    loop: true,
    items: listItems,
    autoplay: false
    
});


owl.on('changed.owl.carousel', function (e) {
    currentItem = e.relatedTarget.current();
    console.log("current: ",e.item.index) //same
    console.log("total: ",e.item.count)   //total
})



function roll() {
    if (rolling == true) { return 0; }
    rolling = true;

    owl.data('owl.carousel').options.autoplay = true;
    owl.data('owl.carousel').options.autoplayTimeout = 100;
    owl.trigger('refresh.owl.carousel' );
}

