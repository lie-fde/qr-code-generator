

import inquirer from 'inquirer'; // Import inquirer for getting user input
import qr from 'qr-image';       // Import qr-image to generate QR codes
import fs from 'fs';             // Import fs to write to a file


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'url',    // Name of the variable where user input will be stored
        message: 'Enter a URL:'  // Message displayed to the user
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url; 
    const qr_svg = qr.image(url, { type: 'png' }); // Generate QR code as PNG

    // Save the QR code image to a file
    qr_svg.pipe(fs.createWriteStream('qr_code.png')); // Save to a file called 'qr_code.png'

    // Save the URL to a text file
    fs.writeFileSync('user_url.txt', url, 'utf-8');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error('Prompt could not be rendered in this environment.');
    } else {
      // Something else went wrong
      console.error('An error occurred:', error);
    }
  });

