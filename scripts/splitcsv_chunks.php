<?php 
$inputFile = '838674.csv';
$outputFile = 'output';

$splitSize = 25000;

$in = fopen($inputFile, 'r');

$rowCount = 0;
$fileCount = 1;
while (!feof($in)) {
    if (($rowCount % $splitSize) == 0) {
        if ($rowCount > 0) {
            fclose($out);
        }
        $out = fopen($outputFile . $fileCount++ . '.csv', 'w');
    }
    $data = fgetcsv($in);
    if ($data)
        fputcsv($out, $data);
    $rowCount++;
}

fclose($out);
?>