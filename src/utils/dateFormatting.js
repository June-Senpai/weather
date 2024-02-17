// dateFormatting.js
const formatDate = (dateString) => {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Get the day of the month
  const day = date.getDate();

  // Convert the day to a string and add the appropriate suffix (st, nd, rd, or th)
  let dayString;
  if (day >= 11 && day <= 13) {
    dayString = `${day}th`;
  } else {
    switch (day % 10) {
      case 1:
        dayString = `${day}st`;
        break;
      case 2:
        dayString = `${day}nd`;
        break;
      case 3:
        dayString = `${day}rd`;
        break;
      default:
        dayString = `${day}th`;
    }
  }

  // Get the month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];

  // Get the year
  const year = date.getFullYear();

  // Return the formatted date string
  return `${dayString} ${month} ${year}`;
};

export { formatDate };
