# Environments

## FrontEnd

- EXPO-CLI
- Axios
- Async-Storage
- React-Native-Elements
- react-native-maps
- expo-location

## BackEnd

- Express.js
- bcrypt
- body-parser
- jsonwebtoken
- mongoose
- ngrok

## Database

- MongoDB

## expo-location

- Location services provided by the expo-location library. We need to install this
- Before tracking the users location, we need to ask for permission
- if the user rejects that tracking we make sure the handle that some way! But the user approves it, thats great!
- Two forms of location tracking - foreground and background
- We need to be extremely aware of when we're tracking location - it consumes battery power!

## Foreground Tracking

- Gives us users location whenever our app is visible on the screen
- Easy to set up & use

## Background Location Tracking

- Gives us the users location at all times, even if the app is not visible or device is locked
- Uses considerably more battery power
- Much more complicated to set up

## Track Create Screen

- When a user comes to this screen, we need to start tracking their location right away, even if they are not actively recording a track

- When a user navigates away, we need to stop tracking their location unless they are recording a track!

## reset user permission decision

- C:\Users\"username"\AppData\Local\Android\Sdk\platform-tools in this directory run command below

- "adb shell pm reset-permissions" : run this command in command prompt
