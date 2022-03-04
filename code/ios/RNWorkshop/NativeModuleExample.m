#import "NativeModuleExample.h"

@implementation NativeModuleExample

RCT_EXPORT_MODULE(NativeModuleExample);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getNativeLanguage) {
    return @"Objective-C";
}

@end