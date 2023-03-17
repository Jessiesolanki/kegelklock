import 'react-native-gesture-handler'
import React, {createContext, useState,useEffect,useContext} from 'react';
import {Button, Linking, StatusBar, LogBox,Modal,View,Text,Image,ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Provider from './Shared/Provider';
import Splash from './Src/View/Splash/Splash';
import {navigationRef} from './Src/Components/Config';
import HomeV1 from './Src/View/DashboardScreens/HomeV1';
import Register from './Src/View/AuthScreens/Register';
import Gender from './Src/View/AuthScreens/Gender';
import Subscription from './Src/View/Plans.js/Subscription';
import Forgot from './Src/View/AuthScreens/Forgot';
import Dashboardstack from './Src/View/DashboardScreens/DashboardStack';
import {Context} from './Shared/Provider'
import Payment from './Src/View/Plans.js/Payment';
import Login from './Src/View/AuthScreens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  
  Root,
} from 'react-native-alert-notification';
import WebHome from './Src/View/AuthScreens/WebHome';
import { Feedback } from '@mui/icons-material';
export const Stack = createStackNavigator();
export var appSounds = {};
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="HomeV1" component={HomeV1} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Dashboardstack" component={Dashboardstack} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="WebHome" component={WebHome} />
     
      </Stack.Navigator>
  );
}
const TOPIC = 'MyNews';
export default function App() {
  const [loader, setLoader] = useState(false);
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    console.log('Authorization status(authStatus):', authStatus);
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };

  Linking.addEventListener('url', (e)=>console.log(e))
  useEffect(() => {
    if (requestUserPermission()) {
    
      messaging()
        .getToken()
        .then((fcmToken) => {
          console.log('FCM Token -> ', fcmToken);

          AsyncStorage.setItem('fcmToken' ,fcmToken)
        });
    } else console.log('Not Authorization status:', authStatus);

    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'getInitialNotification:' +
              'Notification caused app to open from quit state',
          );
          
        }
      });
    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'onNotificationOpenedApp: ' +
            'Notification caused app to open from background state',
        );
      
      }
    });
    messaging().setBackgroundMessageHandler(
      async (remoteMessage) => {
        console.log(
          'Message handled in the background!',
          remoteMessage
        );
    });
    const unsubscribe = messaging().onMessage(
      async (remoteMessage) => {
        PushNotification.localNotification({
          message: remoteMessage.notification.body,
          title: remoteMessage.notification.title,
          bigPictureUrl: remoteMessage.notification.android.imageUrl,
          smallIcon: remoteMessage.notification.android.imageUrl,
        })

        console.log(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage)
        );        
      }
    );
    messaging()
      .subscribeToTopic(TOPIC)
      .then(() => {
        console.log(`Topic: ${TOPIC} Suscribed`);
      });

    return () => {
      unsubscribe;
    };
  }, []);

  const ignoreWarns = [
    'EventEmitter.removeListener',
    '[fuego-swr-keys-from-collection-path]',
    'Setting a timer for a long period of time',
    'ViewPropTypes will be removed from React Native',
    'AsyncStorage has been extracted from react-native',
    "exported from 'deprecated-react-native-prop-types'.",
    'Non-serializable values were found in the navigation state.',
    'VirtualizedLists should never be nested inside plain ScrollViews',
  ];
  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);

  console.warn = () => {};

  return (
    <Root>
      <Provider>
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <NavigationContainer ref={navigationRef}>
          <StatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle="dark-content"
          />
   
          <MyStack />
          <LoadingModal />
        </NavigationContainer>
      </Provider>
    </Root>
  );
}
const LoadingModal = () => {
  const { Sloader } = useContext(Context)
 
   return (
     <Modal
       visible={Sloader}
       transparent={true}
       hardwareAccelerated
       statusBarTranslucent
       animationType="fade">
       <View style={{ flex: 1, backgroundColor: "#00000080", alignItems: 'center', justifyContent: 'center' }} >
         <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
           {/* <ActivityIndicator color={'#30046B'} /> */}
           <Image source={require('./Src/images/sound.png')} style={{height:30,width:30}} />
         </View>
       </View>
     </Modal>
   )
 }
 