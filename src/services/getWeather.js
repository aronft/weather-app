const api_key = '7bc08a977e60d1f99d819cac4cf1e36d'
export const getWeather = async(lat, lon) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`).then(response => response.json())
  return data
}