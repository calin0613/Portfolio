jQuery(function(){
  var windowWidth = $(window).width();
  var headerHight = 0; 
  jQuery('a').click(function() {
  var speed = 500;
  var href= jQuery(this).attr("href");
  var target = jQuery(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top-headerHight;
  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
 });
});


$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.fukidashi');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 600;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.text1, .text2, .text3');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 300;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

function setFadeElement(){
	var windowH = $(window).height();	//ウィンドウの高さを取得
	var scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
	var contentsTop = Math.round($('#profile h3').offset().top);	//要素までの高さを四捨五入した値で取得
	var contentsH = $('#profile').outerHeight(true);	//要素の高さを取得

    //出現範囲内に入ったかどうかをチェック
	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
$("#naa-pro").addClass("UpMove"); //入っていたらUpMoveをクラス追加
$("#naa-pro").removeClass("DownMove"); //DownMoveを削除
$(".hide").removeClass("hide"); //hide-btnを削除 
}
    else{
        if(!$(".hide").length){				//サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
		$("#naa-pro").addClass("DownMove");  //DownMoveをクラス追加
		$("#naa-pro").removeClass("UpMove"); //UpMoveを削除	
		}
	}
}

$(function () {
  $('.js-open').click(function () {
    $("body").addClass("no_scroll");
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    $('#overlay, .modal-window[data-id="modal' + id + '"]').fadeIn();
  });
  // オーバーレイクリックでもモーダルを閉じるように
  $('.js-close , #overlay').click(function () {
    $("body").removeClass("no_scroll");
    $('#overlay, .modal-window').fadeOut();
  });
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});