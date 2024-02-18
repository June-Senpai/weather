const formatDayOfMonth = (dateString) => {
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

  // Return the formatted day string
  return dayString;
};

export { formatDayOfMonth };
