# languageXchange

This project is designed to help users to exchange different languages by connecting them with native speakers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project locally, follow these steps:

1. Clone the repository to your local machine using the command ``git clone https://github.com/behicsakar/languageXchange.git``
    - Navigate to the project directory using the command ``cd languageXchange``
    - Install the Ionic CLI globally using the command ``npm install -g @ionic/cli``
    - Install the project dependencies using the command ``npm install``
2. Create a new Firebase project and enable the Authentication and Firestore services.
    - In the Firebase console, go to Project Settings and copy the Firebase config object.
    - Rename the ``environment.ts.sample`` file in the ``src/environments`` directory to ``environment.ts``
    - Replace the ``YOUR_API_KEY``, ``YOUR_AUTH_DOMAIN``, ``YOUR_PROJECT_ID``, ``YOUR_STORAGE_BUCKET``, ``YOUR_MESSAGING_SENDER_ID``, and ``YOUR_APP_ID`` placeholders in the ``environment.ts`` file with the actual values from your Firebase project.
      ``` typescript
        export const environment = {
          production: false,
          firebaseConfig: {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
          }
        };
      ```
3. Start the development server using the command ``ionic serve``
4. Open your web browser and navigate to ``http://localhost:8100``

That's it! You should now be able to see the project running locally on your machine. If you encounter any issues during the installation process, please refer to the project's documentation or open an issue on the project's GitHub repository.

### Cloud Functions

To push Firebase Cloud Functions, follow these steps:

1. Make sure you have the Firebase CLI installed on your machine. If you don't have it installed, you can install it using the command ``npm install -g firebase-tools``
2. Navigate to the root directory of your Firebase project using the command line.
3. Run the command ``firebase login`` to log in to your Firebase account.
4. Run the command ``firebase init functions`` to initialize the Firebase Cloud Functions in your project.
5. Follow the prompts to select your Firebase project and choose the language you want to use for your functions.
6. Once the initialization is complete, you can check Cloud Functions code in the ``functions/index.js`` file (if you're using JavaScript) or you can convert ``functions/index.js`` to ``functions/index.ts`` file (if you're using TypeScript).
7. Once you've written your Cloud Functions code, run the command ``firebase deploy --only functions`` to deploy your functions to Firebase.
8. Firebase will provide you with a URL for each of your Cloud Functions that you can use to call them from your app.

That's it! You should now be able to push your Firebase Cloud Functions to Firebase and use them in your app. If you encounter any issues during the process, please refer to the Firebase documentation or open an issue on the Firebase GitHub repository.

## Usage

To use the project, follow these steps:

1. Open your web browser and navigate to the URL where the project is hosted.
2. If you haven't already done so, create an account and log in to the app.
3. Once you're logged in, you'll be taken to the home page where you can see a list of available language exchange sessions.
4. To join a chat room, click on the user you're interested in to open private chat page.
5. Once you've joined a chat room, you'll be able to chat with other participants and practice your language skills.

That's it! You should now be able to use the project to practice your language skills with other users. If you encounter any issues during the usage process, please refer to the project's documentation or open an issue on the project's GitHub repository.

## Contributing

Guidelines for contributing to the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.