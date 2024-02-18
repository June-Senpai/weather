const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();

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

  const year = date.getFullYear();

  return `${dayString} ${month} ${year}`;
};

export { formatDate };
