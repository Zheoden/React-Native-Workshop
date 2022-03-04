# Native modules

- [Overview](#overview)
- [Build an Android native module](#build-an-android-native-module)
- [Build an iOS native module](#build-an-ios-native-module)
- [Using the native module](#using-the-native-module)
- [References](#references)

## Overview
Native modules are the way in which React Native let's the developers expose Android and iOS native functionality to the JavaScript code. 
Their most common use cases are the following:
- Reuse existing native code without having to reimplement it in JavaScript.
- Write some high performance, multi-threaded code.
- Expose a native feature that isn't yet present in JavaScript APIs.

## Build an Android native module
A native module is a Java class that usually extends the ReactContextBaseJavaModule class and implements the functionality required by JavaScript. In addition, the class must also override the `getName` method, which will return the name which will be used to access the module in the JavaScript code.

So let's create the class `NativeModuleExample.java`. This class will export a synchronous method called `getNativeLanguage`, which will return a string with the name of the native language.

```java
package com.rnworkshop;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

import javax.annotation.Nonnull;

public class NativeModuleExample extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    NativeModuleExample(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    // Returns the string name of the NativeModule which represents this class in JS
    // We'll be able to access to it through React.NativeModules.NativeModuleExample
    @Override
    public String getName() {
        return "NativeModuleExample";
    }

    @Nonnull	
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getNativeLanguage() {
        return "Java";
    }
}
```

Now we need to include this module into a package, which is a Java class that usually extends the ReactPackage class and exposes a list of native modules.
So let's create the `NativeModuleExamplePackage.java` class.

```java
package com.rnworkshop;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class NativeModuleExamplePackage implements ReactPackage {
    
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new NativeModuleExample(reactContext));

        return modules;
    }
}
```

The last step is to include the package in to the application. So import it in `MainApplication.java` as `import com.rnworkshop.NativeModuleExamplePackage;`. Then modify the `getPackages` method to add the example package. The function should end up looking like the following:

```java
    @Override
    protected List<ReactPackage> getPackages() {
      List<ReactPackage> packages = new PackageList(this).getPackages();
      
      // Packages that cannot be autolinked yet can be added manually here.
      // As example, the NativeModuleExamplePackage will expose the NativeModuleExample module.
      packages.add(new NativeModuleExamplePackage());

      return packages;
    }
```

## Build an iOS native module
A native module is an Objective-C class that implements the RCTBridgeModule protocol, being RCT an abbreviation of ReaCT. 
So let's create the interface `NativeModuleExample.h`.

```objective-c
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface NativeModuleExample : NSObject <RCTBridgeModule>

@end
```

In addition to implementing the RCTBridgeModule protocol, the class must also include the RCT_EXPORT_MODULE() macro. This takes an optional argument that specifies the name that the module will be accessible as in the JavaScript code.
If a name is not specified, the JavaScript module name will match the Objective-C class name. If the Objective-C class name begins with RCT, the JavaScript module name will exclude the RCT prefix.

So let's create the bridge class `NativeModuleExample.m`. This class will export a synchronous method called `getNativeLanguage`, which will return a string with the name of the native language.

```objective-c
#import "NativeModuleExample.h"

@implementation NativeModuleExample

RCT_EXPORT_MODULE(NativeModuleExample);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getNativeLanguage) {
    return @"Objective-C";
}

@end
```

## Using the native module
Before starting, make sure that both Android and iOS exposed methods share the same signature (aka name). This way calling `getNativeLanguage` will pickup each platform implementation without doing any checks in JavaScript. 
Now create a folder called `native-modules` and create the file `NativeModuleExample.ts`. This will include the interface for the module an export the typed module itself.

You can access to your modules through `NativeModules.${ModuleName}`

```typescript
import { NativeModules } from 'react-native';

export interface INativeModuleExample {
  /**
   * @returns The native language used by the app.
   */
  readonly getNativeLanguage: () => string;
}

export default NativeModules.NativeModuleExample as INativeModuleExample;
```

## References
[React Native Android native modules docs](https://reactnative.dev/docs/native-modules-android)

[React Native iOS native modules docs](https://reactnative.dev/docs/native-modules-ios)