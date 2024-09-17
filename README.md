QR Code Generator
This is a simple Node.js command-line application that generates a QR code image from a URL entered by the user. The application prompts the user for a URL, converts the URL into a QR code, and saves the QR code image and URL into files.

Features:
User Input: Uses the inquirer npm package to prompt the user for a URL.
QR Code Generation: Converts the user-entered URL into a QR code using the qr-image npm package.
File Storage: Saves the QR code image as a .png file and the user input URL as a .txt file using Node.js's fs (File System) module.
Cross-Platform: Works across Windows, macOS, and Linux.
Project Setup:
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/qr-code-generator.git
Navigate into the project directory:

bash
Copy code
cd qr-code-generator
Install the required dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
node index.js
Dependencies:
inquirer - For capturing user input in the command-line.
qr-image - For generating QR codes from URLs.
fs (File System) - A native Node.js module for reading and writing files.
How It Works:
The user is prompted to enter a URL.
The application generates a QR code from the provided URL.
The QR code is saved as a qr_code.png image.
The entered URL is saved as user_url.txt.
Example:
When you run the script, the output will look something like this:

less
Copy code
? Enter a URL to generate its QR code: https://example.com
QR code and URL saved successfully!
The QR code image will be saved in the project directory as qr_code.png, and the URL will be stored in user_url.txt.

Contributions:
Feel free to fork this project and submit pull requests. Contributions are welcome!

License:
This project is licensed under the MIT License.

Contact:
For any issues or suggestions, open an issue in the repository or contact me directly at [nibihssw@gmail.com].
