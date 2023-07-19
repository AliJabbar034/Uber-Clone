
import { Provider } from 'react-redux';
import { store } from './store/Store';
import HomeScreen from './Screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Screens/MapScreen';
import {KeyboardAvoidingView} from 'react-native'
import { Platform } from 'react-native';
import EatsScreen from './Screens/EatsScreen';
export default function App() {
  const Stack=createStackNavigator();
  return (
    <Provider store={store}>
<NavigationContainer>
<SafeAreaProvider>
   <KeyboardAvoidingView
   style={{flex:1}}
   behavior={Platform.OS==='ios' ? 'padding' :'height'}
   >
   <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='Home' component={HomeScreen}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name='MapScreen' component={MapScreen}/>
      <Stack.Screen name='EatsScreen' component={EatsScreen}
      options={{
        headerShown:true,
        
      }}
      />
      
    </Stack.Navigator>
   </KeyboardAvoidingView>
     </SafeAreaProvider>
</NavigationContainer>
    </Provider>
  );
}


