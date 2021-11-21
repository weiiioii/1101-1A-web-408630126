function change(index) {
  var hero_page = document.querySelector("#hero_page");
  var resume_page = document.querySelector("#resume_page");
  var gallery_page = document.querySelector("#gallery_page");
  console.log("hero_page", hero_page);
  console.log("resume_page", resume_page);
  console.log("gallery_page", gallery_page);
  switch (index) {
    case 1:
      hero_page.style.display = "inline";
      resume_page.style.display = "none";
      gallery_page.style.display = "none";
      break;
    case 2:
      hero_page.style.display = "none";
      resume_page.style.display = "inline";
      gallery_page.style.display = "none";
      break;
    case 3:
      hero_page.style.display = "none";
      resume_page.style.display = "none";
      gallery_page.style.display = "inline";
      break;
  }
}
change(1);
