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

    function addNextButton() {
        var btn = document.createElement("input");
        btn.value = "Next";
        btn.id = "nextButt";
        btn.type = "submit";
        btn.classList.add("borderlessButton");
        document.getElementById("borderlessPanel").appendChild(btn);
    }

    function addPrevButton() {
        var btn = document.createElement("input");
        btn.value = "Prev";
        btn.id = "prevButt";
        btn.type = "submit";
        btn.classList.add("borderlessButton");
        document.getElementById("borderlessPanel").appendChild(btn);
    }

    function addSkipButton() {
        var btn = document.createElement("input");
        btn.value = "Skip";
        btn.id = "skipButt";
        btn.type = "submit";
        btn.classList.add("borderlessButton");
        document.getElementById("borderlessPanel").appendChild(btn);
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

        document
            .getElementById("nextButt")
            .addEventListener("click", function (event) {
                document.getElementsByClassName("next")[0].click()
            });

        document
            .getElementById("prevButt")
            .addEventListener("click", function (event) {
                document.getElementsByClassName("prev")[0].click()
            });

        /*document
            .getElementById("skipButt")
            .addEventListener("click", function (event) {
                throw(player.getElementsByTagName("video")[0])
            });*/
    }

    createPanel();
    addButton();
    addNextButton();
    addPrevButton();
    eventManager();
})();