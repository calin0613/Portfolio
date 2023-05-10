$(function () {
	const height = $("#header").height();
	$("#main").css("margin-top", height);
});

$(function () {
    var headerHight = 100;
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 400, "swing");
      return false;
    });
  });

(function() {
	const image = document.querySelectorAll('.odd');
  
	const observer = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.intersectionRatio > 0) {
		  entry.target.classList.add('img-anime1');
		} else {
			entry.target.classList.remove('img-anime1');
		  }
	  });
	});
  
	Array.prototype.forEach.call(image, function(img) {
	  observer.observe(img);
	});
})();

(function() {
	const image = document.querySelectorAll('.even');
  
	const observer = new IntersectionObserver(function(entries) {
	  entries.forEach(function(entry) {
		if (entry.intersectionRatio > 0) {
		  entry.target.classList.add('img-anime2');
		} else {
			entry.target.classList.remove('img-anime2');
		  }
	  });
	});
  
	Array.prototype.forEach.call(image, function(img) {
	  observer.observe(img);
	});
})();

$('.acc').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

$('#footer .btn').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});