const Helper = require('@codeceptjs/helper');

class FilesHelper extends Helper {

    async parseCSV(pathFile, delimiter = ';') {
        const csv = require('csvtojson');
        return await csv({
            delimiter: [delimiter],
            trim: true,
        }).fromFile(pathFile);
    }
}

module.exports = FilesHelper;
