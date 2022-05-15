const feature = $(".feature");
feature.on("click", () => {
    feature.toggleClass("active");
});

$(".menuBtn").on("click", function () {
    $(this).toggleClass("active");
});
