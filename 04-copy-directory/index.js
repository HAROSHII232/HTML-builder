const fs = require('fs');
const path = require('path');

const newFolderPath = path.join(__dirname, 'files-copy');
const srcFolderPath = path.join(__dirname, 'files');

const createNewFolder = () => {
  fs.mkdir(newFolderPath, { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });
};
const clearNewfolder = () => {
  fs.readdir(newFolderPath, (error, files) => {
    if (error) console.log(error);
    files.forEach((file) => {
      const distFilePath = path.join(newFolderPath, file);

      fs.unlink(distFilePath, () => {});
    });
  });
};

const copyDir = () => {
  createNewFolder();
  clearNewfolder();

  fs.readdir(srcFolderPath, (error, files) => {
    if (error) console.log(error);

    files.forEach((file) => {
      const srcFilePath = path.join(srcFolderPath, file);
      const distFilePath = path.join(newFolderPath, file);

      fs.copyFile(srcFilePath, distFilePath, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Files successfully copied!');
        }
      });
    });
  });
};

copyDir();
