import { StyleSheet, SafeAreaView, Button, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Screens
import Welcome from './app/screens/Welcome';
import Profile from './app/screens/Profile';
import Shop from './app/screens/Shop';
import Login from './app/screens/auth/login';
import Register from './app/screens/auth/register';

import Product from './app/screens/product/[id]';

import { loadFonts } from './app/utils/fonts';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    loadFonts();
  }, [])
  
  return (
    <SafeAreaProvider>
      <Register id={123} />
    </SafeAreaProvider>
    
  );
}


