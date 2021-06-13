const glob = require('glob')
const Jimp = require('jimp')
const fs = require('fs')
const dir = './assets/gallery'
const thumbdir = './assets/thumbs'
const imagewidth = 1800
const jo = require('jpeg-autorotate');
if (fs.existsSync(dir)) {
  fs.rmdirSync(dir, {recursive: true});
}
if (fs.existsSync(thumbdir)){
  fs.rmdirSync(thumbdir, {recursive: true});
}
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
if (!fs.existsSync(thumbdir)){
    fs.mkdirSync(thumbdir);
}

const opt = {
    nocase: true
}
function resize(buffer, file, filename){
  Jimp.read(buffer)
    .then(jfile => {
      if (jfile.bitmap.width > imagewidth) {
        console.log('resizing ' + filename)
        return jfile
          .resize(imagewidth, Jimp.AUTO) // resize
          .quality(60) // set JPEG quality
          .write(dir + '/' + filename); // save
      } else {
        fs.copyFile(file, dir + '/' + filename, (err) => {
          if (err) throw err;
          console.log(filename + ' copied to gallery (smaller than ' + imagewidth + ')');
        });
      }
    })
    .catch(err => {
      console.error(err);
    });

  // Create thumbnails
  Jimp.read(file)
    .then(jfile => {
      width = 120
      height = Jimp.AUTO
      if(jfile.bitmap.height < jfile.bitmap.width) {
        width = Jimp.AUTO
        height = 120
      }
      return jfile
        .resize(width, height, Jimp.RESIZE_BEZIER) // resize
        .quality(60) // set JPEG quality
        .write(thumbdir + '/' + filename); // save
    })
    .catch(err => {
      console.error(err);
    });
}
glob("assets/images/*.+(png|jpg|jpeg|svg|JPG|JPEG)", opt, async function (err, images) {
    //console.log(images)

    const galleryImages = []

    for (const file of images) {
        //files.forEach(async function(file) {

        let filenameold = file.replace('assets/images/', '')
        let filename = filenameold.toLowerCase().replace(/[^\w.]+/g, "_")

        //galleryImages.push('assets/gallery/' + filename)

        console.log(file);

        jo.rotate(file).then(({buffer, orientation, dimensions, quality}) => {
          resize(buffer, file, filename);
        }).catch((error) => {
          resize(fs.readFileSync(file), file, filename);
        })
    }

})


