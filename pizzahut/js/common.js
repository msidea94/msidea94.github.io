function Common () {
  var $win = $(window);
  var $body = $('body, html');
  var _this = $(this);

  _this.scrollActive = function () {
    var commonCon = $('.comm-con');
    $win.on('scroll', function () {
      commonCon.each(function () {
        var section = $(this);
        if (
          $win.scrollTop() >= section.offset().top - (section.find('.inner').height()/2 + 300) &&
          $win.scrollTop() < section.offset().top + (section.find('.inner').height() - $win.height()/2)
        ) {
          section.addClass('active');
        }
      });
    });
    setTimeout(function (){
      commonCon.eq(0).addClass('active');
    }, 1000);
  }

  _this.init = function () {
    _this.scrollActive();
  }()
}

var common = new Common();
