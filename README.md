# Jolly IRC

A mobile responsive IRC web application developed using React and Firestore.

![Jolly IRC](https://user-images.githubusercontent.com/18102308/129444173-d3c660fd-b6d2-41e5-b7e3-785cf22bb8b4.png)
(Application prototype can be found in the "Adobe XD" folder)

To achieve a real-time chatting experience, Google's Database solution, Firestore,  was used in conjunction with [Zustand](https://github.com/pmndrs/zustand) for React state management.  

## Getting Started

### Prerequisites
Jolly IRC's authentication and database functionalities are enabled using Firebase, so you'll need to make a firebase account (They have a free project plan as well :D) and create a new project before using this application.

### Usage
Navigate to the "src" folder, rename the "firebaseClone.js" file to "firebase.js", and then replace the empty strings with the config parameters present in your Firebase project settings.

![Firestore](https://user-images.githubusercontent.com/18102308/129445495-b0433af9-f879-4e92-adc1-77f474f5c240.png)

You'll then have to start a collection in Firestore called "channels", and then create a dummy document with the fields (description and name). The picture above can be used as a reference. At this point, the application should work as intended.
