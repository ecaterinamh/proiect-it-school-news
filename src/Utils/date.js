function getDate(date) {
  const currentDate = new Date(date);

  let year = currentDate.getFullYear();

  let month = currentDate.getMonth();

  month = month + 1;

  if (month < 10) {
    month = "0" + month;
  }

  let day = currentDate.getDate();

  if (day < 10) {
    day = "0" + day;
  }

  return `${day}/${month}/${year}`;
}

export { getDate };
