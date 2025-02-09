# Simple User Dashboard Application

## About
This is a simple user dashboard application built as part of a technical interview test. The project utilizes:
- **JavaScript & TypeScript**
- **NPM**
- **Firebase**

## Explanation
This project is structured as a **TurboRepo** with the following components:
- **`/apps/backend`**: An Express.js backend application built using TypeScript, running on `localhost:3001`.
- **`/apps/frontend`**: A Next.js frontend application built using TypeScript, Redux Thunk, and MUI, running on `localhost:4001`.
- **`/functions`**: Contains Firebase emulator-related configurations.

## How to Run
1. Use **Node.js version 23** (recommended).
2. Copy `.env.example` to `.env` in both **backend** and **frontend** directories.
3. Open **two terminals**:
   - In the first terminal, run:
     ```sh
     npm run dev
     ```
   - In the second terminal, run:
     ```sh
     firebase emulators:start --only functions,auth,firestore
     ```
4. The Firebase emulator runs on [`http://127.0.0.1:4000/`](http://127.0.0.1:4000/).
5. Before using the application, populate the **auth** and **firestore** data.

## Others
If you have any questions, feel free to contact me via:
- **Email**: [williamkrav@gmail.com](mailto:williamkrav@gmail.com)
- **WhatsApp**: [+62 816 728 183](https://wa.me/62816728183)

