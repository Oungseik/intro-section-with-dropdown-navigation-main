const feature = $(".feature");
feature.on("click", () => {
    feature.toggleClass("active");
    feature.hasClass("active")
        ? feature.children().removeClass("down").addClass("up")
        : feature.children().removeClass("up").addClass("down");
    $(".feature-items").slideToggle(200);
});

const company = $(".company");
company.on("click", () => {
    company.toggleClass("active");
    company.hasClass("active")
        ? company.children().removeClass("down").addClass("up")
        : company.children().removeClass("up").addClass("down");
    $(".company-toggleBox").slideToggle(200);
});

$(".menuBtn").on("click", function () {
    $(this).toggleClass("active");
});
