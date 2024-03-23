import { Stack } from "expo-router";
import { useCallback } from 'react';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';


const Layout = () => {
    const [fontsLoaded, fontError] = useFonts({
        'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
        'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
        'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
      });

    const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
    }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
    return null;
    }
    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout;