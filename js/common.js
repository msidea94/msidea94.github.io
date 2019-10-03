function  Common() {
    var _this = this;
    var $win = $(window),
        $doc = $(document),
        $body = $('body, html');

    _this.tab = function() {
        var tabList = $('.tab .tab-list li a');
        var tabCon = $('.tab-con>div');
        var gridGuidBtn = $('.fixed-con .grid-btn');
        tabCon.first().show();
        tabList.on('click', function() {
            var idx = $(this).parent().index();
            // tav list class on off
            tabList.parent().siblings().removeClass('on');
            $(this).parent().addClass('on');

            // tab contents show and hide
            tabCon.siblings().hide();
            tabCon.eq(idx).show();
            // grid img remove
            tabCon.find('.img').removeClass('on');
            // grid button off
            gridGuidBtn.each(function(index,item) {
                $(this).removeClass('on');
                $(this).children().html('GRID GUID<br>ON');
            });

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
            // text 변경
            var text = $(this).children().html();
            if($(this).hasClass('on')) {
                $(this).children().html('GRID GUID<br>OFF');
            } else {
                $(this).children().html('GRID GUID<br>ON');
            }

            // grid image on off
            if($(this).hasClass('on')) {
                $(this).parent().siblings().find('.img').removeClass('on');
                gridImg.addClass('on');
            } else {
                gridImg.removeClass('on');
            }
        });
    }

    _this.button = function() {
        var button = $('.btn');
        button.on('click', function() {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
        });
    }

    _this.selectBox = function() {
        var selectBox = $('.select-box');
        selectBox.on('click', function() {
            $(this).toggleClass('on');
        });
    }



    function globarTab(tabList, tabContent) {
        tabContent.first().show();
        tabList.on('click', function() {
            var idx = $(this).parent().index();
            $(this).parent().siblings().removeClass('on');
            $(this).parent().addClass('on');
            tabContent.eq(idx).show();
            tabContent.eq(idx).siblings().hide();

        });
    }
    _this.globarTab = function() {
        var tabList01 = $('.tab-container.type01 .tab-list-group>li>a');
        var tabList02 = $('.tab-container.type02 .tab-list-group>li>a');
        var tabList03 = $('.tab-container.type03 .tab-list-group>li>a');
        var tabList04 = $('.tab-container.type04 .tab-list-group>li>a');
        var tabContent01 = $('.tab-container.type01 .tab-contents-group>div')
        var tabContent02 = $('.tab-container.type02 .tab-contents-group>div')
        var tabContent03 = $('.tab-container.type03 .tab-contents-group>div')
        var tabContent04 = $('.tab-container.type04 .tab-contents-group>div')
        globarTab(tabList01,tabContent01);
        globarTab(tabList02,tabContent02);
        globarTab(tabList03,tabContent03);
        globarTab(tabList04,tabContent04);
    }

    _this.popup = function() {
      var popupButton = $('.popup-btn a');
      var popupContent = $('.popup-content')
      var popupCloseButton = $('.popup-order-content .popup-close a');
      var popupDim = $('.popup-dim');
      popupButton.on('click', function() {
        var dataName = $(this).parent().attr('data-name');
        $body.css('overflow-y','hidden');
        popupDim.show();
        popupContent.each(function() {
          if($(this).attr('data-name') === dataName) {
            $(this).show();
          }
        });
      });
      popupCloseButton.on('click',function() {
        $body.css('overflow-y','auto');
        popupContent.hide();
        popupDim.hide();
        popupButton.removeClass('on');
      });
    }



    _this.init = function() {
        _this.tab();
        _this.goTop();
        _this.gridGuidBtn();
        _this.button();
        _this.selectBox();
        _this.globarTab();
        _this.popup();
    }()
}

var common = new Common();
