const latestSol = document.getElementById("latest-sol");
const today = document.getElementById("current-date");
const latestTemperatureMin = document.getElementById("latest-temperature-min");
const latestTemperatureMax = document.getElementById("latest-temperature-max");
const latestHws = document.getElementById("latest-hws");

const solNumber = document.getElementById("sol-number");
const temperatureMin = document.getElementById("temperature-min");
const temperatureMax = document.getElementById("temperature-max");
const hws = document.getElementById("hws");

const solList = document.getElementById("sol-list");
const currentDate = new Date().toLocaleDateString();
console.log(currentDate);

import {API_KEY} from './env.js';

async function fetchInSightData() {
  const response = await fetch(
    `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`
  );
  const data = await response.json();
  const currentSol = data.sol_keys[6];

  const sols = await { ...data };
  delete sols.sol_keys;
  delete sols.validity_checks;

  for (let n in sols) {
    let div = document.createElement("div");
    let sol = document.createElement("h2");
    let mn = document.createElement("p");
    let mx = document.createElement("p");

    div.className = "sol";

    sol.innerHTML = `Sol: ${n}`;
    mn.innerHTML = `High: ${sols[n].AT.mn}°F`;
    mx.innerHTML = `Low: ${sols[n].AT.mx}°F`;

    solList.appendChild(div);
    div.appendChild(sol);
    div.appendChild(mn);
    div.appendChild(mx);
  }
  latestSol.innerHTML = `Sol ${currentSol}`;
  today.innerHTML = `${currentDate}`;
  latestTemperatureMin.innerHTML = `Min temp: ${sols[currentSol].AT.mn}°F`;
  latestTemperatureMax.innerHTML = `Max temp: ${sols[currentSol].AT.mx}°F`;
  latestHws.innerHTML = `Horizontal wind speed (av): ${sols[currentSol].HWS.av} m/s`;
}

fetchInSightData();
