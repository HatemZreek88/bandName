const findDay = (dateAsString) => {
  const myDate = new Date(dateAsString);

  // get the day as a number
  const dayAsNum = myDate.getDay();

  // convert dayAsNum to dayAsString
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(days[dayAsNum]);

  const dayAsString = days[dayAsNum];

  return dayAsString;
};

// MM/DD/YYYY
findDay("12/20/2016");
