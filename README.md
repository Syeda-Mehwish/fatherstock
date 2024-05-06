# fatherstock React-Native Boilerplate

React-native boiler plate for fatherstock mobile apps.

## Requirements

To initiate this project you will need the react native client installed, you can do this by:

```
npm i -g react-native-cli
```

You will also need CocoaPods installed if you would like to run the iOS version, you can do this by:
```
gem install cocoapods --no-document
```

## Installation

*   Create you project directory
*   cd < Your Project Directory >
*   Run the `git clone git@bitbucket.org:fatherstock/react-native-boilerplate.git .`
*   Run `npm install`

If using iOS the newer versions of react native now requires use of Pods to automatically link libraries so you will also need to do the following:
```
cd ios
pod install
```

If you are using react-native-permissions plugin you will need to add react native permissions to the pod file and rerun pod install
https://www.npmjs.com/package/react-native-permissions#ios

If the install fails try running the following before running `pod install` again:
```sudo xcode-select --switch /Applications/Xcode.app```

Also on newer version of react-native you will need to install
https://facebook.github.io/watchman/docs/install.html
```
brew update
brew install watchman
```

## Run new project

You can run the project either in Xcode or Android Studio or run the following commands from your project directory:

####Expo

```To Start Expo:```

```expo start```

```To Start Expo clearing cache:```

```expo r -c```


####iOS

Open *ios/pastest_app.xcworkspace* in Xcode and run build

or

```react-native run-ios```

**Android**

```react-native run-android```

## Extra Setup

#### Generating Icons

**TODO**
#### To reregister bundles

**Android**
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
#### To regenerate ios and Android

inside *YourProjectName* directory

```
npx react-native init YourProjectName

mv YourProjectName/ios ios

rm -rf YourProjectName
```

## Packages

| Use | Package | Description |
| - | - | - |
| Navigation | [react-navigation](https://reactnavigation.org) | This is used to move between screens, it has been chosen because it's recommended by React Native and handles the transition better than other packages |
| Design | [react-native-paper](https://callstack.github.io/react-native-paper) | This is used as a design framework and has a large selection of components |
| Storage | [react-native-simple-store](https://www.npmjs.com/package/react-native-simple-store) | This is used as a persistent local storage |
| Array Helpers | [underscore](https://underscorejs.org) | This is used for array and object helpers like mapping an array |
| String Helpers | [underscore.string](https://www.npmjs.com/package/underscore.string) | This is used for string helpers like capitalising text |
| Date Helpers | [moment](https://momentjs.com) | This is used to manipulate dates like converting to a different format |
