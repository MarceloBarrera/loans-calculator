const fetchLimitations = () => {
  return window
    .fetch("http://www.mocky.io/v2/5d4aa9e93300006f000f5ea9", {
      method: "GET",
    })
    .then(async (response) => {
      const bodyData = await response.json();
      if (response.ok) {
        return bodyData;
      } else {
        return Promise.reject(new Error("something wrong with the API"));
      }
    });
};

export default fetchLimitations;
