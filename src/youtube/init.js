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
        let player = document.getElementById("player-theater-container")
        let player2 = document.getElementById("player-container-outer")
        document
            .getElementById("fullButt")
            .addEventListener("click", function (event) {
                console.log(player2)
                if (body.classList.contains("fullBody")){
                    body.classList.remove("fullBody");
                    player.classList.remove("videoPlayer")
                    player2.classList.remove("videoPlayer")
                } else {
                    body.classList.add("fullBody");
                    player.classList.add("videoPlayer")
                    player2.classList.add("videoPlayer")
                }
            });
    }

    createPanel();
    addButton();
    eventManager();
})();