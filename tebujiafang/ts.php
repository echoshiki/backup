<?php
$id=mysql_connect("10.1.3.4:3306","tebujiafang","tebujiafang888")or die(mysql_error());
$ok=mysql_select_db("tebujiafang",$id)or die(mysql_error());
if($ok){
        echo "ok,选择数据库成功！";
        }
else    {
        echo "OH选择数据库失败，请确认数据库是否存在。";
        }
?>