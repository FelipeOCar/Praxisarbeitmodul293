
  
function openMenu(evt, menuName) {
  // Get all elements with class="menu-section" and hide them
  var menuSections = document.getElementsByClassName("menu-section");
  for (var i = 0; i < menuSections.length; i++) {
      menuSections[i].style.display = "none";
  }

  // Get all elements with class="tab-link" and remove the "active" class
  var tabLinks = document.getElementsByClassName("tab-link");
  for (var j = 0; j < tabLinks.length; j++) {
      tabLinks[j].classList.remove("active");
  }

  // Show the selected menu section and add the "active" class to the button that opened it
  var selectedSection = document.getElementById(menuName);
  if (selectedSection) {
      selectedSection.style.display = "block";
  }
  
  evt.currentTarget.classList.add("active");
}

