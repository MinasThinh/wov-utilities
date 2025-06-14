import { setDS, getDS, analyzeDS } from './ds.js';
var players = document.querySelectorAll(".players button")
var properties = document.querySelector('.properties')

var database = []


function showproperties(playerID) {
    let player = players[playerID]
    let db = database[playerID]
    document.querySelector('.properties').style.width = (window.innerWidth/1.5 - parseInt(properties.style.left)/1.5) + "px"
    document.querySelector('.properties .id').textContent = "Player #" + (playerID + 1)
    document.querySelector('.properties .role').textContent = "Role: " + db["role"]
    document.querySelector('.properties .aura').textContent = "Aura: " + db["aura"]
    document.querySelector('.properties .team').textContent = "Team: " + db["team"]
    document.querySelector('.properties #editrole').style.left = (parseInt(document.querySelector('.properties').style.width) - 60) + "px"
    document.querySelector('.properties #editrole').style.top = -(-2.5 + document.querySelector('.properties .role').getBoundingClientRect().top) + "px"
    // document.querySelector('.properties #editaura').style.left = (parseInt(document.querySelector('.properties').style.width) - 60) + "px"
    // document.querySelector('.properties #editaura').style.top = -(-85 - document.querySelector('.properties .aura').getBoundingClientRect().top) + "px"
    // document.querySelector('.properties #editteam').style.left = (parseInt(document.querySelector('.properties').style.width) - 60) + "px"
    // document.querySelector('.properties #editteam').style.top = -(document.querySelector('.properties .team').getBoundingClientRect().top) + "px"
    alert(document.querySelector('.properties .aura').getBoundingClientRect().top)
    properties.style.visibility = 'visible';

}

for(let i = 0;i<players.length;++i) {
    players[i].addEventListener("click", function() {
        showproperties(i)
    })
    database[i] = {
        "role": "#",
        "aura": "#",
        "team": "#"
    }
}

window.onload = () => {
    console.log("window loading")
    const rect = players[3].getBoundingClientRect()
    properties.style.left = rect.left + rect.width + 30 + "px"
    properties.style.top = rect.top + "px"
};