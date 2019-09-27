function  Common() {
    var _this = this;
    var $win = $(window),
        $doc = $(document),
        $body = $('body, html');

    _this.tab = function() {
        var tabList = $('.tab ul li a');
        var tabCon = $('.tab-con>div');
        var gridGuidBtn = $('.fixed-con .grid-btn');
        tabCon.first().show();
        tabCon.first().addClass('active');
        tabList.on('click', function() {
            var idx = $(this).parent().index();
            tabList.parent().siblings().removeClass('on');
            $(this).parent().addClass('on');
            tabCon.siblings().hide();
            tabCon.siblings().removeClass('active')
            tabCon.eq(idx).show();
            tabCon.eq(idx).addCLass('active');


        });
    };

    _this.goTop = function() {
        var btn = $('.fixed-con .go-top')
        btn.on('click', function() {
            $body.animate({
                scrollTop : 0
            }, 200);
        });
    }

    _this.gridGuidBtn = function() {
        var gridGuidBtn = $('.fixed-con .grid-btn');
        var gridImg = $('.tab-con .img');
        gridGuidBtn.on('click', function() {
            $(this).toggleClass('on');
            if($(this).hasClass('on')) {
                $(this).parent().siblings().find('.img').removeClass('on');
                gridImg.addClass('on');
            } else {
                gridImg.removeClass('on');
            }
        });
    }

    _this.init = function() {
        _this.tab();
        _this.goTop();
        _this.gridGuidBtn();
    }()
}

var common = new Common();