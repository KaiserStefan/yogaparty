"use strict";

app.component("titelCenterText", {
    templateUrl: "components/titel-center-text.html",
    controller: "titelCenterTextController",
    bindings: {
        titel: "@",
        text: "@"
    }

});

app.controller("titelCenterTextController", function () {

});