window.addEventListener("DOMContentLoaded", event => {
    let pin = document.querySelector(".pin");
    let line = document.querySelector(".line");
    let circle = document.querySelector(".circle");

    let visible = false;
    const tl = gsap.timeline({ paused: true });

    tl.to(pin, 0.3, { scale: 0.9, transformOrigin: "50% 50%" })
        .to(pin, 0.2, { scale: 1.2 })
        .to(pin, 0.2, { scale: 1 })
        .to(line, 1, { attr: { "stroke-dashoffset": 0 }, opacity: 1 }, "-=.4")
        .to(
            circle,
            2,
            {
                attr: { "stroke-dashoffset": 0 },
                opacity: 1,
                ease: "power4"
            },
            "-=0.5"
        );

    pin.addEventListener("click", () => {
        if (!visible) {
            tl.timeScale(1).play();
            visible = true;
        } else {
            tl.timeScale(3).reverse();
            visible = false;
        }
    });
});
