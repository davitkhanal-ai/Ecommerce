const expressPath = require('express/lib/application');
const fs = require('fs').promises;
const pathModule = require('path');

const versionTXT = async (req, res) => {
    try {
        // Read the contents of version.txt (assuming it's in the same directory)
        const filePath = pathModule.join(__dirname,'..','..', 'version.txt');
        const data = await fs.readFile(filePath, 'utf8');

        // // Split data into entries based on the timestamp
        // const entries = data.trim().split(/\n(?=\d{4}-\d{2}-\d{2} :)/);

        // // Process each entry and format the data
        // const formattedData = entries.map(entry => {
        //     const lines = entry.trim().split('\n');
        //     return {
        //         Commit: lines[0].split(':')[1].trim(),
        //         Parents: lines[1].split(':')[1].trim(),
        //         Author: lines[2].split(':')[1].trim(),
        //         Committer: lines[3].split(':')[1].trim(),
        //         Date: lines[4].split(':')[1].trim(),
        //         Summary: lines[5].split(':')[1].trim(),
        //     };
        // });

        // // Send the formatted data as a JSON response
        // res.json(formattedData);


         // Send the data as plain text
         res.set('Content-Type', 'text/plain'); // Set response content type to plain text
         res.send(data);
    } catch (err) {
        console.error('Error reading or formatting data:', err);
        res.status(500).send('Error reading version.txt');
    }
}

module.exports = versionTXT;
