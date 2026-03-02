//get all elements
const form = document.getElementById("checkInForm");
const attendee = document.getElementById("attendeeName");
const team = document.getElementById("teamSelect");
const progressBar = document.getElementById("progressBar");
const attendeeCount = document.getElementById("attendeeCount");
const greeting = document.getElementById("greeting");

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
  count++;
  console.log("total checkins", count);

  //progressbar updater
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log("Progress:", percentage);
  progressBar.style.width = percentage;
  attendeeCount.textContent = count;

  //team counter
  const teamCounter = document.getElementById(selectedTeam + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //check if we reached max count
  if (count === maxCount) {
    const waterCount = parseInt(document.getElementById("waterCount").textContent);
    const zeroCount = parseInt(document.getElementById("zeroCount").textContent);
    const powerCount = parseInt(document.getElementById("powerCount").textContent);

    let maxTeam = "Team Water Wise";
    let maxTeamCount = waterCount;

    if (zeroCount > maxTeamCount) {
      maxTeam = "Team Net Zero";
      maxTeamCount = zeroCount;
    }

    if (powerCount > maxTeamCount) {
      maxTeam = "Team Renewables";
      maxTeamCount = powerCount;
    }

    const finalMessage = `Welcome, ${name} from ${teamName}! Event is full! ${maxTeam} had the most check-ins with ${maxTeamCount} people.`;
    greeting.textContent = finalMessage;
  } else {
    const message = `Welcome, ${name} from ${teamName}`;
    console.log(message);
    greeting.textContent = message;
  }

  form.reset();
});
