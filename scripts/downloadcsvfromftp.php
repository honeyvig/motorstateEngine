<?php 
$source = "838674.csv";
	$target = fopen("838674.csv","w");
	$conn = ftp_connect("ftp.motorstateftp.com") or die("Could not connect");
	
	ftp_login($conn,"838674@motorstateftp.com","GjvfXLkQ4E81");
	ftp_fget($conn,$target,$source,FTP_ASCII);
	
	echo "file downloaded. \n";
	
	function jj_readcsv($filename, $header = false)
	{
    $handle = fopen($filename, "r");
    echo '<div class="table-responsive"><table class="table table-sm table-striped table-bordered table-hover">';
    //display header row if true
    if ($header) {
        $csvcontents = fgetcsv($handle);
        echo '<tr>';
        foreach ($csvcontents as $headercolumn) {
            echo "<th>$headercolumn</th>";
        }
        echo '</tr>';
    }
    // displaying contents
    while ($csvcontents = fgetcsv($handle)) {
        echo '<tr>';
        foreach ($csvcontents as $column) {
            echo "<td style='width:1px; white-space:nowrap;'>$column</td>";
        }
        echo '</tr>';
    }
    echo '</table></div>';
    fclose($handle);
}
?>