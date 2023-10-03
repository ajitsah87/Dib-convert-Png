const img = new Image();
img.src = './images/image.dib';

const canvas = document.createElement('canvas');

img.onload = function() {
     const width = img.width;
     const height = img.height;
   
     canvas.width = width;
     canvas.height = height;
   
     const ctx = canvas.getContext('2d');
   
     ctx.drawImage(img, 0, 0, width, height);
   
     const pngImageData = canvas.toDataURL('image/png');
   
     const invertedImage = new Image();
     invertedImage.src = pngImageData;

     invertedImage.style.filter = 'invert(100%)';
   
     document.body.appendChild(invertedImage);
};