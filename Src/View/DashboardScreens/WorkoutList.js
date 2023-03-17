// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   ImageBackground,
//   ScrollView,
//   FlatList,
//   RefreshControl
// } from 'react-native';
// import React, { useContext, useEffect, useState } from 'react';
// import { hp, wp } from '../../Components/Globalstyle';
// import { Colors, img } from '../../Components/Config';
// import MyText from '../../Components/Ctext';
// import { scale } from 'react-native-size-matters';
// import { navigate } from '../../Components/Config';
// import { Context } from '../../../Shared/Provider';
// import ToggleSwitch from 'kegel';
// import moment from 'moment'
// export default function WorkoutList({ }) {
//   const { Female, image_base_url, setaudiotrack,getWorkoutList, setTimerValue, setgetWorkoutList, API,  setweekCount, setLoader, saveAudio, setsaveAudio } = useContext(Context);
//   const [data, setdata] = useState('')
//   const [isO, onToggl] = useState(false);
//   const [userdetail, setuserdetail] = useState('')
//   const Dateforsession = moment(new Date()).format("MM-DD-YYYY")
// const [refreshing, setrefreshing] = useState(true)
// useEffect(() => {
//   API.GetSession((e) => { setdata(e.data?._id)}, {date: Dateforsession})
//   API.fetchAudio(e => {setsaveAudio(e.data),setLoader(false)}) 
//   API.Userdetail(e => {setuserdetail(e.data)}) 
//   API.GetWorkoutList(e => {setgetWorkoutList(e.data), userdetail.automaticWorkout == true ? onToggl(true):onToggl(false), setrefreshing(false) })
// }, [])
// useEffect(() => { 
//   setLoader(true)
//   API.WorkoutListToggle((e) => { setLoader(false)
//     API.GetWorkoutList(e => {
//       setgetWorkoutList(e.data)})
//    },{})
// }, [isO])
// const loadWorkoutList = ()=>{
//   API.GetWorkoutList(e => {
//   setgetWorkoutList(e.data);
//   setrefreshing(false)
//   })
// }
//   const calenderView = (item) => {
//     setLoader(true)
//     API.getTimerValue((e) => {
//       setweekCount(item)
//       setTimerValue(e.data)
      
//       if(userdetail.automaticWorkout == true && userdetail.startWeekStatus ==false ){
//         API.selectStartWeek((e) => {
//          data && saveAudio ? navigate('WorkoutTimer') : data ? navigate('WorkoutSetting') : navigate('Calender')
//          }, {week: item})
//       }else{
//         data && saveAudio? API.fetchAudio(e => { setaudiotrack(e?.data)
//           data && saveAudio ? navigate('WorkoutTimer') : data ? navigate('WorkoutSetting') : navigate('Calender')
//          }) :
//         setLoader(false)
//       }
      
   
//     }, {
//       workout_week: item,
//     })

//   }

//   return (
//     <View
//       style={{
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#FFF4DE',
//         alignItems: 'center',
//         flex: 1,
//         paddingHorizontal: wp(3),
//       }}>
//       <ScrollView showsVerticalScrollIndicator={false}  refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={loadWorkoutList} />
//   } >
//         <ImageBackground
//           borderRadius={10}
//           style={{
//             height: wp(40),
//             width: wp(93),
//             justifyContent: 'center',
//             marginTop: hp(3),
//           }}
     
//           source={Female.type=='female'?img.workout_list_banner:img.male_programs}>
//           <MyText
//             style={{ fontSize: scale(15), marginLeft: wp(4) }}
//             white
//             mextrabold
//             title={'Workout Programs'}
//           />
//         </ImageBackground>
//    <View style={{height:50,width:'90%',backgroundColor:'#d9d8d7',alignSelf:'center',marginTop:15,borderRadius:8,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
//    <MyText
//                 style={{  fontSize: scale(14), color:!Female.gender ? Colors.blue  : Colors.pink,}}
               
//                 poppinsbold
//                 title={isO == true ? 'Automatic Workout':'FreeStyle Workout'}
//               />
//    <ToggleSwitch
//                   size="small"
//                   style={{ }}
//                   isOn={isO}
//                   onColor="#6AC259"
//                   offColor="red"
//                   onToggle={isO => {onToggl(isO)}}
//                   animationSpeed={200}
//                 />
//    </View>
//         <FlatList
//           data={getWorkoutList?.workout_list}
//           numColumns="2"
//           keyExtractor={(item)=>item._id}
//           showsHorizontalScrollIndicator={false}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item,index }) => {
//             return (
//               <View style={{ padding: 15 }}>
//                 <TouchableOpacity onPress={() => {  isO == false ? calenderView(item?.workout_week) : item.enabled == true && calenderView(item?.workout_week)}}>
//                   <View>
//                     <Image
//                       style={{
//                         height: wp(33.3),
//                         width: wp(39.3),
//                         resizeMode: 'contain',
//                         marginTop: hp(1),
//                         opacity: item.enabled == true ? null : 0.2 

//                         // opacity:isO == true && item.enabled == true ? null:isO == false&&item.enabled == true?null: 0.2
//                       }}
//                       source={{ uri: !Female.gender ? image_base_url + item?.male_workout_image : image_base_url + item?.female_workout_image }}
//                     ></Image>
//                     <Text style={{color:!Female.gender ? Colors.blue  : Colors.pink,fontWeight:'500',top:50,left:35,position:'absolute'}}>{item.week_completed == true ? 'completed' :null}</Text>
//                   </View>
//                   <View
//                     style={{
//                       alignItems: 'center',
//                       backgroundColor: !Female.gender
//                         ? Colors.blue
//                         : Colors.pink,
//                       width: wp(39.3),
//                       height: wp(10),
//                       justifyContent: 'center',
//                       borderBottomLeftRadius: 15,
//                       borderBottomRightRadius: 15,
//                       marginTop: -wp(4),
//                     }}>
//                     <MyText
//                       style={{ fontSize: scale(13) }}
//                       white
//                       poppinsbold
//                       title={item?.workout_name}
//                     />
               
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             );
//           }}
//         />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  RefreshControl
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import { Colors, img } from '../../Components/Config';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import { navigate } from '../../Components/Config';
import { Context } from '../../../Shared/Provider';
import ToggleSwitch from 'kegel';
import moment from 'moment'
export default function WorkoutList({ }) {
  const { Female, image_base_url, setaudiotrack,getWorkoutList, setTimerValue, setgetWorkoutList, API,  setweekCount, setLoader, saveAudio, setsaveAudio } = useContext(Context);
  const [data, setdata] = useState('')
  const [isO, onToggl] = useState(false);
  const [userdetail, setuserdetail] = useState('')
  const Dateforsession = moment(new Date()).format("MM-DD-YYYY")
const [refreshing, setrefreshing] = useState(true)
useEffect(() => {
  API.GetWorkoutList(e => {setgetWorkoutList(e.data), setrefreshing(false) })
  API.Userdetail(e => {setuserdetail(e.data),e?.data?.automaticWorkout == true ? onToggl(true):onToggl(false)}) 
  API.GetSession((e) => { setdata(e.data?._id)}, {date: Dateforsession})
  API.fetchAudio(e => {setsaveAudio(e.data),setLoader(false)}) 
}, [])
useEffect(() => { 
  setLoader(true)
  API.WorkoutListToggle((e) => {   API.GetWorkoutList(e => {setgetWorkoutList(e.data)})
     setLoader(false)
   },{})


}, [isO])
const loadWorkoutList = ()=>{
  API.GetWorkoutList(e => {
  setgetWorkoutList(e.data);
  setrefreshing(false)
  })
}
  const calenderView = (item) => {
    setLoader(true)
    API.getTimerValue((e) => {
      setweekCount(item)
      setTimerValue(e.data)
      if(userdetail.automaticWorkout == true && userdetail.startWeekStatus ==false ){
        API.selectStartWeek((e) => {
         data && saveAudio ? navigate('WorkoutTimer') : data ? navigate('WorkoutSetting') : navigate('Calender')
         }, {week: item})
      }else{
        data && saveAudio? API.fetchAudio(e => { setaudiotrack(e?.data)
          data && saveAudio ? navigate('WorkoutTimer') : data ? navigate('WorkoutSetting') : navigate('Calender')
         }) :
        setLoader(false)
      }
    }, {
      workout_week: item,
    })

  }
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF4DE',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: wp(3),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}  refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadWorkoutList} />
  } >
        <ImageBackground
          borderRadius={10}
          style={{
            height: wp(40),
            width: wp(93),
            justifyContent: 'center',
            marginTop: hp(3),
          }}
     
          source={Female.type=='female'?img.workout_list_banner:img.male_programs}>
          <MyText
            style={{ fontSize: scale(15), marginLeft: wp(4) }}
            white
            mextrabold
            title={'Workout Programs'}
          />
        </ImageBackground>
   <View style={{height:50,width:'90%',backgroundColor:'#d9d8d7',alignSelf:'center',marginTop:15,borderRadius:8,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
   <MyText
                style={{  fontSize: scale(14), color:!Female.gender ? Colors.blue  : Colors.pink,}}
               
                poppinsbold
                title={'Automatic Workout'}
              />
   <ToggleSwitch
                  size="small"
                  style={{ }}
                  isOn={isO}
                  onColor="#6AC259"
                  offColor="red"
                  onToggle={isO => {onToggl(isO)}}
                  animationSpeed={200}
                />
   </View>
        <FlatList
          data={getWorkoutList?.workout_list}
          numColumns="2"
          keyExtractor={(item)=>item._id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item,index }) => {
          
            return (
              <View style={{ padding: 15 }}>
                <TouchableOpacity onPress={() => {  isO == false ? calenderView(item?.workout_week) : item.enabled == true && isO == true && calenderView(item?.workout_week)}}>
                  <View>
                    <Image
                      style={{
                        height: wp(33.3),
                        width: wp(39.3),
                        resizeMode: 'contain',
                        marginTop: hp(1),
                        opacity: item.enabled == true ?null : 0.2  

                        // opacity:isO == true && item.enabled == true ? null:isO == false&&item.enabled == true?null: 0.2
                      }}
                      source={{ uri: !Female.gender ? image_base_url + item?.male_workout_image : image_base_url + item?.female_workout_image }}
                    ></Image>
                    <Text style={{color:!Female.gender ? Colors.blue  : Colors.pink,fontWeight:'500',top:50,left:35,position:'absolute'}}>{item.week_completed == true ? 'completed' :null}</Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: !Female.gender
                        ? Colors.blue
                        : Colors.pink,
                      width: wp(39.3),
                      height: wp(10),
                      justifyContent: 'center',
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      marginTop: -wp(4),
                    }}>
                    <MyText
                      style={{ fontSize: scale(13) }}
                      white
                      poppinsbold
                      title={item?.workout_name}
                    />
               
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

