$(function () {
    $('.thumb').click(function () {
        $(this).next('.popup').addClass('show');
    })
    $('.close-popup').click(function () {
        $('.popup.show').removeClass('show');
    })
    $('.filter-menu .menu-item').click(function () {
        //$('.activeFilter').removeClass('activeFilter');
        // alert($(this).hasClass('activeFilter'))
        var $th = $(this);
        //$th.toggleClass('activeFilter');
        var dataFilter = $(this).attr('data-filter');
        $('.product-container.thumb').each(function () {
            var cats = $(this).attr('data-cats');
            if (cats.includes(dataFilter)) {
                $(this).parent().show();
                $('.filter-menu .menu-item').each(function () {
                    var dataFilter = $(this).attr('data-filter');
                    if ($(this).hasClass('activeFilter') == false) {
                        if (cats.includes(dataFilter)) {
                            $(this).addClass('activeFilter');

                        }
                    } else {
                        if (cats.includes(dataFilter)) {
                            $(this).removeClass('activeFilter');

                        }

                    }

                })
            } else {
                $(this).parent().hide();
            }

        });

        $('.filter-menu .menu-item').each(function () {
            if ($(this).hasClass('activeFilter')) {
                var dataFilter = $(this).attr('data-filter');
                $('.product-container.thumb').each(function () {
                    var cats = $(this).attr('data-cats');
                    if (cats.includes(dataFilter)) {
                        $(this).parent().show();
                        return false;
                    } else {
                        // $(this).hide();
                    }

                });
            } else {
                var dataFilter = $(this).attr('data-filter');
                $('.product-container.thumb').each(function () {
                    var cats = $(this).attr('data-cats');
                    if (cats.includes(dataFilter)) {
                        $(this).parent().hide();
                    } else {
                        // $(this).hide();
                    }

                });
            }
        })

    })
});