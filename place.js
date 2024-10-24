// Set the last modified date in the footer
document.getElementById("last-modified").textContent = `Last modified: ${document.lastModified}`;

/**
 * Calculates the wind chill based on temperature and wind speed.
 * The formula applies only if the temperature is 10°C or lower
 * and the wind speed is above 4.8 km/h.
 * 
 * @param {number} temp - The temperature in degrees Celsius.
 * @param {number} windSpeed - The wind speed in km/h.
 * @returns {string} The calculated wind chill in degrees Celsius, or "N/A" if conditions are not met.
 */
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
        return `${windChill}°C`;
    } else {
        return "N/A";
    }
}

// Example usage of the calculateWindChill function
const temp = 10; 
const windSpeed = 5; 
document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
