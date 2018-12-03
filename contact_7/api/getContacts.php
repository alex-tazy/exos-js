<?php
    $a = array();
    $a[] = array
    (
        "id"        => 1,
        "prenom"    => "ALLIOD",
        "nom"       => "Sebastien"
    );
    $a[] = array
    (
        "id"        => 2,
        "prenom"    => "MANNEVILLE",
        "nom"       => "Fabien"
    );
    $a[] = array
    (
        "id"        => 3,
        "prenom"    => "DEHAUSSY",
        "nom"       => "Matthieu"
    );
    $a[] = array
    (
        "id"        => 4,
        "prenom"    => "PRIOU",
        "nom"       => "Eric"
    );

    header('Content-type: application/json');
    echo json_encode( $a );
?>