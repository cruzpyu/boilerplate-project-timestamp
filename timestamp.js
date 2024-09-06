
const handleTimestamp = (dateString) => {
  
    let date;

    if (!dateString) {

      date = new Date();
    } else if (!isNaN(dateString)) {

      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  
    if (date.toString() === 'Invalid Date') {
      return { error: 'Invalid Date' };
    }
  
    return {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
  }
  
  module.exports = handleTimestamp;
  