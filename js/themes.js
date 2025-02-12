$(document).ready(function () {
  const darkTheme = "dark-theme";
  const iconMoon = "fal fa-moon";
  const iconSun = "fad fa-sun";

  // تحميل الثيم المحفوظ
  if (localStorage.getItem("theme") === "dark") {
    $("body").addClass(darkTheme);
    $("#theme-button svg").removeClass(iconMoon).addClass(iconSun);
  }

  // عند الضغط على الزر
  $("#theme-button").click(function (e) {
    e.preventDefault();

    $("body").toggleClass(darkTheme);
    $("#theme-button svg").toggleClass(`${iconMoon} ${iconSun}`);

    // حفظ الثيم الحالي
    localStorage.setItem(
      "theme",
      $("body").hasClass(darkTheme) ? "dark" : "light"
    );
  });
});
