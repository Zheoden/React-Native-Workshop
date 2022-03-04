# React Native CLI Quickstart on Mac

<!-- TODO -->

1. Download and install Xcode, once finish:
    1. Open `Xcode`
    2. Accept Licenses
    3. (Missing account setup)
2. Fix `simctl`
    1. https://stackoverflow.com/a/54876998/8501209
3. Install Cocoapods
    1. sudo gem install `cocoapods`
4. Download and install VS Code, once finish:
    1. Press `CMD + SHIFT + P`
    2. Search for Install code command in `PATH` 
    3. Press enter
5. Install Homebrew
    1. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
6. Install NodeJS
    1. brew install node
    2. (You may require to downgrade your version to `12.13.1`)
7. Install Yarn
    1. `npm i -g yarn`
8. Install React Native
    1. `npm install -g react-native-cli`
9. Install Java JDK 8 (it asks as to sign in with Oracle)
    1. `brew cask install adoptopenjdk/openjdk/adoptopenjdk8`
10. Install Gradle
    1. `brew install gradle`
11. Download and install Android Studio
    1. Open Android Studio
    2. Download (`API Level 28`) SDK
    3. Create new AVD, specs:
        1. `Pixel 2` (has the PlayStore icon)
        2. `Pie x86` (`API Level 28`)
    4. Close Android Studio
12. Add the following to `~/.bash_profile`
    1. `export ANDROID_HOME=~/Library/Android/sdk`
    2. `export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools`
13. Download React Native Debugger
    1. `brew update && brew cask install react-native-debugger`
14. Install watchman
    1. `brew install watchman`
15. Run Android application
    1. Run Android Emulator
    2. `yarn run android`
16. Run iOS application
    1. Move to `ios` folder
    2. Run `pod install`
    3. `yarn run iOS`