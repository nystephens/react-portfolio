## Nate Stephens React Portfolio

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
This is a portfolio site created using React JSX and Bootstrap CSS. It contains a header with a nav component that has links to "About,  Contact, Portfolio, and Resume."  Each component is conditionally rendered by React so that the app is both fast and dynamic. About section contains a photo of me as well a short blurb about my interests and experience.  The Contact section includes 3 text inputs for Name, Email and Message. The Portfolio section includes a short list of featured applications to show to prospecting employers or clients.  The Resume section includes a short list of web dev proficiencies as well as a Google Drive link to a downloadable resume (resume is not up to date, but will be edited later to reflect coding experience).  The styling is currently a basic Bootstrap CSS framework, but after I complete the Coding Bootcamp I will dedicate myself to polishing it up to have an impressive and interactive user interface.

Here are some screenshots of the deployed application:



## Installation
1.  Navigate to the GitHub repository ( https://github.com/nystephens/react-portfolio ) in your web browser and click the green dropdown menu that says “Code”.  Copy the SSH key to your clipboard and then open your terminal.  

2.  In your terminal navigate to the directory you wish to house this repository.   

3.  Type “git clone” into your command line and paste the SSH key you copied from the repository, then hit Enter.  A new file titled “react-portfolio” containing the necessary files will appear in your chosen directory.  Due to file size, Node.js and is necessary  modules will not be cloned to your repository.  Please continue reading the instructions to find out how to install these modules on your computer.   

4.  Since this application uses Node.js you will have to install Node and the required Node modules to operate it, make edits, and/or run the server locally.  For detailed instructions on how  to install Node.js to your computer please visit: https://www.guru99.com/download-install-node-js.html  

5.  Once Node is successfully installed on your computer, navigate to the project's root directory in your terminal.  For quick access you can right click the root directory in VS Code and click the option “Open in Integrated Terminal”. 

6.  Type the following command to install the proper node modules: “npm install”.  

7.  Check your newly downloaded “node_modules” folder to ensure that the correct packages have been installed.  The dependencies that are not included within the general Node module package are:

    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"

    As well as one Dev Depencency: "gh-pages": "^3.1.0"

    If these packages are not present within your Node modules folder then run the command “npm install \<package-name\>” to install the missing packages (“npm install -D \<package-name\>”  for Dev Dependencies). 

8.  Once you have cloned the repository and downloaded Node.js and its necessary modules you are ready to run the server locally! See the next section, [Usage](#usage), for instructions on how to properly set up and seed the projectData.json file with test data.

## Usage
This is a React App that uses a src folder to build a dynamic web application.  The contents of the public folder are rendered based on the JSX framework provided by the react and react-router-dom packages.  To learn more about how react works and how to create your own dynamic application you can visit [REACT DOCS](https://reactjs.org/docs/getting-started.html).  To run the app on your local computer navigate to the root directory in your terminal and enter the command "npm start".  This will start both the react app and its development server and you can navigate to it in your browser at: http://localhost:3000/react-portfolio#/.  Due to React's innovative and interactive design, changes made to the app will immediately be available for viewing while the dev server is on.  This is heplful as you can quickly render styling changes or new JSX components. The server will stop if the code is faulty and return error messages in real time so that you can work out bugs quickly.  Many of the more basic JSX compnents are hardcoded, but there is some dynamic content.  The projectData.json file contains an array of objects each containing data of a featured project.  These projects are then mapped over in the Porfolio component and passed as props to the Project component.  These props contain a title which is a clickable link to the deployed application, a screenshot of the deployed app or relevant photo, a description, and  a link to the GitHub repository.  All of these elements are rendered dynamically based on the info provided in the projectData.json objects. I will describe in the [Tests](#tests) section of this README how to enter your own data to test the dynamic nature of this application.

IMPORTANT: Currently the path in the photos is an absolute path to the static files in the production environment.  To see the photos in the local environment you need to delete the github.io link in front of the /images/ folder, thus changing it to a relative path. For example:

The path "http://nystephens.github.io/react-portfolio/images/happy-tails-dashboard.png" should be shortened to "/images/happy-tails-dashboard.png" so that it references the image files in the public folder.

To publish this app to a production environment first make sure your main branch is completely up to date and pushed to your Github repository.  Be sure to include a .gitignore file that contains "node_modules" so that you don't accidently push them to your repo or delpoyed site!!  This can cause many issues upon deployment and clutter your repository.  Once that is done change the link in the "homepage" property of package.json file to include your GitHub username.  Your homepage link should look like this "homepage": "http://\<username\>.github.io/react-portfolio" with "\<username\>" changed to your Github username. You may then run the command "npm run deploy".  This will deploy your application to the homepage link in your package.json file.  You may use ctrl+click to navigate directly to the link or copy and paste it into your browser.  Sometimes GitHub Pages takes several minutes to update so be sure to check back in 15 mins to make sure your page exists and there are no bugs in production.

## License
![Apache license](https://img.shields.io/badge/license-Apache2.0-brightgreen)
[Apache license](http://www.apache.org/licenses/)
   Copyright [yyyy] [name of copyright owner]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.

## Contributing
To contribute to this site please fill out the form in the contact section of the deployed site (currently the backend functionality for this form is not complete).  Or you may contact me via GitHub at the link provided in the [Questions](#questions) section below. 

## Tests
To test this site you can open it in your local host and make changes to the JSX compnents or layouts while actively watching the app that is being rendered in your browser.  To review how to start the development server go to the [Usage](#usage) section of this README.  If there are any errors in your code react will stop the server immediatley and return an error message.  You can also enter your own data in the projectData.json file by replacing the values of the project objects with your own content.  This content does not have to be project or portfolio based, it can dynamically render all sorts of data, however be sure to change the prop declarations and the JSX return statment in the Portfolio component to reflect the data you have in the projectData objects.  For more info on how to assign and pass props to components with React please visit [REACT DOCS: Components and Props](https://reactjs.org/docs/components-and-props.html).

## Questions
For questions or concerns regarding this project or future collaborations please contact the author via GitHub at:
https://github.com/nystephens
