// import {
//     Text,
//     View,
//     Image,
//     TouchableOpacity,
// } from 'react-native';
// import React, {
//     useRef,
//     useState,
//     useEffect,
//     useContext,
//     useImperativeHandle,
//     forwardRef
// } from 'react';
// import Anothercomponent from './Timercomponent';
// import CircularProgres from 'react-native-circular-progress-custom';
// import CircularProgress from 'react-native-circular-progress-small';
// import { hp,wp } from '../Globalstyle';
// import {Context} from '../../../Shared/Provider';
// import { img } from '../Config';
// import { COLORS } from './Config';
// import Sound from 'react-native-sound'
// import { scale } from 'react-native-size-matters';
// export default function TimerClockTwo({timerValue,audio}) {
//     const { weekCount,audio_base_url,audiotrack} = useContext(Context);

//     const progressRef = useRef();
//     const WorkoutRef = useRef();
//     const initialtimeref= useRef()
//     const setref = useRef();
//     const repsRef = useRef();
//     const dummyref = useRef();
//     const Playbuttonref = useRef()
//     const mainRef = useRef()
//     const inittime = useRef()
//     const [initialtime, setInitialtime] = useState(0);
//     const [isPrepareClock, setisPrepareClock] = useState(true);
//     const [isPlay, setisPlay] = useState(false);
//     const [repdecrese, setrepdecrease] = useState(0);
//     const [PlaydummyTimer, setDummytimer] = useState(true);
// const [hybridCount, sethybridCount] = useState(1)
// const i =0;
// const { fstConstraction, setfstConstraction} = useContext(Context);
//  const [initialrepstime, setInitialrepstime] = useState(parseInt(timerValue?.reps));

// var sound;
// const [volume, setvolume] = useState(false)
//     let value = fstConstraction == 1 ? ( parseInt(timerValue?.fast_contraction?.work_time) + parseInt(timerValue?.fast_contraction?.rest_time)) : ( parseInt(timerValue?.slow_contraction?.work_time) + parseInt(timerValue?.slow_contraction?.rest_time)) // 15 is workout time  here dvfhdvfhvsdsddbvfhjds 
//     let resttime = fstConstraction == 1 ? (parseInt(timerValue?.fast_contraction?.rest_time)) :(parseInt(timerValue?.slow_contraction?.rest_time))
//     const initialsets =parseInt(timerValue?.sets)
//     let workouttime = 15
//    const [name, setname] = useState(["workout","rest"])
//     const [Setcount, setSetount] = useState(0);
//     const [Workoutduration, setWorkoutduration] = useState(value*1000);
// const [button, setbutton] = useState(false)
// useEffect(() => {
//     inittime.current = initialtime;
//     initialtime == 0 ? Playbuttonref.current.ChangeState(1)  : Playbuttonref.current.ChangeState(2) 
//   }, [initialtime]);
// if(audiotrack.audio_type == 'basic'){
//        var work = new Sound(audiotrack?.audio_coaches?.work_audio,'', (error) => {
//         console.log("errr", error)  
//        })
//        var rest = new Sound(audiotrack?.audio_coaches?.rest_audio ,'', (error) => {
//         console.log("errr", error)  
//        })
   
 
//    var preparerec = new Sound(audiotrack?.audio_coaches?.prepare_audio, '', (error) => {
//     console.log("errr", error)  
//    })

//    var pauserec = new Sound( audiotrack?.audio_coaches?.paused_audio, '', (error) => {
//     console.log("errr", error)  
//    })
//    var resumerec = new Sound(audiotrack?.audio_coaches?.resume_audio, '', (error) => {
//     console.log("errr", error)  
//    })
//    var endrec = new Sound( audiotrack?.audio_coaches?.end_audio, '', (error) => {
//     console.log("errr", error)  
//    })



// }else{
//  const data = [{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{ id: 1, Audio1: audio?.audio_coaches?.week_8_rep_1 ,Audio2: audio?.audio_coaches?.week_8_rep_2}, { id: 2,  Audio1: audio?.audio_coaches?.week_8_rep_1 ,Audio2: audio?.audio_coaches?.week_8_rep_2 }, { id: 3,  Audio1: audio?.audio_coaches?.week_8_rep_1 ,Audio2: audio?.audio_coaches?.week_8_rep_2 }, { id: 4,  Audio1: audio?.audio_coaches?.week_8_rep_1 ,Audio2: audio?.audio_coaches?.week_8_rep_2}, { id: 5, Audio1: audio?.audio_coaches?.week_8_rep_1 ,Audio2: audio?.audio_coaches?.week_8_rep_2 }]

//  var audioSound1 = new Sound(audio_base_url + data[weekCount]?.Audio1, '', (error) => {
//     console.log("errr", error)  
//    })
//    var audioSound2 = new Sound(audio_base_url + data[weekCount]?.Audio2, '', (error) => {
//     console.log("errr", error)  
//    })
//    var prepare = new Sound(audio_base_url + audio?.audio_coaches?.prepare_audio, '', (error) => {
//     console.log("errr", error)  
//     })
//     var pause = new Sound(audio_base_url + audio?.audio_coaches?.paused_audio, '', (error) => {
//     console.log("errr", error)  
//     })
//     var resume = new Sound(audio_base_url + audio?.audio_coaches?.resume_audio, '', (error) => {
//     console.log("errr", error)  
//     })
//     var end = new Sound(audio_base_url + audio?.audio_coaches?.end_audio, '', (error) => {
//     console.log("errr", error)  
//     })

// }




// const live = (value) => {
//     value.play(() => {
//         value.reset(()=>{
//             value.release()
//         })
//             })
// }
// const start = (item) => {
//     item.play(() => {
//         item.release()
//             })
      
//     } 

  
//     const OnComplete = e => {
//         if (isPlay) {
//             Playbuttonref.current.ChangeState(1)
//             setisPrepareClock(false);
//             setDummytimer(false);
//             audio?.audio_type == 'basic' ?  start(work): fstConstraction == 1 ? live(audioSound1) :live(audioSound2)

//             audio?.audio_type == 'basic' &&  setTimeout(() => {
//                 start( rest)
//                },parseInt(fstConstraction==1 ? timerValue?.fast_contraction?.work_time: timerValue?.slow_contraction?.work_time)*1010 )

            
//         }
//     };
// const playReps = ()=>{
//     setfstConstraction(1) 
//     let rep = repdecrese;
//     if (rep < parseInt(timerValue?.reps)) {
//         rep++;
//         setrepdecrease(rep);
//         WorkoutRef.current.reAnimate();
//         setvolume(true)
//         WorkoutRef.current.ColorAgain()
//     }
    
//     let setcount = Setcount;

//     if (rep == parseInt(timerValue?.reps)) {
//         setcount++;
//         setrepdecrease(0);

//         setSetount(setcount);

//         setvolume(true)
        
//             setisPrepareClock(true)
        
//         WorkoutRef.current.ColorAgain()
//     }
// }
//     const OnPlay = () => {
//         if (isPlay) {
//             audio?.audio_type == 'basic' ? start(resumerec): live(resume)
//             WorkoutRef.current.play();
//             setref.current.play();
//             repsRef.current.play();
//             dummyref.current.play()
//         } else {
//             setInitialtime(5);
       
//             setisPlay(true);
//         }

//     };
//     const OnPlayMain = () => {
//         if (isPlay) {
//             // progressRef.current.play();
//             WorkoutRef.current.play();
//             setref.current.play();
//             repsRef.current.play();
//             dummyref.current.play();
//               audio?.audio_type == "basic" ?   start( resumerec ) : live(resume)
//             mainRef.current.ChangeState(2)
//         } else {
//             // progressRef.current.ChangeInitValue(parseInt(5))
//             setInitialtime(5);
//             setisPlay(true);
//         }
//     };
//     const PauseClockMain = () => {
//         WorkoutRef.current.pause();
//         setref.current.pause();
//         repsRef.current.pause();
//         dummyref.current.pause();
//        mainRef.current.ChangeState(1)
//        audio?.audio_type == "basic" ?   start(pauserec) : live(pause)
//     };
//     const PauseClock = () => {
//         WorkoutRef.current.pause();
//         setref.current.pause();
//         audio?.audio_type == 'basic' ? start( pauserec):live(pause)
       
//         repsRef.current.pause();
//         dummyref.current.pause();
//         mainRef.current.ChangeState(1)
//     };

   
//     const PlayButton = (props, ref) => {
//         const { onLpress, onRpress, onPause, onResume } = props
//         const [pause, setpause] = useState(1)
//         const ChangeState = (value) => {
//             setpause(value)
//         }
//         useImperativeHandle(ref, () => ({
//             ChangeState,  
//         }))
//         // forwardRef
//         return (
//             <View style={{ flexDirection: 'row', marginTop: -15, paddingBottom: 7 }}>
            
//                     <TouchableOpacity
//                         onPress={pause==2 ? onResume : onLpress }
//                         style={{ alignItems: 'center', height: 50, width: 50 }}>

//                        { pause==2 ? <Image
//                             source={img.play_blue }
//                             style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                         />:<Image
//                         source={img.check_right_yellow }
//                         style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                     />}
//                     </TouchableOpacity>
//                 {/* } */}

//                 {button == true ? <TouchableOpacity
//                     onPress={onPause}
//                     style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
//                     <Image
//                         source={img.reload}
//                         style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                     />
//                 </TouchableOpacity> : <TouchableOpacity
//                     onPress={onRpress}
//                     style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
//                     <Image
//                         source={img.reload}
//                         style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                     />
//                 </TouchableOpacity>}
//             </View>
//         )

//     }
//     const PlayButtonMain = (props, ref) => {
//         const { onLpress, onRpress, onPause, onResume } = props
    
//         const [pause, setpause] = useState(2)
//         console.log(pause,'oo0o0o9o9o9')
//         const ChangeState = (value) => {
//             setpause(value)
//         }
//         useImperativeHandle(ref, () => ({
//             ChangeState,  
//         }))
//         // forwardRef
//         return (
//             <View style={{ flexDirection: 'row', marginTop: -15, paddingBottom: 7 }}>
              
//                     <TouchableOpacity
//                         onPress={pause== 2 ? onResume  : onLpress }
//                         style={{ alignItems: 'center', height: 50, width: 50 }}>

//                        { pause== 2 ? <Image
//                             source={img. play_blue  }
//                             style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                         />:<Image
//                         source={img.check_right_yellow  }
//                         style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                     />}
//                     </TouchableOpacity>
//                 {/* } */}

//                 {button == true ? <TouchableOpacity
//                     onPress={onPause}
//                     style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
//                     <Image
//                         source={img.reload}
//                         style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                     />
//                 </TouchableOpacity> : <TouchableOpacity
//                     onPress={onRpress}
//                     style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
//                     <Image
//                         source={img.reload}
//                         style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
//                     />
//                 </TouchableOpacity>}
//             </View>
//         )

//     }
//     const RefPlayButton = forwardRef(PlayButton)
//     const RefPlayButtonMain = forwardRef(PlayButtonMain)

//     const PrepareClock = ({ duration }) => (
//         <CircularProgres
//             resttime={0}
//             Progressvalue={e => {
//             }}
//             value={initialtime}
//             ref={progressRef}
//             Buttons={() => (
//                 <RefPlayButton
//                 ref={Playbuttonref}
//                     onLpress={() => {
                       
//                        setInitialtime(parseInt(timerValue?.prepare_time))
                        
//                         setisPlay(true);
                        
//                         progressRef.current.play();
//                         Playbuttonref.current.ChangeState(2) 
//                       audio?.audio_type == 'basic' ?  start(preparerec): live(prepare)
//                     }}
//                     onResume={() => {

//                         progressRef.current.pause();
//                         Playbuttonref.current.ChangeState(1)

                       
                       
//                         audio?.audio_type == "basic" ?  start(resumerec) : live(resume)

//                     }}
//                     onRpress={() => {

//                         setbutton(true)
//                         progressRef.current.play();
                       
//                     }}
//                     onPause={() => {
//                         setbutton(false)
//                         progressRef.current.play();

//                     }}
//                 />
//             )}
//             inActiveStrokeWidth={13}
//             inActiveStrokeColor={ COLORS.PINK}
//             activeStrokeWidth={13}
//             Toptitle={'Get Ready'}
//             onAnimationComplete={OnComplete}
//             onRPress={() => { }}
//             radius={100}
//             duration={duration}
//             maxValue={parseInt(timerValue?.prepare_time)}
//             titleColor={'white'}
//             titleStyle={{ fontWeight: 'bold' }}
//             dashedStrokeConfig={{
//                 count: 1,
//                 width: 500,
//             }}
//         />
//     );





//     const PauseMainClock = e => {
//         setref.current.pause();
//         repsRef.current.pause();
//         WorkoutRef.current.pause();
//            dummyref.current.pause();
//         setrepdecrease(0);
//         if (e == 'complete') {
//             setWorkoutduration(17000000000);
//         }
//     };
    
//     const WorkoutClock = ({
//         duration,
//         initialvalue,
//         initialref,
//         Animationcomplete,

//     }) => (
//         <CircularProgres
//             transparentcircle={true}
//             Progressvalue={e => {
//             }}
//             activeStrokeWidth={18}
//             workouttitle="sdfkjhsfd"
//             reverse={true}

//             value={value}
//             resttime={resttime}
//             ref={initialref}
//             Buttons={() =>   <RefPlayButtonMain 
   
//                 ref={mainRef}
//                 onLpress={OnPlayMain}
//                  onResume={PauseClockMain} 
//                 onRpress={() => {
//                     // setbutton(true)
//                     // setisPlay(true);
//                     // setInitialtime(0)
//                     // setrepdecrease(0);
//                     // setDummytimer(true);
//                     // // setisPlay(false);
//                     // setisPrepareClock(true)
//                     // setSetount(0) 

//                        setbutton(true)
//                     // setisPlay(true);
//                      setInitialtime(0)
//                     setrepdecrease(0);
//                      setDummytimer(true);
//                     setisPlay(false);
//                     setisPrepareClock(true)
//                      setSetount(0) 
                   

//                 }}
//                 onPause={() => {
//                     setbutton(false)
//                     setisPlay(false);
//                     setInitialtime(0)
//                     setrepdecrease(0);
//                     setisPlay(false);
//                     setDummytimer(true);
//                     setisPrepareClock(true)
//                     setSetount(0)  
                  
//                 }}/>}
//             inActiveStrokeWidth={12}
//             inActiveStrokeColor={COLORS.PINK}
//             // activeStrokeColor={COLORS.PINK}
//             activeStrokeSecondaryColor={COLORS.PINK}
//             Toptitle={''}
//             onAnimationComplete={() => {
//                 setvolume(false)
//                 setfstConstraction(2)
//             { fstConstraction == 2 &&    
//                 playReps();}
//                playReps()
//                 Labeltitle = audio?.audio_type == 'basic' ? start(work) : fstConstraction ==1 ? live(audioSound1) :live(audioSound2)
//                 audio?.audio_type == 'basic' &&  setTimeout(() => {
//                    start( rest)
//                   },parseInt(fstConstraction == 1 ? timerValue?.fast_contraction?.work_time:timerValue?.slow_contraction?.work_time)*1003)
//                 Animationcomplete();
//                 WorkoutRef.current.ColorAgain()
                 
                
                
//             }}
            
            
//             radius={100}
//             duration={duration}
//             // progressValueColor={'#ecf0f1'}
//             maxValue={initialvalue}
//             titleColor={'white'}
//             titleStyle={{ fontWeight: 'bold' }}
//             dashedStrokeConfig={{
//                 count: 2,
//                 width: 330,
//             }}
//         />
//     );


//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ fontSize: 25, paddingBottom: 10 }}>Timer</Text>
//             {isPrepareClock ? (
//                 <PrepareClock duration={5000} />
//             ) : (
//                 <WorkoutClock
//                     Animationcomplete={() => { }}
//                     initialref={WorkoutRef}
//                     duration={Workoutduration}
//                     exacttime={value - resttime}
//                     initialvalue={value}
//                 />
//             )}
//             <View
//                 style={{
//                     justifyContent: 'center',
//                     zIndex: -1,
//                     alignItems: 'center',
//                     paddingTop: 47,
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     overflow: 'hidden',
//                 }}>
//                 {!isPrepareClock && (                             
                
//                     <> 
//                         <Anothercomponent
//                             workoutref={WorkoutRef}
//                             transparent={()=>{
//                                 sethybridCount(1)
//                                  initialtimeref.current.Coloranimate()
//                             }}
//                             values={value}
//                             resttime={resttime}
//                             name={["workout","rest"]}
//                             duration={value}
//                             exacttime={(value - resttime)}
//                             ref={dummyref}
//                             value={PlaydummyTimer}
//                             audio={audio}
                
//                         />
//                     </>
//                 )}
//             </View>
//             <View
//                 style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     width: wp(87),//350
//                 }}>
                
//                 <CircularProgress
//                     // activeStrokeWidth={13}
//                     ref={setref}  
//                     time={initialsets - Setcount}
//                     onAnimationComplete={() => {
//                         if (Setcount == initialsets) {
//                             PauseMainClock('complete');
//                             alert("completed")
//                            audio?.audio_type == 'basic' ? start(endrec) : live(end)
//                         }
//                     }}
//                     title={'Sets Left'}
//                     value={Setcount - 0.03}
//                     maxValue={initialsets}
//                     radius={60}
//                     inActiveStrokeColor={ COLORS.LIGHBLUE}
//                     // activeStrokeColor={Setcount == 0 ? COLORS.LIGHBLUE : COLORS.LIGHBLUE}
//                     duration={1000}
//                     dashedStrokeConfig={{
//                         count: initialsets,
//                         width: 198 / initialsets *2,
//                     }}
//                 />

//                 <CircularProgress
//                     // activeStrokeWidth={13}
//                     ref={repsRef}
//                     time={initialrepstime - repdecrese}
//                     onAnimationComplete={() => { }}
//                     title={'Reps Left'}
//                     value={repdecrese}//repdecrese
//                     // maxValue={2.1}parseInt(timerValue?.reps)
//                     maxValue={(parseInt(timerValue?.reps))}

//                     radius={60}
//                     inActiveStrokeColor={ COLORS.REPS}
//                     // activeStrokeColor={COLORS.REPS}
//                     duration={1000}
//                     dashedStrokeConfig={{
                      
//                         count: initialrepstime,
//                         width: 198 / initialrepstime * 2,
        
//                     }}
//                 />
//             </View>
//         </View>
//     );
// }
    






import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, {
    useRef,
    useState,
    useEffect,
    useContext,
    useImperativeHandle,
    forwardRef
} from 'react';
import Anothercomponent from './Timercomponent';
import CircularProgres from 'react-native-circular-progress-custom';
import CircularProgress from 'react-native-circular-progress-small';
import { hp,wp } from '../Globalstyle';
import {Context} from '../../../Shared/Provider';
import { img } from '../Config';
import { COLORS } from './Config';
import Sound from 'react-native-sound'
import { scale } from 'react-native-size-matters';
export default function TimerClockTwo({timerValue,audio}) {
    const { weekCount,audio_base_url,audiotrack,setLoader} = useContext(Context);

    const progressRef = useRef();
    const WorkoutRef = useRef();
    const initialtimeref= useRef()
    const setref = useRef();
    const repsRef = useRef();
    const dummyref = useRef();
    const Playbuttonref = useRef()
    const mainRef = useRef()
    const inittime = useRef()
    const [initialtime, setInitialtime] = useState(0);
    const [isPrepareClock, setisPrepareClock] = useState(true);
    const [isPlay, setisPlay] = useState(false);
    const [repdecrese, setrepdecrease] = useState(0);
    const [PlaydummyTimer, setDummytimer] = useState(true);
const [hybridCount, sethybridCount] = useState(1)
const i =0;
const { fstConstraction, setfstConstraction} = useContext(Context);
 const [initialrepstime, setInitialrepstime] = useState(parseInt(timerValue?.reps));
const [volume, setvolume] = useState(false)
    let value = fstConstraction == 1 ? ( parseInt(timerValue?.fast_contraction?.work_time) + parseInt(timerValue?.fast_contraction?.rest_time)) : ( parseInt(timerValue?.slow_contraction?.work_time) + parseInt(timerValue?.slow_contraction?.rest_time)) // 15 is workout time  here dvfhdvfhvsdsddbvfhjds 
    let resttime = fstConstraction == 1 ? (parseInt(timerValue?.fast_contraction?.rest_time)) :(parseInt(timerValue?.slow_contraction?.rest_time))
    const initialsets =parseInt(timerValue?.sets)
    let workouttime = 15
   const [name, setname] = useState(["workout","rest"])
    const [Setcount, setSetount] = useState(0);
    const [Workoutduration, setWorkoutduration] = useState(value*1000);
    const [audioFiles, setAudioFiles] = useState([]); 
    const [audio2Files, setAudio2Files] = useState([]); 
const [button, setbutton] = useState(false)
useEffect(() => {
    inittime.current = initialtime;
    initialtime == 0 ? Playbuttonref.current.ChangeState(1)  : Playbuttonref.current.ChangeState(2) 
  }, [initialtime]);
if(audiotrack.audio_type == 'basic'){
       var work = new Sound(audiotrack?.audio_coaches?.work_audio,'', (error) => {
        console.log("errr", error)  
       })
       var rest = new Sound(audiotrack?.audio_coaches?.rest_audio ,'', (error) => {
        console.log("errr", error)  
       })
   var preparerec = new Sound(audiotrack?.audio_coaches?.prepare_audio, '', (error) => {
    console.log("errr", error)  
   })

   var pauserec = new Sound( audiotrack?.audio_coaches?.paused_audio, '', (error) => {
    console.log("errr", error)  
   })
   var resumerec = new Sound(audiotrack?.audio_coaches?.resume_audio, '', (error) => {
    console.log("errr", error)  
   })
   var endrec = new Sound( audiotrack?.audio_coaches?.end_audio, '', (error) => {
    console.log("errr", error)  
   })



}else{
 const data = [{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{ id: 1, Audio1: audio?.audio_coaches?.week_8_rep_1 ,Audio2: audio?.audio_coaches?.week_8_rep_2}, { id: 2,  Audio1: audio?.audio_coaches?.week_9_rep_1 ,Audio2: audio?.audio_coaches?.week_9_rep_2 }, { id: 3,  Audio1: audio?.audio_coaches?.week_10_rep_1 ,Audio2: audio?.audio_coaches?.week_10_rep_2 }, { id: 4,  Audio1: audio?.audio_coaches?.week_11_rep_1 ,Audio2: audio?.audio_coaches?.week_11_rep_2}, { id: 5, Audio1: audio?.audio_coaches?.week_12_rep_1 ,Audio2: audio?.audio_coaches?.week_12_rep_2 }]
 console.log(audio_base_url + data[weekCount]?.Audio1,'[[[[[[[')
 var audioSound1 = new Sound(audio_base_url + data[weekCount]?.Audio1, '', (error) => {
    console.log("errr", error)  
   })
   var audioSound2 = new Sound(audio_base_url + data[weekCount]?.Audio2, '', (error) => {
    console.log("errr", error)  
   })
   var prepare = new Sound(audio_base_url + audiotrack?.audio_coaches?.prepare_audio, '', (error) => {
    console.log("errr", error)  
    })
    var pause = new Sound(audio_base_url + audiotrack?.audio_coaches?.paused_audio, '', (error) => {
    console.log("errr", error)  
    })
    var resume = new Sound(audio_base_url + audiotrack?.audio_coaches?.resume_audio, '', (error) => {
    console.log("errr", error)  
    })
    var end = new Sound(audio_base_url + audiotrack?.audio_coaches?.end_audio, '', (error) => {
    console.log("errr", error)  
    })

}

console.log(audioFiles[8],'=]=]=]=')

useEffect(() => {
    setLoader(true)
            Sound.setCategory('Playback');   
            const data = [{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{ id: 1, Audio1: audiotrack?.audio_coaches?.week_8_rep_1 ,Audio2: audiotrack?.audio_coaches?.week_8_rep_2}, { id: 2,  Audio1: audiotrack?.audio_coaches?.week_9_rep_1 ,Audio2: audiotrack?.audio_coaches?.week_9_rep_2 }, 
                { id: 3,  Audio1: audiotrack?.audio_coaches?.week_10_rep_1 ,Audio2: audiotrack?.audio_coaches?.week_10_rep_2 }, { id: 4,  Audio1: audiotrack?.audio_coaches?.week_11_rep_1 ,Audio2: audiotrack?.audio_coaches?.week_11_rep_2}, { id: 5, Audio1: audiotrack?.audio_coaches?.week_12_rep_1 ,Audio2: audiotrack?.audio_coaches?.week_12_rep_2 }]
            Promise.all(
              data.map(path =>
                new Promise(resolve => {
                  const sound = new Sound( audio_base_url + path?.Audio1, Sound.MAIN_BUNDLE, error => {
                    if (error) {
                      console.log(`failed to load the sound: ${path}`, error);
                    } else {
                      resolve(sound);
                    }
                  });
                })
              )
            ).then(sounds => {  
              setAudioFiles(sounds);
              setLoader(false)
            });
            Promise.all(
                data.map(path =>
                  new Promise(resolve => {
                    const sound = new Sound( audio_base_url + path?.Audio2, Sound.MAIN_BUNDLE, error => {
                      if (error) {
                        console.log(`failed to load the sound: ${path}`, error);
                      } else {
                        resolve(sound);
                      }
                    });
                  })
                )
              ).then(sounds => {  
                setAudio2Files(sounds);
                setLoader(false)
              });
          }, []);
          const handlePlay = async index => {
            if (audioFiles[index]) {
              await audioFiles[index].play();
            }
          };
          const handleResume = async () => {
            if (audioFiles.length > 0) {
              const currentAudio = audioFiles.find(sound => sound.isPaused());
            //   if (currentAudio) {
                live(resume)
                await currentAudio.play();    
            //   }
            }
          };
          const handlePause = async () => {
            if (audioFiles.length > 0) {
              const currentAudio = audioFiles.find(sound => sound.isPlaying());
              if (currentAudio) {
                await currentAudio.pause();
                live(pause)
               
              }
            }
          }; 
          const handlePlay2 = async index => {
            if (audio2Files[index]) {
              await audio2Files[index].play();
            }
          };
          const handleResume2 = async () => {
            if (audio2Files.length > 0) {
              const currentAudio = audio2Files.find(sound => sound.isPaused());
            //   if (currentAudio) {
                live(resume)
                await currentAudio.play();    
            //   }
            }
          };
          const handlePause2 = async () => {
            if (audio2Files.length > 0) {
              const currentAudio = audio2Files.find(sound => sound.isPlaying());
              if (currentAudio) {
                await currentAudio.pause();
                live(pause)
               
              }
            }
          }; 

const live = (value) => {
    value.play(() => {
       
            value.release()
      
            })
}
const start = (item) => {
    item.play(() => {
        item.release()
            })
      
    } 

  
    const OnComplete = e => {
        if (isPlay) {
            Playbuttonref.current.ChangeState(1)
            setisPrepareClock(false);
            setDummytimer(false);
         audio?.audio_type == 'basic' ?  start(work): fstConstraction == 1 ? handlePlay(weekCount) :handlePlay2(weekCount)

            // audio?.audio_type == 'basic' &&  setTimeout(() => {
            //     start( rest)
            //    },parseInt(fstConstraction==1 ? timerValue?.fast_contraction?.work_time: timerValue?.slow_contraction?.work_time)*1010 )

            
        }
    };
const playReps = ()=>{
    let rep = repdecrese;
    if (rep < parseInt(timerValue?.reps)) {
        rep++;
        setrepdecrease(rep);
        WorkoutRef.current.reAnimate();
        WorkoutRef.current.ColorAgain();
    }
    let setcount = Setcount;
    if (rep == parseInt(timerValue?.reps)) {
        setcount++;
        setrepdecrease(0);
        setSetount(setcount);
        WorkoutRef.current.ColorAgain();
    }

    //==========================
   
    // let rep = repdecrese;
    // if (rep < parseInt(timerValue?.reps)) {
    //     rep++;
    //     setrepdecrease(rep);
    //     setfstConstraction(1) 
    //     WorkoutRef.current.reAnimate();
    //     // setvolume(true)
    //     WorkoutRef.current.ColorAgain()
    // }
    
    // let setcount = Setcount;

    // if (rep == parseInt(timerValue?.reps)) {
    //     setcount++;
    //     setrepdecrease(0);

    //     setSetount(setcount);

    //     setvolume(true)
        
    //         setisPrepareClock(true)
        
    //     WorkoutRef.current.ColorAgain()
    // }
}

    const OnPlayMain = () => {
        if (isPlay) {
            mainRef.current.ChangeState(2)
            WorkoutRef.current.play();
            setref.current.play();
            repsRef.current.play();
            dummyref.current.play();
              audio?.audio_type == "basic" ?   start( resumerec ) :fstConstraction ==1 ?handleResume(): handleResume2()
          
        } else {
            // progressRef.current.ChangeInitValue(parseInt(5))
            setInitialtime(0);
            setisPlay(true);
        }
    };
    const PauseClockMain = () => {
        WorkoutRef.current.pause();
        setref.current.pause();
        repsRef.current.pause();
        dummyref.current.pause();
       mainRef.current.ChangeState(1)
       audio?.audio_type == "basic" ?   start(pauserec) :fstConstraction == 1 ? handlePause():handlePause2()
    };
  

   
    const PlayButton = (props, ref) => {
        const { onLpress, onRpress, onPause, onResume } = props
        const [pause, setpause] = useState(1)
        const ChangeState = (value) => {
            setpause(value)
        }
        useImperativeHandle(ref, () => ({
            ChangeState,  
        }))
    
        return (
            <View style={{ flexDirection: 'row', marginTop: -15, paddingBottom: 7 }}>
            
                    <TouchableOpacity
                        onPress={pause==2 ? onResume : onLpress }
                        style={{ alignItems: 'center', height: 50, width: 50 }}>

                       { pause==2 ? <Image
                            source={img.play_blue }
                            style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                        />:<Image
                        source={img.check_right_yellow }
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    />}
                    </TouchableOpacity>
                {/* } */}

                {button == true ? <TouchableOpacity
                    onPress={onPause}
                    style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
                    <Image
                        source={img.reload}
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    />
                </TouchableOpacity> : <TouchableOpacity
                    onPress={onRpress}
                    style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
                    <Image
                        source={img.reload}
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    />
                </TouchableOpacity>}
            </View>
        )

    }
    const PlayButtonMain = (props, ref) => {
        const { onLpress, onRpress, onPause, onResume } = props
    
        const [pause, setpause] = useState(2)
        console.log(pause,'oo0o0o9o9o9')
        const ChangeState = (value) => {
            setpause(value)
        }
        useImperativeHandle(ref, () => ({
            ChangeState,  
        }))
       
        return (
            <View style={{ flexDirection: 'row', marginTop: 45, paddingBottom: 7 }}>
              
                    <TouchableOpacity
                        onPress={pause== 2 ? onResume  : onLpress }
                        style={{ alignItems: 'center', height: 50, width: 50 }}>

                       { pause== 2 ? <Image
                            source={img. play_blue  }
                            style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                        />:<Image
                        source={img.check_right_yellow  }
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    />}
                    </TouchableOpacity>
                {/* } */}

                {button == true ? <TouchableOpacity
                    onPress={onPause}
                    style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
                    <Image
                        source={img.reload}
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    />
                </TouchableOpacity> : <TouchableOpacity
                    onPress={onRpress}
                    style={{ alignItems: 'center', marginLeft: 15, height: 50, width: 50 }}>
                    <Image
                        source={img.reload}
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    />
                </TouchableOpacity>}
            </View>
        )

    }
    const RefPlayButton = forwardRef(PlayButton)
    const RefPlayButtonMain = forwardRef(PlayButtonMain)

    const PrepareClock = ({ duration }) => (
        <CircularProgres
            resttime={0}
            Progressvalue={e => {
            }}
            value={initialtime < 10 ?`0${initialtime}`:initialtime }
            ref={progressRef}
            reverse={true}
            Buttons={() => (
                <RefPlayButton
                ref={Playbuttonref}
                    onLpress={() => {
                       
                       setInitialtime(parseInt(timerValue?.prepare_time))
                        
                        setisPlay(true);
                        
                        progressRef.current.play();
                        Playbuttonref.current.ChangeState(2) 
                      audio?.audio_type == 'basic' ?  start(preparerec): live(prepare)
                    }}
                    onResume={() => {

                        progressRef.current.pause();
                        Playbuttonref.current.ChangeState(1)

                       
                       
                        audio?.audio_type == "basic" ?  start(resumerec) : fstConstraction ==1 ?handleResume(): handleResume2()

                    }}
                    onRpress={() => {

                        setbutton(true)
                        progressRef.current.play();
                       
                    }}
                    onPause={() => {
                        setbutton(false)
                        progressRef.current.play();

                    }}
                />
            )}
            inActiveStrokeWidth={13}
            inActiveStrokeColor={ COLORS.PINK}
            // activeStrokeColor={COLORS.PINK}   
            activeStrokeWidth={13}
            Toptitle={'Get Ready'}
            onAnimationComplete={OnComplete}
            onRPress={() => { }}
            radius={100}
            duration={duration}
            maxValue={parseInt(timerValue?.prepare_time)}
            titleColor={'white'}
            titleStyle={{ fontWeight: 'bold' }}
            dashedStrokeConfig={{
                count: 1,
                width: 500,
            }}
        />
    );





    const PauseMainClock = e => {
        setref.current.pause();
        repsRef.current.pause();
        WorkoutRef.current.pause();
           dummyref.current.pause();
        setrepdecrease(0);
        if (e == 'complete') {
            setWorkoutduration(17000000000);
        }
    };
    
    const WorkoutClock = ({
        duration,
        initialvalue,
        initialref,
        Animationcomplete,

    }) => (
        <CircularProgres
            transparentcircle={true}
            Progressvalue={e => {
            }}
           
            activeStrokeWidth={18}
            workouttitle="sdfkjhsfd"
            reverse={true}
            showProgressValue={false} 
            value={value}
            resttime={resttime}
            ref={initialref}
            Buttons={() =>   <RefPlayButtonMain 
   
                ref={mainRef}
                onLpress={OnPlayMain}
                 onResume={PauseClockMain} 
                onRpress={() => {
                  
                    //    setbutton(true)
           
                    //  setInitialtime(0)
                    // setrepdecrease(0);
                    //  setDummytimer(true);
                    // setisPlay(false);
                    // setisPrepareClock(true)
                    //  setSetount(0) 
                    setSetount(0)
                    setbutton(true)
                    setisPlay(true);
                    setInitialtime(0)
                    setrepdecrease(0);
                    setDummytimer(true);
                    setisPlay(false);
                    setisPrepareClock(true)

                }}
                onPause={() => {
                    setbutton(false)
                    setisPlay(false);
                    setInitialtime(0)
                    setrepdecrease(0);
                    setisPlay(false);
                    setDummytimer(true);
                    setisPrepareClock(true)
                    setSetount(0)  
                  
                }}/>}
            inActiveStrokeWidth={12}
            inActiveStrokeColor={COLORS.PINK}
            // activeStrokeColor={COLORS.PINK}
            activeStrokeSecondaryColor={COLORS.PINK}
            Toptitle={''}
            onAnimationComplete={() => {
                setvolume(false)
                setfstConstraction(2)
            // { fstConstraction == 2 &&    
            //     playReps();}  
            playReps()
            audio?.audio_type == 'basic' ? start(work) : fstConstraction == 1 ? handlePlay(weekCount) :handlePlay2(weekCount)
                
          
                // Labeltitle = audio?.audio_type == 'basic' ? start(work) : fstConstraction ==1 ? live(audioSound1) :live(audioSound2)
                // audio?.audio_type == 'basic' &&  setTimeout(() => {
                //    start( rest)
                //   },parseInt(fstConstraction == 1 ? timerValue?.fast_contraction?.work_time:timerValue?.slow_contraction?.work_time)*1003)
                Animationcomplete();
                WorkoutRef.current.ColorAgain()
                 
                
                
            }}
            
            
            radius={100}
            duration={duration}
            maxValue={initialvalue}
            titleColor={'white'}
            titleStyle={{ fontWeight: 'bold' }}
            dashedStrokeConfig={{
                count: 2,
                width: 330,
            }}
        />
    );


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, paddingBottom: 10 }}>Timer</Text>
            {isPrepareClock ? (
                <PrepareClock duration={5000} />
            ) : (
                <WorkoutClock
                    Animationcomplete={() => { }}
                    initialref={WorkoutRef}
                    duration={Workoutduration}
                    exacttime={value - resttime}
                    initialvalue={value}
                />
            )}
            <View
                style={{
                    justifyContent: 'center',
                    zIndex: -1,
                    alignItems: 'center',
                    paddingTop: 47,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    overflow: 'hidden',
                }}>
                {!isPrepareClock && (                             
                
                    <> 
                        <Anothercomponent
                            workoutref={WorkoutRef}
                            FinishValue = {(value)=>{
                           
                                if(value ==='rest'){
                                   audio?.audio_type == "basic" &&  start(rest) 
                                }
                                if(value === 'workout'){
                                   audio?.audio_type !== "basic" && fstConstraction ==1 ? handlePlay(weekCount) :handlePlay(weekCount)
 
                                }
                               console.log("on Finish ---------------->=============>",value)
                              
                            }}
                            transparent={()=>{
                                sethybridCount(1)
                                 initialtimeref.current.Coloranimate()
                            }}
                            values={value}
                            resttime={resttime}
                            name={name}
                            duration={value}
                            exacttime={(value - resttime)}
                            ref={dummyref}
                            value={PlaydummyTimer}
                            audio={audio}
                
                        />
                    </>
                )}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: wp(87),//350
                }}>
                
                <CircularProgress
                    // activeStrokeWidth={13}
                    ref={setref}  
                    time={(initialsets - Setcount)<10 ? `0${(initialsets - Setcount)}`:(initialsets - Setcount)}
                    onAnimationComplete={() => {
                        if (Setcount == initialsets) {
                            PauseMainClock('complete');
                            Alert.alert(
                                'GOOD JOB!',
                                'you have completed your session',
                                [
                                    { text: 'ok', onPress: () => navigate('WorkoutList') },
                                ],
                                {
                                    cancelable: true
                                }
                            );
                           audio?.audio_type == 'basic' ? start(endrec) : live(end)
                        }
                    }}
                    title={'Sets Left'}
                    value={Setcount - 0.03}
                    maxValue={initialsets}
                    radius={60}
                    inActiveStrokeColor={ COLORS.LIGHBLUE}
                    // activeStrokeColor={Setcount == 0 ? COLORS.LIGHBLUE : COLORS.LIGHBLUE}
                    duration={1000}
                    dashedStrokeConfig={{
                        count: initialsets,
                        width: 198 / initialsets *2,
                    }}
                />

                <CircularProgress
                    // activeStrokeWidth={13}
                    ref={repsRef}
                    time={(initialrepstime - repdecrese) < 10 ? `0${(initialrepstime - repdecrese)}`:(initialrepstime - repdecrese)}
                    onAnimationComplete={() => { }}
                    title={'Reps Left'}
                    value={repdecrese}//repdecrese
                    // maxValue={2.1}parseInt(timerValue?.reps)
                    maxValue={(parseInt(timerValue?.reps))}

                    radius={60}
                    inActiveStrokeColor={ COLORS.REPS}
                    // activeStrokeColor={COLORS.REPS}
                    duration={1000}
                    dashedStrokeConfig={{
                      
                        count: initialrepstime,
                        width: 198 / initialrepstime * 2,
        
                    }}
                />
            </View>
        </View>
    );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    