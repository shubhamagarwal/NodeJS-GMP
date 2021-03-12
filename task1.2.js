const fs = require('fs');
const CSVToJSON = require('csvtojson');

const readStream = fs.createReadStream('./csv/csvtojson.csv')
const writeStream = fs.createWriteStream('./csv/users.txt')

writeStream.on('error', err => {
    console.log('File write Error :: ', err)
})

// read line by line
CSVToJSON()
    .fromStream(readStream)
    .subscribe((json) => {
        return new Promise((resolve, reject) => {
            // create the object to write
            const objToWrite = {"book": json.Book, "author": json.Author, "price": json.Price}
            // add a new line to the string
            writeStream.write(JSON.stringify(objToWrite) + '\n')
            resolve();
        })
    }, onError, onComplete);

function onError(err) {
    console.log('CSV Error :: ', err)
}

function onComplete() {
    console.log('Operation Completed')
    writeStream.end()
}
