$(document).ready(function () {
  // Accordion functionality
  $(".accordion").on("click", function () {
    $(this).toggleClass("active");
    var panel = $(this).next();
    if (panel.css("max-height") !== "0px") {
      panel.css("max-height", "0px");
    } else {
      panel.css("max-height", panel.prop("scrollHeight") + "px");
    }
  });

  // Scroll progress bar functionality
  const scrollProgress = document.getElementById("scroll-progress");

  if (scrollProgress) {
    $(document).on("scroll", function () {
      const scrollHeight = $(document).height() - $(window).height();
      const scrollPosition = $(window).scrollTop();
      const progress = (scrollPosition / scrollHeight) * 100;
      scrollProgress.style.width = progress + "%";
    });
  }
});
