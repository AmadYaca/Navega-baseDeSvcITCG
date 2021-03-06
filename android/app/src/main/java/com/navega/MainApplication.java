package com.navega;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
//import io.invertase.firebase.RNFirebaseDatabasePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
//import com.facebook.soloader.SoLoader;

//fbsdk
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

//google maps
import com.airbnb.android.react.maps.MapsPackage;
//geolocation service
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {

            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    //react-native
                    new MainReactPackage(),
                    new RNFirebasePackage(),
                    //new RNFirebaseDatabasePackage(),
                    new RNGestureHandlerPackage(),
                    //google maps
                    new MapsPackage(),
                    //geolocation-service
                    new RNFusedLocationPackage(),
                    //fbsdk
                    new FBSDKPackage(mCallbackManager)
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        AppEventsLogger.activateApp(this);
    }
}
