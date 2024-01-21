const path = require('path');
const fs = require('fs');
const secretFolderPath = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolderPath, { withFileTypes: true }, (error, files) => {
  if (error) console.log(error);

  files.forEach((file) => {
    let innerFilePath = __filename;
    fs.stat(innerFilePath, (error, stats) => {
      if (error) console.log(error);

      if (file.isFile()) {
        const pathFile = path.join(secretFolderPath, file.name);
        const fileName = path.basename(pathFile, path.extname(pathFile));
        const fileExtname = path.extname(pathFile).slice(1);
        console.log(`${fileName} - ${fileExtname}`);
      }
    });
  });
});

/* 
try {
  const files = await fs.readdir(innerFolderPath);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
} */
