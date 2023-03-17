  import {
  StyleSheet,

  View,
  Modal,
Image,
  ActivityIndicator,

} from 'react-native';
import React, { createContext, useState ,useRef,useContext} from 'react';
import { Colors } from '../Src/Components/Config';
import axios from 'axios';

import { hp } from '../Src/Components/Globalstyle';

import { navigate, setroot } from '../Src/Components/Config';
import {
  ALERT_TYPE,
  Dialog,
} from 'react-native-alert-notification';
//staging_url:- http://54.201.160.69:3250/api/   
// live_url:-   https://kegelklock.com/api/
const BASH_URL = 'https://kegelklock.com/api/';

export const Context = createContext();

import MMKVStorage, { create } from 'react-native-mmkv-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new MMKVStorage.Loader().withEncryption().initialize();

const useStorage = create(storage);

export default function Provider({ children }) {
  const [loader, setLoader] = useState(false);

  const [Fromiinitial, setFormiinital] = useStorage('login', {
    email: '',
    password: '',
    isvalue: false,
  });
  const [Logininitialvalue, setLogininitialvalue] = useStorage('Logininitialvalue', {
    email: '',
    password: '',
    isvalue: false,
  });
  const [LogoutActive, setLogoutActive] = useState(false);

  const [color, setColor] = useState(false);
  const [GetTimerValue, setTimerValue] = useState('');
  const [yellowbtn, setyellowbtn] = useState(0);
  const [getNotificationList, setNotificationList] = useState('')
  const [Detail, setDetail] = useStorage('Detail', { Token: '', route: '' });
  const [getTableList, setTableList] = useState('')
  const [getWorkoutHistory, setWorkoutHistory] = useState('')
  const [checkboxValue, setcheckboxValue] = useState('')
  const [Sloader, setSloader] = useState(false)
  // const [RouteDetail, setRouteDetail] = useStorage('RouteDetail', "");
  const [id, setid] = useState('')
  const [calendar, setcalendar] = useState('')
  const [Buttonactive, setbuttonactive] = useStorage('Buttonactive', true);
  const [planGendar, setplanGendar] = useState('');
  const [Getsession, setsession] = useState('');
  const [Udetail, setUserdetail] = useStorage('usedetail', undefined);
  const [GetTime, setTime] = useState('');
  const [GetAudioList, setGetAudioList] = useState('')
  const [getWorkoutList, setgetWorkoutList] = useState('')
  const [props, setprops] = useState('1')
  const [fstConstraction, setfstConstraction] = useState(1)
  const [registerData, setregisterData] = useState('')
  const [loading, setLoading] = useState(false)
  const [Checked, setChecked] = useState(false);
  const [firsttime, setfirsttime] = useState(1)
  const [AudioData, setAudioData] = useState('')
const [fetchAudio, setfetchAudio] = useState('')
const [genderDataTokenId, setgenderDataTokenId] = useState('')
const [weekCount, setweekCount] = useState('')
const [saveAudio, setsaveAudio] = useState('')
const [stoprest, setstoprest] = useState(false)
const [userData, setuserData] = useState('')

const valueRef = useRef();
  const [Female, setFemale] = useStorage('gender', {
    gender: true,
    color: Colors.pink,
    type: 'female',
  });
  const audio_base_url = 'https://kegelbucket.s3.us-east-2.amazonaws.com/'
  const image_base_url = "https://kegelklock.com/assets/images/"
  const instance = axios.create({
    baseURL: BASH_URL || '',
  });

  const [Erroractive, setErrorActive] = useState(false);
  const [Error, setError] = useState({ title: '', error: true });
  const [GetBuyPlan, setBuyPlan] = useState('');
  const [refresh, setrefresh] = useState(true);
  const [getAudioid, setgetAudioid] = useState()
  const [genderId, setgenderId] = useState('')
  const [user_id, setuser_id] = useStorage('login', '');
  const [check, setcheck] = useState('')
  const [audiotrack, setaudiotrack] = useState('')
  const [Audiostart, setAudiostart] = useState({key :1 , value : false})
  var myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');

  const Request = {
    Post: (route, body, success, show) => {
     setLoader(true);
      const { Token } = Detail;
      var raw = JSON.stringify(body);
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', Token);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(BASH_URL + route, requestOptions)
        .then(response => response.json())
        .then(async result => {
          if (show) {
            if (!result.status) {
              Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Message',
                textBody: result.message,
                button: 'close',
              onPressButton: () => {
                  Dialog.hide();
                },
              });
            } else {
              success(result);
            }
          } else {
            if (!result.status) {            
              Dialog.show({   
                type: ALERT_TYPE.WARNING,
                title: 'Messages',
                textBody: result.message,
                button: 'close',
              });
            
            } else {           
                success(result); 
            }
          }
        })
        .catch(error => console.log('error', error));

      setTimeout(() => {
        setLoader(false);
      }, 1500);
    },
    LoginPost: (route, body, success, show) => {
      setLoader(true);
 
 
       const { Token } = Detail; 
       var raw = JSON.stringify(body); 
       let myHeaders = new Headers();
       myHeaders.append('Content-Type', 'application/json');
       myHeaders.append('Authorization', Token); 
       var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow',
       };
 
       fetch(BASH_URL + route, requestOptions)
         .then(response => response.json())
         .then(async result => {

             if (!result.status) {
              if(result.message==='No_Gender'){
             
                setuser_id(result.data)
                navigate('Gender', result);              
              }else{
                Dialog.show({
                  type: ALERT_TYPE.WARNING, 
                  title: 'Message',
                  textBody: result.message,
                  button: 'close',
                  onPressButton: () => {
                    Dialog.hide();
                  },
                });
              }
             } else {
               success(result);
             }
       
         })
         .catch(error => console.log('error', error));
 
       setTimeout(() => {
         setLoader(false);
       }, 1500);
     },
    PostAudio: (route, body, success, show) => {
      setLoader(true);
 
      const { Token } = Detail;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", Token);
      myHeaders.append("Content-Type", "application/json");    
      var raw = JSON.stringify(body);     
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(BASH_URL + route, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
       setTimeout(() => {
         setLoader(false);
       }, 1500);
     },   


    ForgotPost: (route, body, success, show) => {
      const { Token } = Detail;
      var raw = JSON.stringify(body);
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', Token);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(BASH_URL + route, requestOptions)
        .then(response => response.json())
        .then(async result => {
          if (show) {
            if (!result.status) {
              Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Message',
                textBody: result.message,
                button: 'close',
                onPressButton: () => {
                  Dialog.hide();
                },
              });
            } else {
              success(result);
            }
          } else {
            if (!result.status) {
              Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Message',
                textBody: result.message,
                button: 'close',
              });
            } else {
              success(result);
            }
          }
        })
        .catch(error => console.log('error', error));
    },
    Get: (route, body, success, show) => {
      const { Token } = Detail;
      let myHeaders = new Headers();
      myHeaders.append('Authorization', Token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(BASH_URL + route, requestOptions)
        .then(response => response.json())
        .then(result => success(result))
        .catch(error => console.log('error', error));
    },

  };

  const { Post, Get, ForgotPost,LoginPost ,PostAudio} = Request;

  const API = {
    Register: (success, body) => Post('user/user_sign_up', body, success, false),

    Login: (success, body) =>
    LoginPost('user/user_sign_in', body, success, false),

    SelectGender: (success, body) =>
    LoginPost('user/updateUserGender', body, success, false),

    ChangePassword: (success, body) =>
      ForgotPost('user/user_change_password', body, success, false),


    Forgot: (success, body) =>
      ForgotPost('user/forgotPassword', body, success, false),

    Forgot_password: (success, body) =>
      Post('user/ResetPassword', body, success, false),

    Userdetail: (success, body) => Get('userDetail', body, success, false),

    SubscriptionList: (success, body) =>
      Get('user/subscription_plan_list', body, success, false),

    getUserSession: (success, body) =>
      Post('createSession', body, success, false),

      selectStartWeek: (success, body) =>
      Post('selectStartWeek', body, success, false),
    getTimerValue: (success, body) =>
      Post('getWorkoutDetailByWeek', body, success, false),
    getCustomTimerValue: (success, body) =>
      Post('customizeWorkout', body, success, false),
    getSubscriptionList: (success, body) =>
      Post('user/subscription_plan_list', body, success, false),

    removeFirstTimeUser: (success, body) =>
      Get('removeFirstTimeUser', body, success, false),

    GetAllAudioList: (success, body) =>
      Post('getAllAodioCoach', body, success, false),
  
    workoutPolicyAccepted: (success, body) =>
      Get('workoutPolicyAccepted', body, success, false),

    GetWorkoutList: (success, body) =>
      Get('getWorkoutList', body, success, false),

    payment: (success, body) =>
      Post('user/add_subscribed_user', body, success, false),

    GetSession: (success, body) =>
      Post('getSessionsOfDate', body, success, false),

    GetTableList: (success, body) =>
      Get('getFaq', body, success, false),

    NotificationList: (success, body) =>
      Post('listNotification', body, success, false),
      
      subscriptionplan: (success, body) =>
      Get('user/my_subscription_plan', body, success, false),
          
    AudioSetId: (success, body) =>
    PostAudio('setAudioCoach', body, success, false),

    fetchAudio: (success, body) =>
    Post('fetchAudioCoachVoice2', body, success, false),
    CompleteSession: (success, body) =>
    Post('addSessionLog', body, success, false),
    GetWorkoutHistory: (success, body) =>
    Post('getWorkoutHistory', body, success, false),
    WorkoutListToggle: (success, body) =>
    Get('toggleWorkoutType', body, success, false),
   

  };

  return (
    <Context.Provider
      value={{
        Female,
        setFemale,
        loader,stoprest, setstoprest,
        setLoader,Sloader, setSloader,
        setLogoutActive,
        LogoutActive,
        color,AudioData, setAudioData,
        setColor,firsttime, setfirsttime,
        yellowbtn,
        setyellowbtn,
        API,check, setcheck,
        GetBuyPlan,
        setBuyPlan,valueRef,
        setErrorActive,
        setError, getTableList, setTableList,
        Fromiinitial,
        setFormiinital,
        Detail,id, setid,  
        setDetail,audiotrack, setaudiotrack,
        Getsession,
        setsession,checkboxValue, setcheckboxValue,
        Udetail, getNotificationList, setNotificationList,
        props,getAudioid, setgetAudioid,
        setprops,fetchAudio, setfetchAudio,
        user_id,loading, setLoading,
        planGendar,Audiostart, setAudiostart,
        getWorkoutList,
        setgetWorkoutList,
        setplanGendar,genderId, setgenderId,
        setuser_id,saveAudio, setsaveAudio,
        GetTimerValue,
        setTimerValue,calendar, setcalendar, 
        setUserdetail,
        Buttonactive,registerData, setregisterData,
        GetTime,genderDataTokenId, setgenderDataTokenId,
        refresh,fstConstraction, setfstConstraction,
        setrefresh,userData, setuserData,
        GetAudioList,
        setGetAudioList,
        setTime,weekCount, setweekCount,
        setbuttonactive,audio_base_url,
        image_base_url,Checked, setChecked,
        getWorkoutHistory, setWorkoutHistory,
        Logininitialvalue,
        setLogininitialvalue
      }}>
      <Loader loader={loader} setLoader={setLoader} />
       
        {children}
       
    </Context.Provider>
  );
}

const Loader = ({ loader, setLoader }) => (
  <Modal
    statusBarTranslucent
    animationType="slide"
    hardwareAccelerated
    transparent={true}
    visible={loader}
    onRequestClose={() => setLoader(!loader)}>
    <View style={styles.Modelv1}>
      <View style={styles.Modalv2}>
        <ActivityIndicator color={Colors.Theme} />
      </View>
    </View>

  </Modal>
);


export const styles = StyleSheet.create({
  Modelv1: {
    flex: 1,
    backgroundColor: '#00000080',
    alignItems: 'center',
    paddingTop: hp(18),
  },
  Modalv2: {
    flexDirection: 'row'    ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    marginTop: hp(30),
  },
});
