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