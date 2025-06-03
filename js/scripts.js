// This is calling a local file,
// but the syntax is pretty much the same as a remote URL
const getJSON = async () => {
  const data = await fetch("./data/flight_logs.json").then((response) =>
    response.json()
  );
  return data;
};

// We can make the anonymous callback function async
// then we can use await to get our array
document.addEventListener("DOMContentLoaded", async () => {
  const myArray = await getJSON();

  // [..myArray] makes a shallow copy so the original array is unchanged since .sort changes the original myArray
  let airlineData = [...myArray].sort((a, b) =>
    a.airline.localeCompare(b.airline)
  );
  console.log(airlineData);

  let arrivalAirport = [...myArray].sort((a, b) =>
    a.arrival_airport.localeCompare(b.arrival_airport)
  );
  console.log(arrivalAirport);

  let delta = myArray.filter((flight) => flight.airline == "Delta");
  console.log(delta);

  let reduceDelta = myArray.reduce((accumulator, flight) => {
    if (flight.airline === "Delta") {
      return [...accumulator, flight];
    } else {
      return accumulator;
    }
    // starts with an empty array (initial accumulator value)
  }, []);

  console.log(reduceDelta);
});