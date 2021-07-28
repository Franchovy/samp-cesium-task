
/// Datestring formatter from JS Date object to customized string.
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