import fs from 'fs';
import path from 'path';

const pathToUploads = '../../../public/uploads/';

export default (req, res) => {
    const {
        query: {fileName},
    } = req;

    console.log(fileName);
    const fileSplit = fileName.split('.jpg')
    console.log(fileSplit[0]);
    const filePath = path.resolve('.', `public/uploads/${fileSplit[0].replace('.', '/')}.jpg`);
    const imageBuffer = fs.readFileSync(filePath);
    res.setHeader('content-Type', 'image/jpg');
    res.send(imageBuffer);
}
