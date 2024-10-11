# Web Application for Webcam Facial Recognition

## Overview

This web application is designed to capture an image feed from the user's webcam and perform facial recognition using a chosen framework, such as OpenCV, TensorFlow, or Dlib. Built with modern web technologies including **React** and **TypeScript**, the application provides an intuitive user experience and a responsive interface, ensuring functionality on both desktop and mobile devices.

### Key Features

- **Webcam Integration**: Users can easily start and stop the webcam feed, enabling real-time facial recognition.
- **Facial Recognition**: The application processes captured images using advanced facial recognition algorithms to identify and detect faces.
- **Dynamic Face Detection**: Overlays are displayed on the captured images, indicating the position and size of any detected faces.
- **Facial Information Display**: The application provides additional information about detected faces, including names, ages, genders, and any other relevant details.
- **Multiple Face Handling**: It can accurately detect and display information for multiple faces within a single image.
- **Responsive Design**: The application is built to be responsive, ensuring a seamless experience across different screen sizes and devices.

### Technologies Used

- **Frontend Framework**: React
- **Language**: TypeScript
- **Facial Recognition Library**:  TensorFlow.js
- **CSS Framework**: Bootstrap (for styling and responsiveness)

### User Interface

The user interface is designed for simplicity and ease of use, allowing users to interact with the webcam feed and view facial recognition results effortlessly. The layout adapts to various screen sizes, maintaining usability across devices.
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mosidrum/face_gesture
   ```
2. Navigate to the project directory:
   ```bash
   cd face_gesture
   ```
3. Install the dependencies:
   ```bash
   npm install
   OR
   yarn
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Usage
- Click the "Start Video" button to begin the webcam feed.
- The application will process the video stream for facial recognition.
- Detected faces will be highlighted with an overlay, displaying relevant information.
- Click "Stop Video" to halt the webcam feed and stop processing.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
