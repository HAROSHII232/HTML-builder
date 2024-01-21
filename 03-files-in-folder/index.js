const path = require('path');
const fs = require('fs');
const secretFolderPath = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolderPath, { withFileTypes: true }, (error, files) => {
  if (error) console.log(error);

  files.forEach((file) => {
    const pathFile = path.join(secretFolderPath, file.name);

    fs.stat(pathFile, (error, stats) => {
      if (error) console.log(error);

      if (stats.isFile()) {
        const fileName = path.basename(pathFile, path.extname(pathFile));
        const fileExtname = path.extname(pathFile).slice(1);
        const fileSize = stats.size;

        console.log(`${fileName} - ${fileExtname} - ${fileSize / 1000}kb`);
      }
    });
  });
});
