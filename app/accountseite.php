<?php

session_start();
require_once  "database_connection.php";

?>

<!DOCTYPE html>
<html lang="de" ng-app="yogaparty">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>yogaparty</title>
    <link rel="icon" href="resources/icons/bdl.ico">

    <link rel="stylesheet" href="vendor/material-icons-2.2.0/material-icons.css">
    <link rel="stylesheet" href="vendor/roboto/roboto.css">

    <link rel="stylesheet" href="vendor/angular-material-1.1.7/angular-material.min.css">

    <link rel="stylesheet" href="app.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="vendor/mCustomScrollbar/mCustomScrollBar.min.css">
    <link rel="stylesheet" href="vendor/css/bootstrap.min.css">

    <script src="vendor/jquery-3.2.1/jquery.min.js"></script>
    <script src="vendor/moment.js-2.21.0/moment.min.js"></script>
    <script src="vendor/moment.js-2.21.0/locale/de.js" charset="UTF-8"></script>

    <script src="vendor/angularjs-1.6.9/angular.min.js"></script>
    <script src="vendor/angularjs-1.6.9/angular-resource.min.js"></script>
    <script src="vendor/angularjs-1.6.9/angular-messages.min.js"></script>
    <script src="vendor/angularjs-1.6.9/angular-sanitize.min.js"></script>
    <script src="vendor/angularjs-1.6.9/angular-animate.min.js"></script>
    <script src="vendor/angularjs-1.6.9/angular-aria.min.js"></script>
    <script src="vendor/angularjs-1.6.9/i18n/angular-locale_de.js"></script>

    <script src="vendor/tinycolor/tinycolor.js"></script>
    <script src="vendor/mdColorPicker/mdColorPicker.js"></script>
    <link rel="stylesheet" href="vendor/mdColorPicker/mdColorPicker.css">

    <script src="vendor/angular-material-1.1.7/angular-material.min.js"></script>
    <script src="vendor/angular-ui-router-1.0.8/angular-ui-router.min.js"></script>
    <script src="vendor/js/bootstrap.min.js"></script>

    <script src="vendor/mCustomScrollbar/mCustomScrollbar.concat.min.js"></script>

    <script src="app.js"></script>
    <script src="components/navigation.js"></script>
    <script src="components/bloecke/bildcentertext.js"></script>
    <script src="components/bloecke/titel-center-text.js"></script>
    <script src="components/profilseite/map.js"></script>
    <script src="components/bloecke/bildtextleft.js"></script>
    <script src="components/bloecke/bildtextright.js"></script>
    <script src="components/profilseite/testgelaende.js"></script>
    <script src="components/profilseite/slider.js"></script>
    <script src="components/profilseite/calendarcontact.js"></script>
    <script src="components/profilseite/userinfos.js"></script>
    <script src="components/profilseite/werbebereich.js"></script>
    <script src="components/accountseite/auswahl.js"></script>
    <script src="components/accountseite/blockkomponente.js"></script>
    <script src="components/accountseite/fileChooser.js"></script>
    <script src="components/accountseite/vorschau.js"></script>
    <script src="components/accountseite/bearbeiten-bereich.js"></script>
    <script src="components/accountseite/loeschen-bereich.js"></script>
    <script src="components/infoseite/info-bearbeiten.js"></script>
</head>
<body>
    <navigation></navigation>
    <blockkomponente></blockkomponente>
</body>
</html>
