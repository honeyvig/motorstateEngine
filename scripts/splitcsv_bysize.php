<?php 
$part = 1;

$maxSize = 50;//50 Mb

$fopen = fopen('838674.csv','r') or die ('ERROR');

while (($line = fgetcsv($fopen, 10000, ";")) !== FALSE) {

    $ftowrite = fopen("Part_$part.csv",'a');

    fputcsv($ftowrite,$line);

    clearstatcache();

    $size = filesize ( "review_p$part.csv" ) / 1000000;

    if ($size  > $maxSize) {

        fclose($ftowrite);

        $part++;

    }
}
?>