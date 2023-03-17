import {

  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useState, useContext, useEffect} from 'react';

import Home from './Home';

import MyText from '../../Components/Ctext';

import {img} from '../../Components/Config';

import {Stack} from '../../../App';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LinearGradient from 'react-native-linear-gradient';

import Customize from './Customize';
import WorkoutTimer from './WorkoutTimer';
import WorkoutSetting from './WorkoutSetting';
import {scale} from 'react-native-size-matters';
import Setting from './Setting';
import Notification from './Notifiacation';
import UpdateProfile from './UpdateProfile';
import {Context} from '../../../Shared/Provider';
import {hp, wp} from '../../Components/Globalstyle';

import Workouts from './Workouts';

import ResetPass from '../AuthScreens/ResetPass';
import Calender from './Calender';
import MyPlan from './MyPlan';
import Upgrade_plan from './Upgrade_plan';
import TableContentList from './TableContentList';
import TableContent from './TableContent';
import WorkoutList from './WorkoutList';

import Subscription from '../Plans.js/Subscription';
import Payment from '../Plans.js/Payment';
import {useNavigation} from '@react-navigation/native';
import Contactus from './Contactus';
import WorkoutHistory from './WorkoutHistory';
import AlarmSetting from './AlarmSetting';
import AudioSetting from './AudioSetting';
import HomePolicy from './HomePolicy';
const Tab = createBottomTabNavigator();

const Workoutstack = () => {
  const [DefaultActive, setDefaultActive] = useState(true);

  const {Udetail} = useContext(Context);

  useEffect(() => {
    if (Udetail?.workout_policy_accepted) {
      setDefaultActive(false);
    }
  }, [Udetail]);
  return (
    <Stack.Navigator
      initialRouteName="Workouts"
      screenOptions={{
        headerShown: false,
      }}>
      {DefaultActive && <Stack.Screen name="Workouts" component={Workouts} />}
      <Stack.Screen name="WorkoutList" component={WorkoutList} />
      <Stack.Screen name="Calender" component={Calender} />
      <Stack.Screen name="AudioSetting" component={AudioSetting} />
      <Stack.Screen name="WorkoutSetting" component={WorkoutSetting} />
      <Stack.Screen name="WorkoutTimer" component={WorkoutTimer} />
    </Stack.Navigator>
  );
};

const Homestack = () => {
  return (
    <Stack.Navigator
      firstRoute="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="TableContentList" component={TableContentList} />
      <Stack.Screen name="HomePolicy" component={HomePolicy} />
      <Stack.Screen name="Workouts" component={Workouts} />
      <Stack.Screen name="WorkoutList" component={WorkoutList} />
      <Stack.Screen name="Calender" component={Calender} />
      <Stack.Screen name="AlarmSetting" component={AlarmSetting} />
      <Stack.Screen name="WorkoutSetting" component={WorkoutSetting} />
      <Stack.Screen name="AudioSetting" component={AudioSetting} />
      <Stack.Screen name="WorkoutTimer" component={WorkoutTimer} />
      <Stack.Screen name="WorkoutHistory" component={WorkoutHistory} />
      <Stack.Screen name="Subscription" component={Subscription} /> 
      <Stack.Screen name="MyPlan" component={MyPlan} />
      <Stack.Screen name="Upgrade_plan" component={Upgrade_plan} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouorteName="Setting"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Workouts" component={Workouts} />
      <Stack.Screen
        name="WorkoutSetting"
        component={WorkoutSetting}></Stack.Screen>
         <Stack.Screen name="AudioSetting" component={AudioSetting} />
         <Stack.Screen name="Home" component={Home}></Stack.Screen>
      
    </Stack.Navigator>
  );
};

function BottomTabs() {
  const {Female} = useContext(Context);
  const navigation = useNavigation();
  useEffect(() => {
    return () => {
      navigation.setParams({ screen: 'Setting' })
      navigation.setParams({ screen: 'WorkoutList' })
      navigation.setParams({ screen: 'Home' })
    }
  }, [navigation])
  

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: scale(55),
            backgroundColor: '#FFF4DE',
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          options={({navigation}) => ({
            tabBarButton: props => (
              <TabButton
                color={Female.color}
                title={'Home'}
                props={props}
                src={!Female.gender ? img.home_blue : img.home}
                navigation={navigation}
              />
            ),
          })}
          name="Home"
          component={Homestack}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: 'Home' }),
          })}
        />

        <Tab.Screen
          options={({navigation}) => ({
            tabBarButton: props => (
              <TabButton
                color={Female.color}
                title={'Workouts'}
                props={props}
                src={!Female.gender ? img.workout_blue : img.workout}
                navigation={navigation}
              />
            ),
          })}
          name="Workouts"
          component={Workoutstack}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: 'WorkoutList' }),
          })}
        />

        <Tab.Screen
          options={({navigation}) => ({
            tabBarButton: props => (
              <TabButton
                color={Female.color}
                title={'Customize'}
                props={props}
                src={!Female.gender ? img.customize_blue : img.customize}
                navigation={navigation}
              />
            ),
          })}
          name="Customize"
          component={Customize}
        />

        <Tab.Screen
          options={({navigation}) => ({
            tabBarButton: props => (
              <TabButton
                color={Female.color}
                title={'Settings'}
                props={props}
                src={!Female.gender ? img.setting_blue : img.setting}
                navigation={navigation}
              />
            ),
          })}
          name="Settings"
          component={SettingStack}
          
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: 'Setting' }),
          })}
        />
      </Tab.Navigator>
      <LinearGradient
        colors={['transparent', 'black']}
        style={{
          height: hp(5),
          width: wp(100),
          position: 'absolute',
          bottom: scale(55),
          opacity: 0.1,
        }}></LinearGradient>
    </View>
  );
}

export default function Dashboardstack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Workouts" component={Workouts} />
      <Stack.Screen name="Customize" component={Customize} />
      <Stack.Screen name="WorkoutTimer" component={WorkoutTimer} />
      <Stack.Screen name="WorkoutSetting" component={WorkoutSetting} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="Calender" component={Calender} />
      <Stack.Screen name="MyPlan" component={MyPlan} />
      <Stack.Screen name="Upgrade_plan" component={Upgrade_plan} />
      <Stack.Screen name="TableContentList" component={TableContentList} />
      <Stack.Screen name="TableContent" component={TableContent} />
      <Stack.Screen name="HomePolicy" component={HomePolicy} />
      <Stack.Screen name="WorkoutList" component={WorkoutList} />
      <Stack.Screen name="Contactus" component={Contactus} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="WorkoutHistory" component={WorkoutHistory} />
      <Stack.Screen name="AlarmSetting" component={AlarmSetting} />
      <Stack.Screen name="AudioSetting" component={AudioSetting} />
    </Stack.Navigator>
  );
}

const Test = () => <View style={{flex: 1, backgroundColor: 'red'}}></View>;

const TabButton = ({src, navigation, props, title, color}) => {
  let Select = props.accessibilityState.selected;

  return (
    <TouchableOpacity
      style={{height: '100%', width: wp(25)}}
      onPress={() => navigation.navigate(title)}>
      <Image
        source={src}
        style={{
          height: '40%',
          width: '100%',
          resizeMode: 'contain',
          marginTop: '13%',
        }}
      />
      <MyText
        title={title}
        style={{
          textAlign: 'center',
          fontSize: scale(10),
          color: Select ? color : '#9F9F9F',
        }}
      />
    </TouchableOpacity>
  );
};
