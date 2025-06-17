/** 
 * @fileoverview Module de gestion de la météo
 * 
 * Ce module gère la récupération et l'affichage des données météorologiques
 * via l'API OpenWeatherMap.
 * Il charge la configuration depuis un fichier JSON et met à jour
 * régulièrement les données météo. 
 */

/**
 * @typedef {Object} Config
 * @property {string} city - Nom de la ville
 * @property {string} country - Code pays au format ISO (ex: FR)
 */

/**
 * Configuration initiale de l'application
 * @type {Config}
 */
const config = {
  city: "",
  country: ""
};

/**
 * Intervalle de rafraîchissement des données météo en millisecondes
 * @constant {number}
 * @default 3600000 - Correspond à 1 heure
 */
const refeshInterval = 3600000;

/**
 * Récupère les données météorologiques actuelles depuis l'API OpenWeatherMap
 * et met à jour l'interface utilisateur avec les nouvelles données.
 * 
 * @async
 * @function fetchWeather
 * @throws {Error} Lance une erreur si la requête API échoue
 */
function fetchWeather() {
  /**
   * Clé d'API pour OpenWeatherMap
   * @constant {string}
   */
  const apiKey = "b190a0605344cc4f3af08d0dd473dd25";
  
  /**
   * URL de l'API avec les paramètres de requête
   * @constant {string}
   */
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${config.city},${config.country}&appid=${apiKey}&units=metric&lang=fr`;

  console.log("Rafraîchissement météo à", new Date().toLocaleTimeString());

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('feels-like').textContent = `${Math.round(data.main.feels_like)}°C`;
      document.getElementById('humidity').textContent = `${data.main.humidity}%`;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById('weather-icon').src = iconUrl;
      document.getElementById('weather-icon').alt = data.weather[0].description;
      //affichage de l'objet data reçu dans la console
      console.log(data)
    })
    .catch(error => console.error('Erreur API météo :', error));
}

/**
 * Charge la configuration depuis le fichier conf.json
 * et initialise le système de mise à jour météo
 * 
 * @function
 * @async
 * @throws {Error} Lance une erreur si le chargement de la configuration échoue
 * 
 * @example
 * // Le code suivant est exécuté automatiquement au chargement du script
 * fetch('conf.json')
 *   .then(data => {
 *     // Configuration chargée et météo initialisée
 *   });
 */
fetch('conf.json')
  .then(response => response.json())
  .then(data => {
    config.city = data.city;
    config.country = data.country;
    fetchWeather();
    setInterval(fetchWeather, refeshInterval);
  })
  .catch(error => console.error('Erreur chargement config :', error));