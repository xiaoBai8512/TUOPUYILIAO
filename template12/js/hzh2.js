if (!document.phpAds_used) document.phpAds_used = ',';
phpAds_random = new String (Math.random()); phpAds_random = phpAds_random.substring(2,11);

document.write ("<" + "script language='JavaScript' type='text/javascript' src='");
document.write ("http://vd.hc3i.cn/adjs.php?n=" + phpAds_random);
document.write ("&amp;what=zone:81");
document.write ("&amp;exclude=" + document.phpAds_used);
if (document.referrer)
document.write ("&amp;referer=" + escape(document.referrer));
document.write ("'><" + "/script>");
