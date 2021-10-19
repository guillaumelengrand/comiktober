import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const {
        query: {directory, fileName},
    } = req;

    console.log(fileName, directory);

    try {
        const filePath = path.resolve('.', `uploads/${directory}/${fileName}`);
        const imageBuffer = fs.readFileSync(filePath);
        res.setHeader('content-Type', 'image/jpg');
        res.send(imageBuffer);
    } catch (error) {
        console.log(error);
        res.status(404).send('Not Found');
    }
};
