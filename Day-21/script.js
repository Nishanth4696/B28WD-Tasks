let countdown = 11;
document.querySelector(".msg").innerText=--countdown;

setTimeout(() => {
    document.querySelector(".msg").innerText = --countdown;
    setTimeout(() => {
        document.querySelector(".msg").innerText = --countdown;
        setTimeout(() => {
            document.querySelector(".msg").innerText = --countdown;
            setTimeout(() => {
                document.querySelector(".msg").innerText = --countdown;
                setTimeout(() => {
                    document.querySelector(".msg").innerText = --countdown;
                    setTimeout(() => {
                        document.querySelector(".msg").innerText = --countdown;
                        setTimeout(() => {
                            document.querySelector(".msg").innerText = --countdown;
                            setTimeout(() => {
                                document.querySelector(".msg").innerText = --countdown;
                                setTimeout(() => {
                                    document.querySelector(".msg").innerText = --countdown;
                                    setTimeout(() => {
                                        document.querySelector(".msg").innerText = "Happy Indepandence Day";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);