const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}\sw.js`)
      .then(register => {
        console.log("Worked", register);
      })
      .catch(err => {
        console.log("There was an err", err);
      });
  }
};

export default registerServiceWorker;
