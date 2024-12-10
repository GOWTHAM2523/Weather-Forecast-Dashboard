export function getBackgroundImage(description) {
    const desc = description.toLowerCase();
  
    // Mapping descriptions to background images
    if (desc.includes('clear sky')) {
      return '/assets/img/clear-sky.jpg';
    } else if (desc.includes('few clouds')) {
      return '/assets/img/few-clouds.jpg';
    } else if (desc.includes('scattered clouds')) {
      return '/assets/img/scattered-clouds.jpg';
    } else if (desc.includes('broken clouds')) {
      return '/assets/img/broken-clouds.jpg';
    } else if (desc.includes('shower rain')) {
      return '/assets/img/shower-rain.jpg';
    } else if (desc.includes('rain')) {
      return '/assets/img/rain.jpg';
    } else if (desc.includes('thunderstorm')) {
      return '/assets/img/thunderstorm.jpg';
    } else if (desc.includes('snow')) {
      return '/assets/img/snow.jpg';
    } else if (desc.includes('mist')) {
      return '/assets/img/mist.jpg';
    } else if (desc.includes('fog')) {
      return '/assets/img/fog.jpg';
    } else if (desc.includes('haze')) {
      return '/assets/img/haze.jpg';
    } else if (desc.includes('dust')) {
      return '/assets/img/dust.jpg';
    } else if (desc.includes('sandstorm')) {
      return '/assets/img/sandstorm.jpg';
    } else if (desc.includes('squalls')) {
      return '/assets/img/squalls.jpg';
    } else if (desc.includes('tornado')) {
      return '/assets/img/tornado.jpg';
    } else if (desc.includes('drizzle')) {
      return '/assets/img/drizzle.jpg';
    } else if (desc.includes('light rain')) {
      return '/assets/img/light-rain.jpg';
    } else if (desc.includes('heavy rain')) {
      return '/assets/img/heavy-rain.jpg';
    } else if (desc.includes('freezing rain')) {
      return '/assets/img/freezing-rain.jpg';
    } else if (desc.includes('light snow')) {
      return '/assets/img/light-snow.jpg';
    } else if (desc.includes('heavy snow')) {
      return '/assets/img/heavy-snow.jpg';
    } else if (desc.includes('partly cloudy')) {
      return '/assets/img/partly-cloudy.jpg';
    } else if (desc.includes('overcast clouds')) {
      return '/assets/img/overcast-clouds.jpg';
    } else if (desc.includes('cloudy')) {
      return '/assets/img/cloudy.jpg';
    } else {
      return '/assets/img/default-weather.jpg'; // Fallback image
    }
  }
  