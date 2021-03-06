"use strict";

app.component("infoBearbeiten", {
    templateUrl: "components/infoseite/info-bearbeiten.html",
    controller: "InfoBearbeitenController",
    bindings: {
        vname: "@",
        nname: "@",
        email: "@",
        telefonnummer: "@?",
        plz: "@",
        ort: "@",
        land: "@",
        passwort: "@",
        passwortWH: "@",
        adresse: "@",
        adresszusatz: "@",
        kurzbeschreibung: "@",
        profilbildpfad: "@",
        profilbildname: "@"
    }
});


app.controller("InfoBearbeitenController", function ($http, $log, $mdToast) {

    let $ctrl = this;
    $ctrl.file;

    this.$onInit = function () {
        $ctrl.entsperren = true;
        $http.post("profil_bearbeiten_GET.php", {}).then(function (data) {
            $log.debug(data.data);
            $ctrl.getRequest = data.data;
            if($ctrl.getRequest == null){
                $ctrl.entsperren = false;
            }
            //console.log($ctrl.getRequest);
        });

        angular.element(document.getElementsByClassName("form-control"))[0].addEventListener("change", function (e) {
            if (e.target.files.length) {
                if (e.target.files[0].type.match("image/.+")) {
                    $ctrl.file = e.target.files;
                    console.log($ctrl.file);
                    let reader = new FileReader();
                    reader.readAsDataURL($ctrl.file[0]);
                    //$ctrl.file = reader.readAsDataURL($ctrl.file[0]);
                    //$log.debug(reader);
                    reader.addEventListener("load", function () {
                        //$log.debug(reader);
                        if(document.getElementsByClassName("pb-image")) {
                            document.getElementsByClassName("pb-image")[0].src = reader.result;
                        }
                        if(document.getElementsByClassName("card-bkimg")) {
                            document.getElementsByClassName("card-bkimg")[0].src = reader.result;
                        }
                    });
                }
            }


        });

        $ctrl.changepicture = function () {
            angular.element(document.getElementsByClassName("form-control"))[0].click();

        }
    };

    $ctrl.ueberpruefen = function () {
        if ($ctrl.formular.$valid) {
            if ($ctrl.getRequest.passwort === $ctrl.getRequest.passwortWH) {
                $ctrl.edit();
                window.location.href = "profilseite.php";
            } else if ($ctrl.getRequest.passwortWH === "") {
                $ctrl.edit();
                window.location.href = "profilseite.php";
            } else {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Passwort stimmt nicht überein')
                        .position('bottom')
                        .hideDelay(3000)
                );
            }
        } else {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Formatierung')
                    .position('bottom')
                    .hideDelay(3000)
            );

        }
    };

    $ctrl.edit = function () {
        let that = this;
        that.fd = new FormData();
        if($ctrl.file){
            that.fd.append("file", $ctrl.file[0]);
        }//else{
            //that.fd.append("file", null);
        //}
        that.fd.append("vorname", $ctrl.getRequest.vorname);
        that.fd.append("nachname", $ctrl.getRequest.nachname);
        that.fd.append("email", $ctrl.getRequest.email);
        that.fd.append("telefonnummer", $ctrl.getRequest.telefonnummer);
        that.fd.append("passwort", $ctrl.getRequest.passwort);
        that.fd.append("passwortWH", $ctrl.getRequest.passwortWH);
        that.fd.append("adresse", $ctrl.getRequest.adresse);
        that.fd.append("adresszusatz", $ctrl.getRequest.adresszusatz);
        that.fd.append("plz", $ctrl.getRequest.plz);
        that.fd.append("ort", $ctrl.getRequest.ort);
        that.fd.append("land", $ctrl.getRequest.land);
        that.fd.append("kurzbeschreibung", $ctrl.getRequest.kurzbeschreibung)
        that.fd.append("profilbildname", $ctrl.getRequest.profilbildname);
        that.fd.append("profilbildpfad", $ctrl.getRequest.profilbildpfad);
        //console.log("typisch andy");
        //console.log(that.fd);
        $http({
            method: 'post',
            url: 'profil_bearbeiten_UPDATE.php',
            data: that.fd,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).then(function (response) {
                $log.debug(response);
                window.location.href = "profilseite.php";
            }
        );
    };

});
