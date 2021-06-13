(function () {
    function addButton() {
        var btn = document.createElement("input");
        btn.value = "Full";
        btn.id = "fullButt";
        btn.type = "submit";
        document.getElementsByTagName("BODY")[0].appendChild(btn);
    }

    function eventManager() {
        let body = document.getElementsByTagName("BODY")[0]
        let player = document.getElementById("player")
        document
            .getElementById("fullButt")
            .addEventListener("click", function (event) {
                if (body.classList.contains("fullBody")){
                    body.classList.remove("fullBody");
                    player.classList.remove("videoPlayer")
                } else {
                    body.classList.add("fullBody");
                    player.classList.add("videoPlayer")
                }
            });
    }

    addButton();
    eventManager();
})();