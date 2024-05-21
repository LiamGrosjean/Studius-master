import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,SafeAreaView, Text  } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import TabNavigation from './App/Navigations/TabNavigation';
import LoginScreen from './App/Screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from "expo-secure-store";
 
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_Y29taWMtaW1wLTk5LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <NavigationContainer>
              <TabNavigation/>
            </NavigationContainer>   
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
