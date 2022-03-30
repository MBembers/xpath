<?php
$is_woj = false;
if (isset($_GET["woj"]))
    $is_woj = true;
$number = -1;
if (isset($_GET['number']))
    $number = $_GET["number"];
$xml = simplexml_load_file("terc.xml");
if ($is_woj == false) {
    $response = $xml->xpath("catalog/row[NAZWA_DOD='województwo']/NAZWA");
} else if ($number != -1) {
    $response = $xml->xpath("catalog/row[WOJ=$number and (RODZ=1 or RODZ=4)]/NAZWA");
} else {
    echo "error";
    die();
}
echo json_encode($response);
