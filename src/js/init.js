// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var cepprework = {
  firstName: "Geoffrey",
  lastName: "Ruffell",
  jobTitle: "EU Guarantee Specialist",
  homeOffice: "Madrid"
};

// using jQuery and the object above, display the information as the appropriate button is clicked
$("#firstName").click(function() {
  $("#firstName-text").text(cepprework.firstName);
  $("#firstName-text").toggle();
});
$("#lastName").click(function() {
  $("#lastName-text").text(cepprework.lastName);
  $("#lastName-text").toggle();
});
$("#jobTitle").click(function() {
  $("#jobTitle-text").text(cepprework.jobTitle);
  $("#jobTitle-text").toggle();
});
$("#homeOffice").click(function() {
  $("#homeOffice-text").text(cepprework.homeOffice);
  $("#homeOffice-text").toggle();
});



