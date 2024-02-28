# Foodish
An app to list and favorite food

## How to run the app in Simulator

### Prerequisites

The system shall have `NodeJS` to install the follwoing package

>
> npm i create-expo-app -g
>

> [!TIP]
> Better install the latest version of NodeJS to ensure compatibility and better performance.

### Runing the app

1. Checkout the project from GitHub
2. Traverse to the `Foodish` project directory in Terminal
3. Execute the following command to download all required NPM dependencies
    >
    > npm i
    >
4. Execute the given command to start the app using Expo
    >
    > npx expo start
    >
5. Once the app is started and ready in terminal with QR code, you can select the appropriate option according to the simulator

> [!TIP]
> You can press either `a` for Android or `i` for IOS depending on the simulator where you want to run the app.

## Open Simulators in Mac OS

### IOS Simulator

To open IOS simulator, we can use the command 

>
> open -a Simulator.app
>

### Android Simulator

To open Android simulator, The following set of commands can be used

>
> cd ~/Library/Android/sdk/emulator
>
> ./emulator -list-avds
>
> ./emulator -avd {AVD_NAME}
>

Above commands are extracted from the reference [Stackoverflow link is Here](https://stackoverflow.com/questions/4974568/how-do-i-launch-the-android-emulator-from-the-command-line)
