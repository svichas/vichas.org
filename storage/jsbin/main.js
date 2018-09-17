
$(function() {
    $(".section").eq(0).addClass("active");
    $("body").addClass("loaded");
    $("body").keydown(function(e) {
        if (e.key == "ArrowUp") {
            prevpage();
        } else if (e.key == "ArrowDown") {
            nextpage();
        }
    });
    setpage();
});



window.addEventListener('wheel', function(e) {
  if (e.deltaY < 0) {
      prevpage();
  }
  if (e.deltaY > 0) {
      nextpage();
  }
});

function setpage() {
    var foundActive = false;
    $(".section").removeClass("nextFromActive");
    $(".section").each(function(e) {
        if (foundActive) {
            return $(this).addClass("nextFromActive");
        }
        if ($(this).hasClass("active")) foundActive = true;
    });
    $(".currentPage").html($(".section.active").index()+1);
    $(".pageNumber").html($(".section").length);

    if ($(".section.active").index()) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }

}

function nextpage() {
    // up scroll
    var nextsect = $(".section.active").next(".section");
    if (nextsect.length) {
        $(".section.active").removeClass("active");
        nextsect.addClass("active")
        setpage();
    }
}

function prevpage() {
    // down scroll
    var prevsect = $(".section.active").prev(".section");
    if (prevsect.length) {
        $(".section.active").removeClass("active");
        prevsect.addClass("active");
        setpage();
    }
}
