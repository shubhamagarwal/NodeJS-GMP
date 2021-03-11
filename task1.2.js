var fs = require('fs');
const CSVToJSON = require('csvtojson');
CSVToJSON()
  .fromFile('./csv/csvtojson.csv')
  .then((users) => {
    console.log(users);
    fs.writeFile('./csv/users.txt', JSON.stringify(users, null, 4), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON array is saved.");
    });
  })
  .catch((err) => {
    // log error if any
    console.log(err);
  });
