/* ===========================================================================
	Prepos Prepend Statements (for use on PC)
	========================================================================== *///@prepros-prepend jquery.functions.js
/* **********************************************
     Begin jquery.functions.js
********************************************** */jQuery(document).ready(function(e){var t=e("input[type=text], input[type=email], textarea, input.header-search");t.focus(function(e){e.target.value===e.target.defaultValue&&(e.target.value="")});t.blur(function(e){e.target.value===""&&(e.target.value=e.target.defaultValue)});e(".file-structure").magnificPopup({delegate:"a",type:"image",image:{titleSrc:"rel"},gallery:{enabled:!0,navigateByImgClick:!0}})});