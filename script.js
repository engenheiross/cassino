var owl = $('.owl-carousel');

let currentItem;
let rolling = false;

let listItems = 7;

let black_numbers = [2, 4, 6, 8, 10, 11, 13];
let red_numbers = [1, 3, 5, 7, 9, 12, 14];

owl.owlCarousel({
    dots: false,
    loop: true,

    items: listItems,
    autoplay: false,
    
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

/*
let number = document.createElement("div");
number.innerHTML = 0;
number.classList.add("number");
number.classList.add("owl-item");
number.classList.add("green");
document.getElementById("roleta").appendChild(number);

for(let i=1; i++; i<=14) {
let number = document.createElement("div");
number.classList.add("number");
number.classList.add("owl-item");
if (i <= 7) { 
    number.classList.add("red");
}
else {
    number.classList.add("black");
}
number.innerHTML = i;
document.getElementById("roleta").appendChild(number);
}
*/
