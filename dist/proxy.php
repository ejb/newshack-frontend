<?php
header('Content-Type: application/json');


    $url = 'http://ec2-54-72-215-27.eu-west-1.compute.amazonaws.com/api/public/random/index/round/' . $_GET["x"];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // curl_setopt($ch, CURLOPT_PROXY, 'http://proxy.dowjones.net:80');
    $ukr_data_raw = curl_exec($ch);
    curl_close($ch);
    echo $ukr_data_raw;        
    ?>