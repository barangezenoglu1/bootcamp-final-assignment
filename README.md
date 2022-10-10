# bootcamp-final-assignment

## What is this project ?
It's a chat app for patika akbank bootcamp graduation project. 

## What can be done with this app ? 

-Register

-Login

-Logout

-Chat

-Upload Image

-Edit current user profile

-Change theme


## Getting Started
First, download packages and dependencies with :

### `npm install`

After that start the Metro :

### `npx react-native start`

Last, start your application:

### `npx react-native run-android`

## Packages

- @react-native-async-storage/async-storage
- @react-native-firebase/app
- @react-native-firebase/auth
- @react-native-firebase/firestore
- @react-native-firebase/storage
- @react-navigation/native
- @react-native-vector-icons
- @react-native-image-picker
- @reduxjs/toolkit
- @react-redux

## Folder Structure
    ├── android                 # Android bundle
    ├── ios                     # IOS bundle
    ├── node_modules            # Node module Files
    ├── src                     # Source files 
    │   ├── assets              # Project asset files
    │   ├── components          # Components
    │   ├── features            # Redux slices
    │   └── globals             # Constants
    │   └── hooks               # Custom hooks
    │   └── mock-data           # Mock Data Generator
    │   └── screenshots         # Screenshots
    │   └── screens             # Screens files
    │   └── store               # Redux reducers
    
## Screens 

- Login Screens

<p align="middle">
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/Login.png?raw=true" alt="Login" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/Register.png?raw=true" alt="Register" width="200" height="400" style="padding-right:10px" />
</p>

If you registered or logged you will redirect to home page when app open until you logout. Register and login is managing by Firebase auth. When a new user registered it will be add to users collection in firebase. Register button will active after you fill related fields correctly.

- Home Screen

<p align="middle">
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/Chats.png?raw=true" alt="Playlist" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/ChatsDark.png?raw=true" alt="Playlist Dark" width="200" height="400" style="padding-right:10px" />
</p>

If you chatted to someone, you will see these contacts in here. If you click to a contact you will navigate to chat detail. Also you can navigate to contacts list using press pencil or plus icon 

- Contacts Screen

<p align="middle">
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/Contacts.png?raw=true" alt="EmptySearch" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/ContactsDark.png?raw=true" alt="InputSearch" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/ContactsFilter.png?raw=true" alt="SearchDark" width="200" height="400" style="padding-right:10px" />
</p>

You can see contacts list in this screen. All contacts are registered users in users collection in firebase. If a new user registered it will be add in this list. This list can be filtered with the above search filter. Click search icon to open search bar. You can change the theme using the cloud icon next to the search icon

- Chat Detail

<p align="middle">
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/ChatDetail.png?raw=true" alt="Detail" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/ChatDetail2.png?raw=true" alt="DetailDark" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/ChatDetailDark.png?raw=true" alt="DetailDark" width="200" height="400" style="padding-right:10px" />
</p>

Use this screen for chatting to selected contact. If you chat a contact, it will be added in chat list in home screen.

- Profile

<p align="middle">
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/Profile.png?raw=true" alt="Profile" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/barangezenoglu1/bootcamp-final-assignment/blob/main/src/screen-shots/ProfileDark.png?raw=true" alt="ProfileDark" width="200" height="400" style="padding-right:10px" />
</p>

In profile screen you can change theme with switch, edit user info, change profile photo and logout. You can upload image from library or take a new photo using camera. If you edit user, the global user data , async storage data and firebase auth & user collection will update. After the logout you will redirect to login page.

## Todos

- Sharing story
- Sharing current location
- Improve chatting 
