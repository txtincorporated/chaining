
$('li[id!="one"]').hide().delay(500).fadeIn(1400); //hide all li elements except the one with id #one and then fade them back in over 1.4 seconds
$('li:first-child').addClass('next');//Add class of "next" to the first descendant of each li element (in this case just the <em> element in li #one)
$('li.priority').addClass('highlight');//Reassign elements with class of .priority to class of .highlight
