export const format = (date) => {
  var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!date || !date.match(pattern)) {
    return null;
  }
  return date.replace(pattern, '$2/$3/$1');
};

export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
