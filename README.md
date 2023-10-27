# GIPHY FINDER APP

A simple web application that allows you to search for Giphy images and display them in real-time. This application uses React and Redux for state management and Axios for making HTTP requests to the Giphy API.

## Table of Contents

- [GIPHY FINDER APP](#giphy-finder-app)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)

## Demo

You can see the app in the [DEMO LINK](https://uufukttas-giphy-finder.netlify.app).

## Tech Stack

- React
- Redux
- Axios

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo.git
```

2. Change direction to the your clone repo directory.
```bash
cd your-repo
```

3. Install the dependencies:
```bash
npm install
```
4. Set up the Giphy API Key:    
 You'll need a Giphy API Key. You can get one by signing up at https://developers.giphy.com.
Create a .env file in the project root directory and add your API key:
```env
REACT_APP_GIPHY_REQUEST_API_KEY=your-api-key-here
```

5. Start the development server:
```bash
npm start
```

## Usage
* Once the application is running, open your web browser and go to http://localhost:3000.

* In the input field, type a keyword to search for a Giphy image.

* Click the "Submit" button to initiate the search.

* The first Giphy image matching your keyword will be displayed on the screen.

* If you like the Giphy image and want to copy the link:
  * A "Copy Giphy URL" button will be displayed below the image. Click the "Copy Giphy URL" button to copy the Giphy image link to your clipboard.

* If no Giphy image is found, a "Search for a Giphy" message will be shown.