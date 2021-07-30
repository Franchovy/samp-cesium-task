/**
 * Customized date to string formatter
 * @parameter t - JS Date object
 * @return string with format: "[dd] [shortMonthString] [yyyy] at [hh]:[mm]:[ss]"
 */ 
export default function dateStringFormatter(t) {
  const date = ("0" + t.getDate()).slice(-2);
  const monthNo = ("0" + (t.getMonth() + 1)).slice(-2);
  const monthStr = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ][monthNo - 1];
  const year = t.getFullYear();
  const hours = ("0" + t.getHours()).slice(-2);
  const minutes = ("0" + t.getMinutes()).slice(-2);
  const seconds = ("0" + t.getSeconds()).slice(-2);

  return `${date} ${monthStr} ${year} at ${hours}:${minutes}:${seconds}`;
}
