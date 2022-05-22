const I = actor();

module.exports = {
    async getFileAsJson(filePath) {
        return await I.parseCSV(filePath);
    }
}



