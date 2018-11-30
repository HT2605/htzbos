// progress(80, $('#progressBar'));
// progress(50, $('#progressBar1'));
// progress(30, $('#progressBar2'));
// progress(15, $('#progressBar3'));

// function progress(percent, $element) {
//     var progressBarWidth = percent * $element.width() / 100;
//     $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
// }

   $(function() {
    var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
    $('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
    $('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
    $('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
    $('.color-container-4').filterizr({ controlsSelector: '.color-controls-4', layout: 'packed' });
    $('.color-container-5').filterizr({ controlsSelector: '.color-controls-5', layout: 'horizontal' });
    $('.color-container-6').filterizr({ controlsSelector: '.color-controls-6', layout: 'vertical' });
    window.filterizr = f;
  });