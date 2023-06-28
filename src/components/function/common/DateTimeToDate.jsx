const DateTimeToDate = (dateTime) => {
  console.log(dateTime);
  try {
    const date = dateTime.split(" ")[0];
    return date;
  } catch (error) {
    return "";
  }
};

export default DateTimeToDate;
