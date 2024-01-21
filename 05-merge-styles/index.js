const fs = require('fs');
const path = require('path');

const stylesfolderPath = path.join(__dirname, 'styles');
const distFolderPath = path.join(__dirname, 'project-dist');
const bundleFilePath = path.join(distFolderPath, 'bundle.css');

const writeStream = fs.createWriteStream(bundleFilePath, 'utf8');

fs.readdir(stylesfolderPath, { withFileTypes: true }, (error, files) => {
  if (error) console.log(error);

  files.forEach((file) => {
    const filePath = path.join(stylesfolderPath, file.name);
    const fileExt = path.extname(filePath);
    const readStream = fs.createReadStream(filePath, 'utf-8');

    if (file.isFile() && fileExt === '.css') {
      readStream.pipe(writeStream);
    }
  });
});
