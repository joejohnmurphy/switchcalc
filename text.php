<?php
$sent = mail('7084664959@txt.att.net,6303100850@txt.att.net', 'I need help!', 'Hi, Mom and Dad - will you help me? Owen', 'From: owen@switchcalc.com');
if ($sent)
    {   
    ?>
<script type="text/javascript">
window.location = "http://www.switchcalc.com/home.html";
</script>      
    <?php
    }
?>