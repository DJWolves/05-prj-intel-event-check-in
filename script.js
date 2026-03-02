
//get all elements
const form = document.getElementById("checkInForm");
const attendee = document.getElementById("attendeeName");
const team = document.getElementById("teamSelect");



///attendance number

let count = 0;
const maxCount = 50;



//form submission stuff
form.addEventListener("submit", function (e) {
  e.preventDefault();


//form values
  const name = attendee.value;
  const selectedTeam = team.value;
  const teamName = team.selectedOptions[0].text;

  console.log(name, teamName);



  //increment count
count++
console.log("total checkins", count);



//progressbar updater
const percentage = Math.round((count / maxCount) * 100) + "%";
console.log('Progress:', percentage);


//team counter
const teamCounter = document.getElementById(selectedTeam + "Count");
 teamCounter.textContent = parseInt(teamCounter.textContent) +1;


const message = `Welcome, ${name} from ${teamName}`;
console.log(message);


form.reset();
});





