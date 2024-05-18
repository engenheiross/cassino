var stoping = false;
var itemSelected = 0;

let bet_color;
let bet_value = 0;
let saldo = 10000;


jQuery(function ($) {
    var $owl = $('.owl-carousel');
    var $balance = $('#balance');
    
    $balance.html("Saldo: $" + saldo);

    // Inicializando o Owl Carousel
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    });

    // Clicar no botão de Rodar
    $('.rodar').click(function (e) {
        e.preventDefault();
        bet_value =  $('#bet-input').val();
        if (Number.isInteger(parseInt(bet_value)) == false) {
            $('#status').html("Aposta inválida");
            return false;
        }
        if (bet_value > saldo) {
            $('#status').html("Saldo insuficiente");
            return false;
        }
        saldo -= bet_value;
        $balance.html("Saldo: $" + saldo);

        stoping = false;
        // Numero aleatório entre 0 e 14
        itemSelected = Math.floor((Math.random() * 14));
        var $jump = $('.rodar');
        bet_color = $(this).attr('class').split(' ')[1];
        $('#status').html("Rodando..."); //Atualizando status da roleta
        $jump.attr('disabled', 'disabled');
        // Trigger autoplay owl
        $owl.trigger('play.owl.autoplay', [100]);
        // Diminuir a velocidade gradualmente
        setTimeout(slowSpeed, 2000, $owl, 200);
        setTimeout(slowSpeed, 4000, $owl, 250);
        setTimeout(slowSpeed, 5000, $owl, 300);
        setTimeout(stopAutoplay, 6000);
        return false;
    });

    // Event changed Owl
    $owl.on('changed.owl.carousel', function (e) {
        if (stoping) {
            var index = e.item.index;
            var element = $(e.target).find(".owl-stage").find('.number').eq(index);
            var item = element.html();
            console.log(element);
            if (item == itemSelected) {
                // Se o elemento atual for igual ao numero random, parar a roleta
                $('#status').html("O número " + item + "foi rodado!");
                if(item == 0) {
                    saldo += (bet_value * 14);
                }
                else if(bet_color == "red" && item <= 7 || bet_color == "black" && item > 7) {
                    saldo += (bet_value * 2);
                }
                $balance.html("Saldo: $" + saldo);

                $owl.trigger('stop.owl.autoplay');
                $('.rodar').removeAttr('disabled');
            }
        }
    });

    // Showcase
    slowSpeed($owl, 1400);

});

/**
 * Reduce speed roulette
 * @param {type} $owl
 * @param {type} speed
 * @returns {undefined}
 */
function slowSpeed($owl, speed) {
    $owl.trigger('play.owl.autoplay', [speed]);
}

/**
 * Stop autoplay roulette
 * @returns {undefined}
 */
function stopAutoplay() {
    stoping = true;
}