import { StyleSheet, View, Image, ScrollView, FlatList,Dimensions } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import { Colors, img, navigate } from '../../Components/Config';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import { Context } from '../../../Shared/Provider';
import ToggleSwitch from 'kegel';
import Header from '../../Components/Header';
import Buttons from '../../Components/Buttons';
import {Femalecheck, Malecheck} from '../../Components/Customcheck';
import Sound from 'react-native-sound'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function WorkoutSetting({navigation}) {
  const {API, audio_base_url, GetAudioList, setGetAudioList, setTimerValue,Detail,weekCount, setLoader,} = useContext(Context);
  const [isOn, onToggle] = useState(false);
  const [isO, onToggl] = useState(false);
  const [audioid, setaudioid] = useState('')
  const { Token } = Detail

useEffect(() => {
  setLoader(true)
  API.GetAllAudioList(e => {
    setGetAudioList(e.data);
    setLoader(false)
   }) 
   setLoader(false)
   API.getTimerValue((e) => {

    setTimerValue(e.data)
    setLoader(false)

  }, {
    workout_week: weekCount,}) 
  },[]);


const live =(item)=>{
  setaudioid(item?._id)

 const  sound = new Sound( audio_base_url + item?.intro_audio,'',(error)=>{
    if(error){
      alert('error'+ "" + error.message);
      return;
    }
    sound.play(()=>{
      sound.release()
    })
   })
}
const start = (item,index) => {

  setaudioid(item?._id)
  const sound = new Sound(item?.intro_audio,'',(error)=>{
    if(error){
      alert('error'+ "" + error.message);
      return;
    }
    sound.play(()=>{
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
     .then(result => { 
      if(result){
        AsyncStorage.setItem('time',true)
        setLoader(false)
        navigate('WorkoutTimer')
      }
       } )
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
        <MyText
          style={{
            textAlign: 'center',
            paddingTop: hp(3),
            fontSize: scale(16),
            color: 'black',
          }}
          poppinsbold
          title={'Toggle Switches'}
        />
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
                  onToggle={isO => onToggl(isO)}
                  animationSpeed={200}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            paddingTop: hp(3),
            borderColor: '#707070',
           
          }}></View>
      
        <MyText
          style={{
            textAlign: 'center',
            paddingTop: hp(3),
            fontSize: scale(16),
            color: 'black',
          }}
          poppinsbold
          title={'Audio Coach Selection (Synthesized)'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: hp(3),
            marginTop: -hp(2),
          }}>
          <View
            style={{
              height: wp(15),
              width: wp(38),
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: hp(5),
              flexDirection: 'row',
            }}>
            <Image
              style={{height: hp(5), width: wp(15), resizeMode: 'contain'}}
              source={img.female1}></Image>
            <MyText
              style={{textAlign: 'center', fontSize: scale(15)}}
              white
              poppinsbold
              title={'Female'}
            />
          </View>
          <View
            style={{
              height: wp(15),
              width: wp(38),
              backgroundColor: Colors.blue,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: hp(5),
              flexDirection: 'row',
            }}>
            <Image
              style={{height: hp(5), width: wp(15), resizeMode: 'contain'}}
              source={img.male1}></Image>
            <MyText
              style={{textAlign: 'center', fontSize: scale(16)}}
              white
              poppinsbold
              title={'Male'}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: wp(7)}}>
          <FlatList
            data={ GetAudioList?.recorded_audio_coach == undefined? GetAudioList?.search_data?.filter(character => character.type == 'female'): GetAudioList?.recorded_audio_coach?.search_data?.filter(character => character.type == 'female')}
            showsVerticalScrollIndicator={false}
            renderItem={({item,index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: wp(4),
                    paddingTop: hp(2),
                  }}>
                    {/* start(item,index) */}
                  <View style={{flexDirection: 'row', width: '45%'}}>
                  { item?.type == 'female'  ? <Femalecheck value={isOn} id={item?._id}    onCheck={e =>start(item,index)} />:null}
                    <MyText
                      style={{
                        textAlign: 'center',
                        fontSize: scale(14),
                        marginTop: hp(0.5),
                        left: wp(2),
                      }}
                      black
                      poppinsemibold
                      title={item?.audio_coach_name}
                    />
                  </View>
                </View>
              );
            }}
          />
          <FlatList
            data={ GetAudioList?.recorded_audio_coach == undefined? GetAudioList?.search_data?.filter(character => character.type == 'male'): GetAudioList?.recorded_audio_coach?.search_data?.filter(character => character.type == 'male')}
            showsVerticalScrollIndicator={false}
            renderItem={({item ,index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: wp(4),
                    paddingTop: hp(2),
                  }}>
                  <View style={{flexDirection: 'row', width: -wp(2)}}>
                    <Malecheck value={isOn} id={item?._id}  onCheck={e =>{start(item,index)}} />
                    <MyText
                      style={{
                        textAlign: 'center',
                        fontSize: scale(15),
                        marginTop: hp(0.5),
                        left: wp(2),
                      }}
                      black
                      poppinsemibold
                      title={item?.audio_coach_name}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
        {/* =========================================================================== */}
     {   GetAudioList?.recorded_audio_coach == undefined?null:  
        <MyText
          style={{
            textAlign: 'center',
            paddingTop: hp(3),
            fontSize: scale(16),
            color: 'black',
          }}
          poppinsbold
          title={'Live Audio Coach Selection'}
        />}
      {   GetAudioList?.recorded_audio_coach == undefined?null:   <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: hp(3),
            marginTop: -hp(2),
          }}>
          <View
            style={{
              height: wp(15),
              width: wp(38),
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: hp(5),
              flexDirection: 'row',
            }}>
            <Image
              style={{ height: hp(5), width: wp(15), resizeMode: 'contain' }}
              source={img.female1}></Image>
            <MyText
              style={{ textAlign: 'center', fontSize: scale(15) }}
              white
              poppinsbold
              title={'Female'}
            />
          </View>
          <View
            style={{
              height: wp(15),
              width: wp(38),
              backgroundColor: Colors.blue,
              alignItems: 'center',
              borderRadius: 10,
              marginTop: hp(5),
              flexDirection: 'row',
            }}>
            <Image
              style={{ height: hp(5), width: wp(15), resizeMode: 'contain' }}
              source={img.male1}></Image>
            <MyText
              style={{ textAlign: 'center', fontSize: scale(16) }}
              white
              poppinsbold
              title={'Male'}
            />
          </View>
        </View>}
      {  GetAudioList?.recorded_audio_coach == undefined?null:  <View style={{ flexDirection: 'row', paddingHorizontal: wp(7) }}>
        <FlatList
          data={GetAudioList?.live_audio_coach?.search_data.filter(character => character.type == 'female')}
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: wp(4),
                  paddingTop: hp(2),
                }}>
                <View style={{flexDirection: 'row', width: '45%'}}>
                { item?.type == 'female' ? <Femalecheck value={isOn} id={item?._id}  onCheck={e =>{ live(item,index)}} />:null}
                  <MyText
                    style={{
                      textAlign: 'center',
                      fontSize: scale(14),
                      marginTop: hp(0.5),
                      left: wp(2),
                    }}
                    black
                    poppinsemibold
                    title={item?.audio_coach_name}
                  />
                </View>
              </View>
            );
          }}
        />
        <FlatList
          data={GetAudioList?.live_audio_coach?.search_data.filter(character => character.type == 'male')}
          showsVerticalScrollIndicator={false}
          renderItem={({item ,index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: wp(4),
                  paddingTop: hp(2),
                }}>
                <View style={{flexDirection: 'row', width: -wp(2)}}>
                  <Malecheck value={isOn} id={item?._id}  onCheck={e => { live(item,index)}} />
                  <MyText
                    style={{
                      textAlign: 'center',
                      fontSize: scale(15),
                      marginTop: hp(0.5),
                      left: wp(2),
                    }}
                    black
                    poppinsemibold
                    title={item?.audio_coach_name}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
}
        <View
          style={{
            marginBottom: hp(5),
            paddingTop: hp(5),
            paddingHorizontal: wp(5),
          }}>
          <Buttons onPress={TimerValue} title={'Workout'} />
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
});

const data = [
  { id: '01', img: require('../../images/check_select_female.png'), name: 'Nancy' },
  { id: '02', img: require('../../images/check_unselect_female.png'), name: 'Margie' },
  { id: '03', img: require('../../images/check_unselect_female.png'), name: 'Cerys' },
  { id: '04', img: require('../../images/check_unselect_female.png'), name: 'Linda' },
  { id: '05', img: require('../../images/check_unselect_female.png'), name: 'Zira' },
  { id: '06', img: require('../../images/check_unselect_female.png'), name: 'Aria' },
];




const ss = [
  { id: '01', img: require('../../images/check_unselect_male.png'), name: 'Guy' },
  { id: '02', img: require('../../images/check_unselect_male.png'), name: 'Ben' },
  { id: '03', img: require('../../images/check_unselect_male.png'), name: 'Joe' },
  { id: '04', img: require('../../images/check_unselect_male.png'), name: 'Ron' },
  { id: '05', img: require('../../images/check_unselect_male.png'), name: 'Shane' },
  { id: '06', img: require('../../images/check_unselect_male.png'), name: 'Matt' },
];
    