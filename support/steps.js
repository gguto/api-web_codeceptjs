module.exports = {
    getAll: function getSteps(dir, fileList) {
        const fs = require('fs');
        let files = fs.readdirSync(dir);
        fileList = fileList || [];

        files.forEach(function (file) {
            if (fs.statSync(dir + '/' + file).isDirectory()) {
                fileList = getSteps(dir + '/' + file, fileList);
            } else {
                if (!file.includes(".steps.js")) {
                    return;
                }
                fileList.push(dir + '/' + file);
            }
        });
        return fileList;

    }
}