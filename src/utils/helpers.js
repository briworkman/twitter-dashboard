export const format = (date) => {
  // eslint-disable-next-line
  var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!date || !date.match(pattern)) {
    return null;
  }
  return date.replace(pattern, '$2/$3/$1');
};

var MILLISECONDS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365;

export const calcAge = (date) => {
  var date_array = date.split('-');
  var years_elapsed =
    (new Date() - new Date(date_array[0], date_array[1], date_array[2])) /
    MILLISECONDS_IN_A_YEAR;
  return Math.floor(years_elapsed);
};

export const sortDates = (date) => {
  date.sort(function (a, b) {
    var c = new Date(a.release_date);
    var d = new Date(b.release_date);
    return d - c;
  });
};

export const findYear = (date) => {
  var date_array = date.split('-');
  var year = date_array[0];
  return Math.floor(year);
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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1275 },
    items: 7,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1275, min: 464 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default responsive;
