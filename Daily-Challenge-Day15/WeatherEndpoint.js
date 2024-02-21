const http = require('http');
const url = require('url');
const cities = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Sydney", lat: -33.8651, lng: 151.2099 },
  { name: "Rome", lat: 41.9028, lng: 12.4964 },
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Rabat", lat: 34.0209, lng: -6.8416 },
];
async function fetchTemp(cityName) {
  const city = cities.find((c) => c.name.toLowerCase() === cityName.toLowerCase());
  if (!city) {
    return null;
  }
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.current_weather.temperature;
  } catch (error) {
    console.log('Failed', error);
    return null;
  };
};
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;
  if (path === "/weather" && query.cityName) {
    const cityName = query.cityName;
    fetchTemp(cityName)
      .then((temperature) => {
        if (temperature !== null) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ temperature }));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not found");
        }
      });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});