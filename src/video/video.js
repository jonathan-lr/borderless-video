(function () {
    function createPanel() {
        var div = document.createElement("div");
        div.id = "borderlessPanel";
        div.classList.add("borderlessPanel");
        document.getElementsByTagName("BODY")[0].appendChild(div);
    }

    function addButton() {
        var btn = document.createElement("input");
        btn.value = "Full";
        btn.id = "fullButt";
        btn.type = "submit";
        btn.classList.add("borderlessButton");
        document.getElementById("borderlessPanel").appendChild(btn);
    }

    function eventManager() {
        let body = document.getElementsByTagName("BODY")[0]
        document
            .getElementById("fullButt")
            .addEventListener("click", function (event) {
                let videos = document.getElementsByTagName("video")
                let video
                for (let i = 0; i < videos.length; i++) {
                    if (!videos[i].paused) {
                        video = videos[i]
                    }
                }
                console.log(video)
                if (body.classList.contains("fullBody")){
                    body.classList.remove("fullBody");
                    video.classList.remove("videoPlayer")
                } else {
                    body.classList.add("fullBody");
                    video.classList.add("videoPlayer")
                }
            });
    }

    createPanel();
    addButton();
    eventManager();
})();