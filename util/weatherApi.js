const searchString = (query) =>
  `http://api.weatherapi.com/v1/search.json?key=48c5b08c490f422188655412211910&q=${query}`;
// `http://api.weatherapi.com/v1/search.json?key=48c5b08c490f422188655412211910&q=${query}&country_code=${lang}`;

const weatherString = (query) =>
  `http://api.weatherapi.com/v1/current.json?key=48c5b08c490f422188655412211910&q=${query}&aqi=no`;

export async function getWeatherData({ query, lang }) {
  let data;
  if (lang) {
    let locale = lang.split("-");
    data = await fetch(`${searchString(query)}&country_code=${locale[1]}`).then(
      (res) => res.json()
    );
  } else {
    data = await fetch(searchString(query)).then((res) => res.json());
  }
  return data;
}

// get current weather by city name
export async function getWeatherByCity({ query, lang }) {
  let data;
  if (lang) {
    let locale = lang.split("-");
    data = await fetch(`${weatherString(query)}&lang=${locale[0]}`).then((res) =>
      res.json()
    );
  } else {
    data = await fetch(searchString(query)).then((res) => res.json());
  }

  return data;
}
