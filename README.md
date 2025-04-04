# Expo ImagePicker
`expo-image-picker` is a library that provides access to the system's native UI for selecting images or videos from the device's media library, or for capturing new media using the camera. It's a convenient tool for apps that require user media input.



## ✨Features
- Select images from the device's gallery
- Capture new images using the camera
- Preview selected images
- Supports both Android and iOS

## 📷Technologies Used
- **React Native**: For mobile application development
- **Expo ImagePicker**: A library used for selecting images and capturing photos

## ⏬Installation and Usage
1. Install the required package:
   ```sh
   npm install expo-image-picker
   ```
2. Import and use ImagePicker in your code:
   ```javascript
   import * as ImagePicker from 'expo-image-picker';
   ```
3. Create a function to pick or capture an image:
   ```javascript
   const pickImage = async () => {
       let result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.Images,
           allowsEditing: true,
           aspect: [4, 3],
           quality: 1,
       });

       if (!result.canceled) {
           setImage(result.uri);
       }
   };
   ```

## 🛠️Running the Project

1. Open the Terminal and clone the project 
    ```bash
    git clone https://github.com/northsnx/CPE451-ImagePicker.git
    ```
2. Navigate to the project folder `CPE451-ImagePicker`
    ```bash
    cd CPE451-ImagePicker
    ```
3. Install all the required dependencies for the project
    ```bash
    npm install && npm install expo-image-picker
    ```
4. To start the app in the Android Simulator
    ```sh
    npm run android
    ```
5. [Option] Use Expo Go to scan the QR Code and test the application on a mobile device
   ```sh
   npm start
   ```


## 👨‍💻Credits

- Developed by [North Vincent](https://github.com/northsnx) & [Ally Lake](https://github.com/Lrfith)
- Course: CPE451 - APPLIED PROGRAM LANGUAGE 1

## License

The MIT License (MIT)

Copyright (c) 2025-Present [North Vincent](https://github.com/northsnx) & [Ally Lake](https://github.com/Lrfith)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

