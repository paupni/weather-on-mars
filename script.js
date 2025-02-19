const latestSol = document.getElementById("latest-sol");
const latestTemperatureMin = document.getElementById("latest-temperature-min");
const latestTemperatureMax = document.getElementById("latest-temperature-max");
const latestHws = document.getElementById("latest-hws");

const solNumber = document.getElementById("sol-number");
const temperatureMin = document.getElementById("temperature-min");
const temperatureMax = document.getElementById("temperature-max");
const hws = document.getElementById("hws");

async function fetchInSightdata() {
  const response = await fetch(
    `https://api.nasa.gov/insight_weather/?api_key=&feedtype=json&ver=1.0`
  );
  const data = await response.json();
  console.log(data);

  latestSol.innerHTML = `Today Sol: ${data.sol_keys[6]}`;
  latestTemperatureMin.innerHTML = `Min temp: ${
    data[Object.getOwnPropertyNames(data)[6]].AT.mn
  }`;
  latestTemperatureMax.innerHTML = `Max temp: ${
    data[Object.getOwnPropertyNames(data)[6]].AT.mx
  }`;
  latestHws.innerHTML = `Horizontal wind speed (av): ${
    data[Object.getOwnPropertyNames(data)[6]].HWS.av
  }`;

  // for all week
  solNumber.innerHTML = `Sol ${Object.getOwnPropertyNames(data)[6]}`;
  temperatureMin.innerHTML = `Min temp: ${
    data[Object.getOwnPropertyNames(data)[6]].AT.mn
  }`;
  temperatureMax.innerHTML = `Max temp: ${
    data[Object.getOwnPropertyNames(data)[6]].AT.mx
  }`;
  hws.innerHTML = `Horizontal wind speed (av): ${
    data[Object.getOwnPropertyNames(data)[6]].HWS.av
  }`;
}

fetchInSightdata();
