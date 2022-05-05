var first_page = document.getElementsByClassName("first_page")[0];
var cygne = document.getElementsByClassName("cygne")[0];

cygne.onclick = function() {
	first_page.className =
  first_page.className.replace(/first_page--(\S*)/,'cygne');
  console.log('cygne');
};

