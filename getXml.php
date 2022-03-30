<?php
$is_woj = false;
if (isset($_GET["woj"]))
    $is_woj = true;
$woj_name = "";
if (isset($_GET['name']))
    $woj_name = $_GET["name"];

$xml = simplexml_load_file("terc.xml");
if ($is_woj == false) {
    $response = $xml->xpath('//NAZWA_DOD[text()="województwo"]/ancestor::*/NAZWA/text()');
} else if ($woj_name != "") {
    $response = $xml->xpath('//NAZWA_DOD[contains(text(), "miej")]/ancestor::*/WOJ[text()=//NAZWA[text()="' . $woj_name . '"]/ancestor::*/WOJ/text()]/ancestor::*/NAZWA/text()');
} else {
    echo "error";
    die();
}
echo json_encode($response);
