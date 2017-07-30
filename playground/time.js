var moment = require('moment');

//Jan 1st 1970 00:00:10 am

var date = moment();
date.add(100, 'year').subtract(8, 'months');
console.log(date.format('h:mm a'))