const { format } = require("date-fns");

module.exports = (date, formatString = "yyyy-MM-dd") =>
  format(date, formatString);
