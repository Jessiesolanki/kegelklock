
import { StyleSheet, View, Image, ScrollView, FlatList,Dimensions} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import { Colors, img, navigate } from '../../Components/Config';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import { Context } from '../../../Shared/Provider';
import ToggleSwitch from 'kegel';
import Header from '../../Components/Header';
import Buttons from '../../Components/Buttons';
import Sound from 'react-native-sound'
import { Vibration} from 'react-native'
import AudioList from '../../Components/AudioList';
export default function AudioSetting({navigation}) {
  const {API,audiotrack, setaudiotrack, setSloader, GetAudioList, setGetAudioList,Detail,audio_base_url,weekCount, setLoader,} = useContext(Context);
  const [isOn, onToggle] = useState(false);
  const [isO, onToggl] = useState(false);
  const [audioid, setaudioid] = useState('')
  const [show, setShow] = useState(false)
  const { Token } = Detail
useEffect(() => {
  setLoader(true)
  API.GetAllAudioList(e => { setGetAudioList(e.data),setLoader(false)}) 
  API.fetchAudio(e => { setaudiotrack(e?.data?.audio_coaches?._id) ,audiotrack ? onToggle(true) : null  })
  },[]);
console.log(audiotrack,'====')

const live =(item)=>{
  setaudioid(item?._id)
  setSloader(true)
 const  sound = new Sound(audio_base_url +item?.intro_audio,'',(error)=>{
    if(error){
      alert('error'+ "" + error.message);
      return;
    }
   
    sound.play(()=>{
      setSloader(false)
      sound.release()
    })
   })
}
const start = (item,index) => {
  setaudioid(item?._id)
  setSloader(true)
  const sound = new Sound(item?.intro_audio,'',(error)=>{
    if(error){
      alert('error'+ "" + error.message);
      return;
    }
   
    sound.play(()=>{
      setSloader(false)
      sound.release()
    })
   })
  

      
}

const TimerValue = () =>{
  setLoader(true)
   var myHeaders = new Headers();
   myHeaders.append("Authorization", Token);
   myHeaders.append("Content-Type", "application/json");
   
   var raw = JSON.stringify({
     "audio_coach_ids": [
      audioid
     ]
   });
   
   var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
   
   fetch("https://kegelklock.com/api/setAudioCoach", requestOptions)
     .then(response => response.json())
     .then(result => {  setLoader(false)
      navigate('WorkoutList')} )
     .catch(error => console.log('error', error));
 
}
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff6d2',

      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: hp(14),
            width: wp(100),
            backgroundColor: Colors.Theme,
          }}>
          <View style={{ marginTop: hp(2) }}>
            <Header left onBackPress={() => navigation.goBack()} />
          </View>
          <View style={{ alignItems: 'center', marginTop: -hp(5.5) }}>
            <Image
              style={{
                height: hp(10),
                width: wp(40),
                resizeMode: 'contain',
              }}
              source={img.logo1}></Image>
            <MyText
              style={{ fontSize: scale(18), marginTop: -wp(2.8) }}
              black
              poppinsbold
              title={'SETTINGS'}
            />
          </View>
        </View>
        <View style={{backgroundColor:'#d9d8d7',alignItems:'center'}}>
        <MyText
          style={{
            textAlign: 'center',
             padding: hp(1),
            fontSize: scale(16),
            color: 'black',
          }}
          poppinsbold
          title={'Toggle Switches'}
        />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: wp(5),
            alignItems: 'center',
            marginTop: -hp(1),
          }}>
          <View style={{ width: '12%', justifyContent: 'center' }}>
            <Image style={styles.shadow} source={img.audiio}></Image>
            <Image style={styles.shadow} source={img.vibrate}></Image>
          </View>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(5),
            }}>
            <View style={{ justifyContent: 'center' }}>
              <MyText
                style={{ marginTop: hp(1), fontSize: scale(14) }}
                black
                poppinsbold
                title={'Audio Coach '}
              />
              <MyText
                style={{ marginTop: hp(2), fontSize: scale(14), top: hp(2) }}
                black
                poppinsbold
                title={'Vibrate '}
              />
            </View>
            <View>
              <View style={{ marginTop: wp(5) }}>
                <ToggleSwitch
                  size="small"
                  labelStyle={{ backgroundColor: 'blue' }}
                  isOn={isOn}
                  onColor="#6AC259"
                  offColor="red"
                  onToggle={isOn => {
                    onToggle(isOn);
                  }}
                  animationSpeed={200}
                />
                <ToggleSwitch
                  size="small"
                  style={{ marginTop: wp(5) }}
                  isOn={isO}
                  onColor="#6AC259"
                  offColor="red"
                  onToggle={isO => {Vibration.vibrate(1000)
                    ,onToggl(isO)}}
                  animationSpeed={200}
                />
              </View>
            </View>
          </View>
        </View>
        <AudioList dataFemale={ GetAudioList?.recorded_audio_coach == undefined? GetAudioList?.search_data?.filter(character => character.type == 'female'): GetAudioList?.recorded_audio_coach?.search_data?.filter(character => character.type == 'female')} dataMale={ GetAudioList?.recorded_audio_coach == undefined? GetAudioList?.search_data?.filter(character => character.type == 'male'): GetAudioList?.recorded_audio_coach?.search_data?.filter(character => character.type == 'male')} isOn={isOn}  start={start} title={'Audio Coach Selection (Synthesized)'}  />
        {/* =========================================================================== */}
        {   GetAudioList?.recorded_audio_coach == undefined?null: 
        <AudioList dataFemale={ GetAudioList?.live_audio_coach == undefined? GetAudioList?.search_data?.filter(character => character.type == 'female'): GetAudioList?.live_audio_coach?.search_data?.filter(character => character.type == 'female')} dataMale={ GetAudioList?.live_audio_coach == undefined? GetAudioList?.search_data?.filter(character => character.type == 'male'): GetAudioList?.live_audio_coach?.search_data?.filter(character => character.type == 'male')} isOn={isOn}  start={live} title={'Live Audio Coach Selection'}  />}
        <View
          style={{
            marginBottom: hp(5),
            paddingTop: hp(5),
            paddingHorizontal: wp(5),
          }}>
          <Buttons onPress={TimerValue} title={'Save'} />
        </View>
      </ScrollView>
    </View>
   
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    height: hp(5),
    width: wp(15),
    resizeMode: 'contain',
    marginTop: hp(3),
  },
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
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 30,
    marginTop: hp(30),
  },
});




