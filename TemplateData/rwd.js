window.onload = () => {
    var mobileDevices = ['iPhone', 'iPad', 'iPod']
    var isIOS = false;
    for (var i = 0; i < mobileDevices.length; i++) {
        if (navigator.userAgent.match(mobileDevices[i])) {
            document.getElementById("fullscreen").style.display = "none"
            isIOS = true;
        }
    }

    // setTimeout(() => {
    //     if (!isIOS) {
    //         document.getElementById("fullscreen").click();
    //         document.body.requestFullscreen();
    //     }
    // }, 10000);
}

window.addEventListener('orientationchange', () => {
    document.documentElement.style.height = `initial`;
    setTimeout(() => {
        document.documentElement.style.height = `100%`;
        setTimeout(() => {
            // this line prevents the content
            // from hiding behind the address bar
            window.scrollTo(0, 1);
        }, 500);
    }, 500);
});