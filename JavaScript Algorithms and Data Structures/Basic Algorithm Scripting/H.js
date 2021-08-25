function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  let truncateStr = "";
  truncateStr += str.slice(0, num);
  truncateStr += "...";
  console.log(truncateStr);
  return truncateStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
