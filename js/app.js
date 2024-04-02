document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(jQuery); // Register jQuery with GSAP for compatibility

  $("#container").on("mouseenter", function () {
    gsap.to(this, { duration: 0.3, scale: 1.5 });
  });

  $("#container").on("mouseleave", function () {
    gsap.to(this, { duration: 0.3, scale: 1 });
  });

  $("#container").on("mousemove", function (e) {
    var movement = 30;
    var boundingRect = this.getBoundingClientRect();
    var relX = e.clientX - boundingRect.left;
    var relY = e.clientY - boundingRect.top;

    gsap.to(".circle", {
      duration: 0.3,
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
      y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
      ease: "power2.out",
    });
  });
});
