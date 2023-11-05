## Live Server
[https://eco-impact.web.app](https://eco-impact.web.app)

## Quick Start
`npm install`

`npm install firebase && npm install firebase-tools -g`

## Inspiration
The driving force behind our project's inception lies in our commitment to democratize the intricacies of urban planning within cityscapes. Our ambition is to cultivate a well-informed public consciousness regarding the burgeoning infrastructural developments that are shaping their cities and neighborhoods. By unveiling the mechanics of urban growth, we empower residents to engage meaningfully in the decision-making processes that influence their immediate environments. This initiative is rooted in the belief that an engaged and knowledgeable citizenry is pivotal to the collaborative evolution of our urban spaces.


## How we built it

Our application is the result of an intricate blend of cutting-edge technologies, carefully selected to create an immersive and robust user experience. Here is an overview of the sophisticated tech stack we have harnessed:

- Front-end Architecture: Our user interface is crafted using Cesium.js, which brings a rich, interactive, and 3D geospatial visualization, complemented by Google’s Photorealistic 3D Tiles for an unparalleled visual fidelity. This is seamlessly integrated with the core web trinity of HTML, CSS, Bootstrap and Vanilla JavaScript to deliver a fluid and responsive front-end experience.

- Database and User Security: At the heart of our data management and user authentication, we have entrusted Firebase. This platform provides a comprehensive suite of tools that ensure data integrity and security while offering a streamlined, user-friendly authentication process.

- API Integration: We have enhanced our application with potent API services from Google. The Google Maps Solar API provides insights into solar energy potential, while the Google Maps Air Quality API facilitates real-time environmental analysis. These are complementarily bolstered by the WeatherBit API, which offers real-time meteorological data. Collectively, they constitute an essential component of our data analysis infrastructure, empowering us to provide precise and actionable information to our users.


## Project Structure
- Install firebase SDK using npm to deploy and test locally

Command to test locally: 
firebase emulators:start 

Command to deploy to firebase: firebase deploy --only hosting:eco-impact   

## What's next?
The application stands poised for numerous enhancements, which may encompass a diverse array of features, including but not limited to:

- Comprehensive Environmental Impact Assessment Reports
- Detailed Traffic Impact Analyses
- Strategic Noise and Dust Mitigation Programs
- Thorough Legal Compliance Documentation
- Assessments of Local Economic Impacts

These potential extensions are designed to enrich the application's capability, providing a more in-depth and multifaceted analysis of urban planning projects.