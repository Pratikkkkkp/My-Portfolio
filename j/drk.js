$(document).ready(function (e) {
  // Function to set a cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to set the theme
  var setTheme = function (theme) {
    if (theme === "dark") {
      $("body").removeClass("standard").addClass("dark");
      $(".inner-switch").text("Light");
      setCookie("Theme", "dark", 30);
    } else {
      $("body").removeClass("dark").addClass("standard");
      $(".inner-switch").text("Dark");
      setCookie("Theme", "standard", 30);
    }
  };

  // Force the theme to always be dark
  setTheme("dark");

  // Toggle theme on button click
  $(".inner-switch").on("click", function () {
    if ($("body").hasClass("dark")) {
      setTheme("standard");
    } else {
      setTheme("dark");
    }
  });
});
