$(document).ready(function () {

    $("#banner-area .owl-carousel").owlCarousel({
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        dots: false,
        items: 1
    });

    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }

    });

    const filterContainer = document.querySelector('#filters');

    filterContainer.addEventListener('click', (event) => {
      // Jeśli kliknięty element nie jest przyciskiem, zakończ funkcję
      if (event.target.tagName !== 'BUTTON') return;
      
      // Usuń klasę is-checked z każdego przycisku
      filterContainer.querySelectorAll('button.is-checked')
                     .forEach((button) => button.classList.remove('is-checked'));
      
      // Dodaj klasę is-checked do klikniętego przycisku
      event.target.classList.add('is-checked');
    });    

    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $(".button-group").on('click', 'button', function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
    })

    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }

    });

    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }

    });


});