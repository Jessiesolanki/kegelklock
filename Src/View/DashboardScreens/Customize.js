import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import { img, Colors } from '../../Components/Config';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import { Context } from '../../../Shared/Provider';


export default function Customize({ }) {
  const [Active, setActive] = useState(false);
  const { Female, API } = useContext(Context);
  const [visible, setvisible] = useState(false)
  const [prep, setprep] = useState('')
  const [rest, setrest] = useState('')
  const [rep, setrep] = useState('')
  const [sets, setsets] = useState('')
  const [work, setwork] = useState('')
  const [effort, seteffort] = useState('')
  const [getid, setgetid] = useState('')
  
   const FstSlw =[{value:'fast'},{value:'slow'}]
  const count1to15 = [{ value: '01' },{ value: '02' }, { value: '03' }, { value: '04' }, { value: '05' }, { value: '06' }, { value: '07' }, { value: '08' }, { value: '09' }, { value: '10' }, { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }]
  const percent = [{ value: '50%', }, { value: '60%' }, { value: '70%' }, { value: '80%' }, { value: '90%' }, { value: '100%' }]
  const count = [ { value: '03' }, { value: '04' }, { value: '05' }, { value: '06' }, { value: '07' }, { value: '08' }, { value: '09' }, { value: '10' }, { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }]
  const data = [
    { id: '01', name: 'Contraction Type', des: '(Fast Start or Slow Start)', backgroundcolor: Colors.pink, state: prep, },
    { id: '02', name: 'Work', des: '(Do Each Exercise For This Long)', backgroundcolor: Colors.blue, state: work },
    { id: '03', name: 'Rest', des: '(Rest For This Long)', backgroundcolor: '#ffd634', state: rest, },
    { id: '04', name: 'Reps', des: '(1 Rep = 1 Work & 1 Rest Combo)', backgroundcolor: '#03d875', state: rep, },
    { id: '05', name: 'Sets', des: '(1 Set = 1 Minutes Worth of Reps)', backgroundcolor: '#fe7f0b', state: sets, },
    { id: '06', name: 'Efforts', des: '(Select 50% - 100%)', backgroundcolor: '#00d0ff', state: effort, },
  ];

  const setTime = () => {

    API.getCustomTimerValue((e) => {
      setActive(true);
    },
     {
      user_customize_workout: {
        contraction_type:prep,
        work_time: work,
        rest_time: rest,
        reps: rep,
        sets: sets,
        contraction_effort: effort,
      }
    })
   
  }
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff6d2',
        alignItems: 'center',
      }}>
      <Modal

        animationType="slide"
        hardwareAccelerated
        transparent={true}
        visible={Active}
        onRequestClose={() => setActive(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000080',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View
            style={{
              padding: hp(3),
              width: wp(85),
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 25,
            }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={{ height: hp(12), width: hp(12) }}
                source={!Female.gender ? img.blue_tick : img.pink_tick}>
              </Image>
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: scale(28),
                  marginTop: hp(1.5),
                  color: !Female.gender ? Colors.blue : Colors.pink,
                }}
                mbold
                title={'Congratulations'}
              />
              <MyText
                style={{
                  textAlign: 'center',
                  fontSize: scale(13),
                }}
                poppinsemibold
                title={'Your Customization Is Successful'}
              />
              <TouchableOpacity
                onPress={() => { setActive(!Active) }}
                style={{
                  borderRadius: 5,
                  backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
                  width: wp(20),
                  height: wp(8),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: hp(1),
                }}>
                <MyText
                  style={{ textAlign: 'center', fontSize: scale(10) }}
                  white
                  poppinsbold
                  title={'OK'}

                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>
      <Modal

        animationType="slide"
        hardwareAccelerated
        transparent={true}
        visible={visible}
        onRequestClose={() => setvisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000080',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
          <View
            style={{
              padding: hp(3),
              width: wp(55),
              backgroundColor: 'white',
              height:getid == 1 ? wp(40):wp(70),
              borderRadius: 25,
            }}>
            <View style={{}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <Text style={{ fontSize: 16 }}>Choose Time</Text>
                <TouchableOpacity onPress={() => { setvisible(!visible) }} >
                  <Image
                    style={{
                      height: 25.5,
                      width: 25,
                      alignSelf: 'flex-end',
                    }}
                    source={img.cancel}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{ borderBottomWidth: 0.8, marginTop: wp(2) }}
              >
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={{ overflow: 'hidden', borderRadius: 15, backgroundColor: '#ffd634', top: 10, height:getid ==1 ? wp(20): wp(50), }}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#e5e5e5' }} />}
                contentContainerStyle={{ flexGrow: 1, }}
                renderItem={({ item, index }) => <TouchableOpacity onPress={() => { getid == "01" ? setprep(item.value) : getid == "02" ? setwork(item.value) : getid == "03" ? setrest(item.value) : getid == "04" ? setrep(item.value) :getid == "05" ?  setsets(item.value): seteffort(item.value), setvisible(false) }} style={{ justifyContent: 'center', alignItems: 'center' }} >
                  <Text style={{ fontSize: 25, color: 'white', marginBottom: 5 }}>{item.value}</Text>
                </TouchableOpacity>}
                data={getid == 6 ? percent:getid ==3?count:getid ==2? count:getid ==1 ?FstSlw:  count1to15}
              />
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{
            height: wp(55),
            width: wp(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={img.workout_bg}>
          <Image
            style={{
              height: hp(10),
              width: wp(40),
              resizeMode: 'contain',
              marginTop: -hp(3),
            }}
            source={img.logo1}>
          </Image>
          <MyText
            style={{ textAlign: 'center', fontSize: scale(20) }}
            white
            poppinsbold
            title={'CUSTOMIZE '}
          />
          <MyText
            style={{ textAlign: 'center', fontSize: scale(13) }}
            white
            poppinmedium
            title={
              'After your 12th week, you can customize the workouts by selecting your preferences below: '
            }
          />
        </ImageBackground>

        <View style={{ paddingHorizontal: wp(5) }}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item ,index}) => {
              return (
                <View
                  style={{
                    backgroundColor: item.backgroundcolor,
                    marginTop: hp(3),
                    borderRadius: 10,
                    height: wp(23),
                    justifyContent: 'space-between',
                  }}>
                    
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: wp(5),
                    }}>
                    <View style={{}}>
                      <Text
                        style={{
                          fontSize: scale(18),
                          paddingTop: wp(3.5),
                          color: 'white',
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: scale(12),
                          color: 'white',
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {item.des}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => { setvisible(true), setgetid(item.id) }} style={{ padding: 10, justifyContent: 'center' }}>
                      <MyText
                        style={{
                          textAlign: 'center',
                          fontSize: scale(36),
                          paddingTop: hp(1),
                        
                        }}
                        bold
                        poppinsbold
                        white
                        title={
                           index == 0?(item.state == '' ? ":---":item.state):(item.state == '' ? ":00":item.state)
                      

                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {data.state !==''? setTime() :null }}
          style={{
            alignItems: 'center',
            paddingTop: hp(5),
            paddingBottom: hp(5),
          }}>
          <Image
            style={{ height: hp(13), width: wp(35), resizeMode: 'contain' }}
            source={img.check_right}></Image>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}







// import {
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   ImageBackground,
//   ScrollView,
//   FlatList,
//   Modal,
// } from 'react-native';
// import React, { useContext, useState } from 'react';
// import { hp, wp } from '../../Components/Globalstyle';
// import { img, Colors } from '../../Components/Config';
// import MyText from '../../Components/Ctext';
// import { scale } from 'react-native-size-matters';
// import { Context } from '../../../Shared/Provider';


// export default function Customize({ }) {
//   const [Active, setActive] = useState(false);
//   const { Female, API } = useContext(Context);
//   const [visible, setvisible] = useState(false)
//   const [visible1, setvisible1] = useState(false)
//   const [prep, setprep] = useState('')
//   const [rest, setrest] = useState('')
//   const [rep, setrep] = useState('')
//   const [sets, setsets] = useState('')
//   const [work, setwork] = useState('')
//   const [effort, seteffort] = useState('')
//   const [getid, setgetid] = useState('')
  
//    const FstSlw =[{value:'Fast'},{value:'Slow'}]
//   const count1to15 = [{ value: '01' },{ value: '02' }, { value: '03' }, { value: '04' }, { value: '05' }, { value: '06' }, { value: '07' }, { value: '08' }, { value: '09' }, { value: '10' }, { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }]
//   const percent = [{ value: '50%', }, { value: '60%' }, { value: '70%' }, { value: '80%' }, { value: '90%' }, { value: '100%' }]
//   const count = [ { value: '03' }, { value: '04' }, { value: '05' }, { value: '06' }, { value: '07' }, { value: '08' }, { value: '09' }, { value: '10' }, { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }]
//   const data = [
//     { id: '01', name: 'Prepare', des: '(Countdown Before You Start)', backgroundcolor: Colors.pink, state: prep, },
//     { id: '02', name: 'Work', des: '(Do Each Exercise For This Long)', backgroundcolor: Colors.blue, state: work },
//     { id: '03', name: 'Rest', des: '(Rest For This Long)', backgroundcolor: '#ffd634', state: rest, },
//     { id: '04', name: 'Reps', des: '(1 Rep = 1 Work & 1 Rest Combo)', backgroundcolor: '#03d875', state: rep, },
//     { id: '05', name: 'Sets', des: '(1 Set = 1 Minutes Worth of Reps)', backgroundcolor: '#fe7f0b', state: sets, },
//     { id: '06', name: 'Efforts', des: '(Select 50% - 100%)', backgroundcolor: '#00d0ff', state: effort, },
//   ];
//   const setTime = () => {

//     API.getCustomTimerValue((e) => {
//       setActive(true);
//     },
//      {
//       user_customize_workout: {
//         prepare_time: prep,
//         work_time: work,
//         rest_time: rest,
//         reps: rep,
//         sets: sets,
//         contraction_effort: effort,
//       }
//     })
   
//   }
//   return (
//     <View
//       style={{
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#fff6d2',
//         alignItems: 'center',
//       }}>
//       <Modal

//         animationType="slide"
//         hardwareAccelerated
//         transparent={true}
//         visible={Active}
//         onRequestClose={() => setActive(false)}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: '#00000080',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}>
//           <View
//             style={{
//               padding: hp(3),
//               width: wp(85),
//               backgroundColor: 'white',
//               alignItems: 'center',
//               borderRadius: 25,
//             }}>
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 style={{ height: hp(12), width: hp(12) }}
//                 source={!Female.gender ? img.blue_tick : img.pink_tick}>
//               </Image>
//               <MyText
//                 style={{
//                   textAlign: 'center',
//                   fontSize: scale(28),
//                   marginTop: hp(1.5),
//                   color: !Female.gender ? Colors.blue : Colors.pink,
//                 }}
//                 mbold
//                 title={'Congratulations'}
//               />
//               <MyText
//                 style={{
//                   textAlign: 'center',
//                   fontSize: scale(13),
//                 }}
//                 poppinsemibold
//                 title={'Your Customization Is Successful'}
//               />
//               <TouchableOpacity
//                 onPress={() => { setActive(!Active) }}
//                 style={{
//                   borderRadius: 5,
//                   backgroundColor: !Female.gender ? Colors.blue : Colors.pink,
//                   width: wp(20),
//                   height: wp(8),
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginTop: hp(1),
//                 }}>
//                 <MyText
//                   style={{ textAlign: 'center', fontSize: scale(10) }}
//                   white
//                   poppinsbold
//                   title={'OK'}

//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//       </Modal>
//       <Modal

//         animationType="slide"
//         hardwareAccelerated
//         transparent={true}
//         visible={visible}
//         onRequestClose={() => setvisible(false)}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: '#00000080',
//             alignItems: 'center',
//             justifyContent: 'center',

//           }}>
//           <View
//             style={{
//               padding: hp(3),
//               width: wp(55),
//               backgroundColor: 'white',
//               height:wp(70),
//               borderRadius: 25,
//             }}>
//             <View style={{}}>
//               <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
//                 <Text style={{ fontSize: 16 }}>Choose Time</Text>
//                 <TouchableOpacity onPress={() => { setvisible(!visible) }} >
//                   <Image
//                     style={{
//                       height: 25.5,
//                       width: 25,
//                       alignSelf: 'flex-end',
//                     }}
//                     source={img.cancel}
//                   />
//                 </TouchableOpacity>
//               </View>
//               <View
//                 style={{ borderBottomWidth: 0.8, marginTop: wp(2) }}
//               >
//               </View>
//               <FlatList
//                 showsVerticalScrollIndicator={false}
//                 style={{ overflow: 'hidden', borderRadius: 15, backgroundColor: '#ffd634', top: 10, height: wp(50), }}
//                 ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#e5e5e5' }} />}
//                 contentContainerStyle={{ flexGrow: 1, }}
//                 renderItem={({ item, index }) => <TouchableOpacity onPress={() => { getid == "01" ? setprep(item.value) : getid == "02" ? setwork(item.value) : getid == "03" ? setrest(item.value) : getid == "04" ? setrep(item.value) :getid == "05" ?  setsets(item.value): seteffort(item.value), setvisible(false) }} style={{ justifyContent: 'center', alignItems: 'center' }} >
//                   <Text style={{ fontSize: 25, color: 'white', marginBottom: 5 }}>{item.value}</Text>
//                 </TouchableOpacity>}
//                 data={getid == 6 ? percent: count1to15}
//               />
//             </View>
//           </View>
//         </View>
//       </Modal>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <ImageBackground
//           style={{
//             height: wp(55),
//             width: wp(100),
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           source={img.workout_bg}>
//           <Image
//             style={{
//               height: hp(10),
//               width: wp(40),
//               resizeMode: 'contain',
//               marginTop: -hp(3),
//             }}
//             source={img.logo1}>
//           </Image>
//           <MyText
//             style={{ textAlign: 'center', fontSize: scale(20) }}
//             white
//             poppinsbold
//             title={'CUSTOMIZE '}
//           />
//           <MyText
//             style={{ textAlign: 'center', fontSize: scale(13) }}
//             white
//             poppinmedium
//             title={
//               'After your 12th week, you can customize the workouts by selecting your preferences below: '
//             }
//           />
//         </ImageBackground>

//         <View style={{ paddingHorizontal: wp(5) }}>
//           <FlatList
//             data={data}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item ,index}) => {
//               return (
//                 <View
//                   style={{
//                     backgroundColor: item.backgroundcolor,
//                     marginTop: hp(3),
//                     borderRadius: 10,
//                     height: wp(23),
//                     justifyContent: 'space-between',
//                   }}>
                    
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       justifyContent: 'space-between',
//                       paddingHorizontal: wp(5),
//                     }}>
//                     <View style={{}}>
//                       <Text
//                         style={{
//                           fontSize: scale(18),
//                           paddingTop: wp(3.5),
//                           color: 'white',
//                           fontFamily: 'Poppins-Bold',
//                         }}>
//                         {item.name}
//                       </Text>
//                       <Text
//                         style={{
//                           fontSize: scale(12),
//                           color: 'white',
//                           fontFamily: 'Poppins-Bold',
//                         }}>
//                         {item.des}
//                       </Text>
//                     </View>
//                     <TouchableOpacity onPress={() => { setvisible(true), setgetid(item.id) }} style={{ padding: 10, justifyContent: 'center' }}>
//                       <MyText
//                         style={{
//                           textAlign: 'center',
//                           fontSize: scale(36),
//                           paddingTop: hp(1),
                        
//                         }}
//                         bold
//                         poppinsbold
//                         white
//                         title={
//                           (item.state == '' ? ":00":item.state)
                      

//                         }
//                       />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               );
//             }}
//           />
//         </View>
//         <TouchableOpacity
//           onPress={() => {getid == "06"? setTime() :null }}
//           style={{
//             alignItems: 'center',
//             paddingTop: hp(5),
//             paddingBottom: hp(5),
//           }}>
//           <Image
//             style={{ height: hp(13), width: wp(35), resizeMode: 'contain' }}
//             source={img.check_right}></Image>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }