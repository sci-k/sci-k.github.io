/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function myFunction(this_div) {
  var dots = document.getElementById(this_div+"_dots");
  var moreText = document.getElementById(this_div+"_more");
  var btnText = document.getElementById(this_div+"_myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'Read more';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = 'Read less';
    moreText.style.display = "inline";
  }
}



$(document).ready(function() {

  if(window.location.href.indexOf('#call-for-papers') != -1) {
    $('#call-for-papers').modal('show');
  }

});