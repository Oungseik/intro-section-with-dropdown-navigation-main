const feature = $(".feature");
feature.on("click", () => {
    feature.toggleClass("active");
    feature.hasClass("active")
        ? feature.children().removeClass("down").addClass("up")
        : feature.children().removeClass("up").addClass("down");
    $(".feature-items").slideToggle(200);
});

$(".menuBtn").on("click", function () {
    $(this).toggleClass("active");
});
