import clear from "../assets/icons/clear.png";
import cloudy from "../assets/icons/cloudy.png";
import freezingRain from "../assets/icons/freezing-rain.png";
import freezingSnow from "../assets/icons/freezing-snow.png";
import heavyRain from "../assets/icons/heavy-rain.png";
import heavySnow from "../assets/icons/heavy-snow.png";
import heavySnowNight from "../assets/icons/heavy-snow-night.png";
import lightRain from "../assets/icons/light-rain.png";
import lightSnow from "../assets/icons/light-snow.png";
import mist from "../assets/icons/mist.png";
import moderateRain from "../assets/icons/moderate-rain.png";
import moderateRainDay from "../assets/icons/moderate-rain-day.png";
import moderateRainNight from "../assets/icons/moderate-rain-night.png";
import partlyCloudy from "../assets/icons/partly-cloudy.png";
import partlyCloudyNight from "../assets/icons/partly-cloudy-night.png";
import patchyRain from "../assets/icons/patchy-rain.png";
import patchyRainNight from "../assets/icons/patchy-rain-night.png";
import rain from "../assets/icons/rain.png";
import rainNight from "../assets/icons/rain-night.png";
import snow from "../assets/icons/snow.png";
import snowDay from "../assets/icons/snow-day.png";
import snowNight from "../assets/icons/snow-night.png";
import sunny from "../assets/icons/sunny.png";
import thunder from "../assets/icons/thunder.png";
import thunderNight from "../assets/icons/thunder-night.png";
import thunderRain from "../assets/icons/thunder-rain.png";
import thunderRainDay from "../assets/icons/thunder-rain-day.png";
import thunderRainNight from "../assets/icons/thunder-rain-night.png";
import torrentialRain from "../assets/icons/clear.png";
import torrentialRainNight from "../assets/icons/torrential-rain-night.png";

const weatherIcons = (time, weather) => {
  switch (weather) {
    case 1000: {
      if (time === "day") {
        return sunny;
      } else {
        return clear;
      }
    }
    case 1003: {
      if (time === "day") {
        return partlyCloudy;
      } else {
        return partlyCloudyNight;
      }
    }
    case 1009:
    case 1006: {
      return cloudy;
    }
    case 1063: {
      if (time === "day") {
        return patchyRain;
      } else {
        return patchyRainNight;
      }
    }
    case 1087: {
      if (time === "day") {
        return thunder;
      } else {
        return thunderNight;
      }
    }
    case 1147:
    case 1135:
    case 1030: {
      return mist;
    }
    case 1195:
    case 1171: {
      return heavyRain;
    }
    case 1198:
    case 1168: {
      return freezingRain;
    }
    case 1204:
    case 1183:
    case 1153:
    case 1150:
    case 1072: {
      return lightRain;
    }
    case 1213: {
      return lightSnow;
    }
    case 1237:
    case 1117:
    case 1114: {
      return freezingSnow;
    }
    case 1246:
    case 1192: {
      if (time === "day") {
        return torrentialRain;
      } else {
        return torrentialRainNight;
      }
    }
    case 1258:
    case 1222:
    case 1216: {
      if (time === "day") {
        return heavySnow;
      } else {
        return heavySnowNight;
      }
    }
    case 1261:
    case 1249:
    case 1240:
    case 1180:
    case 1069: {
      if (time === "day") {
        return rain;
      } else {
        return rainNight;
      }
    }
    case 1225:
    case 1219: {
      return snow;
    }
    case 1255:
    case 1210:
    case 1066: {
      if (time === "day") {
        return snowDay;
      } else {
        return snowNight;
      }
    }
    case 1207:
    case 1201:
    case 1189: {
      return moderateRain;
    }
    case 1264:
    case 1252:
    case 1243:
    case 1186: {
      if (time === "day") {
        return moderateRainDay;
      } else {
        return moderateRainNight;
      }
    }
    case 1282:
    case 1276: {
      return thunderRain;
    }
    case 1279:
    case 1273: {
      if (time === "day") {
        return thunderRainDay;
      } else {
        return thunderRainNight;
      }
    }
    default: {
      if (time === "day") {
        return partlyCloudy;
      } else {
        return partlyCloudyNight;
      }
    }
  }
};

export default weatherIcons;
