
const handleTimestamp = (dateString) => {
  
    let date = dateString ? new Date(dateString) : new Date();
  
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString));
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
  