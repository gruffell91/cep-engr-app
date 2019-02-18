// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var cepprework = {
  firstName: "Geoffrey",
  lastName: "Ruffell",
  jobTitle: "EU Guarantee Specialist",
  homeOffice: "Madrid",
  tellMeMore: "I consider myself a passionate and enthusiastic person. I’ve always been curious and   I have developed a wide range of interests including photography, music and technology.  Having had the opportunity of living in 4 different countries (Colombia, Spain, UK and Germany) and  across 6 different cities, to name some Bogota, London, Berlin and Madrid I Have learned to adapt to  new challenges and embrace changes.  I pay considerable attention to what is happening around me and I like to analyse unusual happenings.  Maybe it is the result of being an amateur photographer, so getting the perfect picture is something  important to me. On the other hand, music helps me to wind down and I like to abandon myself to rock  and roll chaotic notes and lose myself in Vallenato (a Colombian traditional music).  I can tell my passion for technology has been helped by the photography and music: I’ve always tried to  take photos using the ultimate tools and listen to music providing myself with the best experience with  high fidelity."
};

// using jQuery and the object above, display the information as the appropriate button is clicked
$("#firstName").click(function () {
  $("#firstName-text").text(cepprework.firstName);
  $("#firstName-text").toggle();
});
$("#lastName").click(function () {
  $("#lastName-text").text(cepprework.lastName);
  $("#lastName-text").toggle();
});
$("#jobTitle").click(function () {
  $("#jobTitle-text").text(cepprework.jobTitle);
  $("#jobTitle-text").toggle();
});
$("#homeOffice").click(function () {
  $("#homeOffice-text").text(cepprework.homeOffice);
  $("#homeOffice-text").toggle();
});
$("#tellMeMore").click(function() {
  $("#tellmeMore-text").text(cepprework.tellMeMore);
  $("#content-tellmeMore-text").toggle();
});