(function () {
    setInterval(() => {
        const bubble = document.getElementsByClassName("bubble")[0];
        if (bubble.style['animation-name'] !== "tranY") {
            bubble.style = "animation-name:tranY";
            return;
        }
        bubble.style = "animation-name:tranX";
    }, 1500);
})()