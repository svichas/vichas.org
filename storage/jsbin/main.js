
// variable for preventing user changing pages too fast.
var allowPageChange = false;

$(function() {

    // set first section active
    $(".section").eq(0).addClass("active");

    // add loaded class when dom is loaded for animations
    $("body").addClass("loaded");

    // change pages with keys function
    $("body").keydown(function(e) {
        if (e.key == "ArrowUp") {
            prevpage();
        } else if (e.key == "ArrowDown") {
            nextpage();
        }
    });

    var elm = document.querySelector("body");
    var mc = new Hammer(elm);
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    mc.on("panup pandown", function(ev) {
      if (!allowPageChange) return;
      switch (ev.type) {
        case "panup":
          nextpage();
          break;
        case "pandown":
          prevpage();
          break;
      }
    });

    // render pagination & other ...
    setPage();

});





window.addEventListener('wheel', function(e) {

  // prevent user from change pages too fast
  if (!allowPageChange) return;

  // check scroll direction
  if (e.deltaY < 0) {
      // case scroll up
  prevpage();
  }
  if (e.deltaY > 0) {
      // case scroll down
  nextpage();
  }

});

function setPage() {
    // rendering page
    $(".currentPage").html($(".section.active").index()+1);
    $(".pageNumber").html($(".section").length);

    // add & remove class scrolled to body for animations
    if ($(".section.active").index()) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }


    // allow user to scroll page after 1second
    setTimeout(function() {
        allowPageChange = true;
    }, 1000);

}


// method for next page
function nextpage() {
    // next section that we want to scroll on selection
    var nextsect = $(".section.active").next(".section");

    if (nextsect.length) {
        // if next section is found deactivete current section active next section
        $(".section.active").removeClass("active");
        nextsect.addClass("active");

        // deactivate scrolling
        allowPageChange = false;
        setPage();
    }
}


// method for prev page
function prevpage() {
    // prev section that we want to scroll on selection
    var prevsect = $(".section.active").prev(".section");

    if (prevsect.length) {
        // if prev section is found deactivete current section active prev section
        $(".section.active").removeClass("active");
        prevsect.addClass("active");

        // deactivate scrolling
        allowPageChange = false;
        setPage();

    }
}
