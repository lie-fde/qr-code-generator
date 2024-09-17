# QR Code Generator

This is a simple Node.js command-line application that generates a QR code image from a URL entered by the user. The application prompts the user for a URL, converts the URL into a QR code, and saves both the QR code image and the URL to files.

## Features

- **User Input**: Prompts the user for a URL using the [`inquirer`](https://www.npmjs.com/package/inquirer) npm package.
- **QR Code Generation**: Converts the user-entered URL into a QR code using the [`qr-image`](https://www.npmjs.com/package/qr-image) npm package.
- **File Storage**: Saves the QR code image as a `.png` file and the user input URL as a `.txt` file using Node.js's native `fs` module.
- **Cross-Platform**: Works across Windows, macOS, and Linux.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/lie-fde/qr-code-generator.git
```

### 2. Navigate into the project directory

```bash
cd qr-code-generator
```

### 3. Install the required dependencies

```bash
npm install
```

### 4. Run the application

```bash
node index.js
```

## Dependencies

- **[`inquirer`](https://www.npmjs.com/package/inquirer)**: For capturing user input in the command-line.
- **[`qr-image`](https://www.npmjs.com/package/qr-image)**: For generating QR codes from URLs.
- **`fs`**: A native Node.js module for reading and writing files.

## How It Works

1. The user is prompted to enter a URL.
2. The application generates a QR code from the provided URL.
3. The QR code is saved as a `qr_code.png` image file.
4. The entered URL is saved as `user_url.txt`.

## Example

When you run the application, the output will look like this:

```bash
? Enter a URL to generate its QR code: https://example.com
QR code and URL saved successfully!
```

- The QR code image will be saved in the project directory as `qr_code.png`.
- The URL will be stored in `user_url.txt`.

## Contributions

Feel free to fork this project and submit pull requests. Contributions are welcome!

## License

This project is licensed under the [MIT License](./LICENSE).

## Contact

For any issues or suggestions, please open an issue in the repository or contact me directly at [nibihssw@gmail.com](mailto:nibihssw@gmail.com).
