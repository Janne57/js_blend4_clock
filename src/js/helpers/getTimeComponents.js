const timeZone = new Date().getTimezoneOffset()/60*(-1);

export function getTimeComponents(time) {
    const hours = Math.floor((time / 1000 / 60 / 60) % 24) + timeZone;
    const minutes = Math.floor(time / 1000 / 60) % 60;
    const seconds = Math.floor(time / 1000) % 60;
  
    return {
      hours,
      minutes,
      seconds,
    };
  }