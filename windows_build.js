//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");


const directoryPath = path.join(__dirname, 'content');

const deleteFolderRecursive = function(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file, index) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
};


var files = fs.readdirSync(directoryPath);

if (!fs.existsSync(path.join(directoryPath,'windows'))) {
  fs.mkdirSync(path.join(directoryPath,'windows'), 0777);
}

//listing all files using forEach
files.forEach(function (file) {
    console.log(file);

    // Do whatever you want to do with the file
    var data = fs.readFileSync(path.join(directoryPath, file), 'utf8');
    var result = data.replace(/src=\"(.*)\/(.*\.*.)\"/g, 'src=\"$1\\$2\"');
    fs.writeFileSync(path.join(path.join(directoryPath, 'windows'),file), result);
});
var data = fs.readFileSync(path.join(__dirname,  'magicbook.json'), 'utf8');
var result = data.replace("context/noc_pdf/imgs/**/*.*", "context\\\\noc_pdf\\\\imgs\\\\**\\\\*.*").replace("context/noc_html/imgs/**/*.*", "context\\\\noc_html\\\\imgs\\\\**\\\\*.*").replace(/content\/\*.html/,'content\\\\windows\\\\*.html')

fs.writeFileSync(path.join(__dirname,  'magicbook.json'), result);

exec("magicbook build",(error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    deleteFolderRecursive("content/windows")


  fs.writeFileSync(path.join(__dirname,  'magicbook.json'), data);

});