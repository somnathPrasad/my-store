import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter': require("./src/assets/fonts/Inter-VariableFont.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView} >
      <AppNavigation />
    </NavigationContainer>
  );
}
