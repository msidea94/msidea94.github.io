function  Common() {
    var _this = this;
    var $win = $(window),
        $doc = $(document),
        $body = $('body, html');

    _this.tab = function() {
        var tabList = $('.tab ul li a');
        var tabCon = $('.tab-con>div');
        tabCon.first().show();
        tabList.on('click', function() {
            var idx = $(this).parent().index();
            tabList.parent().siblings().removeClass('on');
            $(this).parent().addClass('on');
            tabCon.siblings().hide();
            tabCon.eq(idx).show();
        });
    }

    _this.init = function() {
        _this.tab();
    }()
}

var common = new Common();