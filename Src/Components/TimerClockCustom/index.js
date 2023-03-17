

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Alert,

} from 'react-native';
import React, {
    useEffect,
    useRef,
    useState,
    useContext,
    useImperativeHandle,
    forwardRef
} from 'react';
import Anothercomponent from './Timercomponent';
import CircularProgres from 'react-native-circular-progress-custom';
import CircularProgress from 'react-native-circular-progress-small';
import { hp, wp } from '../Globalstyle';
import { Context } from '../../../Shared/Provider';
import { img, navigate } from '../Config';
import { COLORS } from './Config';
import MyText from '../Ctext';
import Sound from 'react-native-sound'
import { scale } from 'react-native-size-matters';
import { Start } from '@mui/icons-material';
export default function TimerClockCustom({ audio, navigation }) {
    const { audio_base_url, weekCount, audiotrack, GetTimerValue,setLoader} = useContext(Context);
    const progressRef = useRef();
    const WorkoutRef = useRef();
    const initialtimeref = useRef()
    const setref = useRef();
    const repsRef = useRef();
    const dummyref = useRef();
    const Playbuttonref = useRef()
    const [initialtime, setInitialtime] = useState(0);
    const [isPrepareClock, setisPrepareClock] = useState(true);
    const [isPlay, setisPlay] = useState(false);
    const [repdecrese, setrepdecrease] = useState(0);
    const [PlaydummyTimer, setDummytimer] = useState(true);
    const [hybridCount, sethybridCount] = useState(1)
    const [initialrepstime, setInitialrepstime] = useState(parseInt(GetTimerValue?.reps));
    const mainRef = useRef()
    let value = parseInt(GetTimerValue?.general_contraction?.rest_time) + parseInt(GetTimerValue?.general_contraction?.work_time) || 0
    let resttime = parseInt(GetTimerValue?.general_contraction?.rest_time)
    const initialsets = parseInt(GetTimerValue?.sets)
    const [name, setname] = useState(["workout", "   rest"])
    const [Setcount, setSetount] = useState(0);
    const [Workoutduration, setWorkoutduration] = useState(value * 1002);
    const [button, setbutton] = useState(false)
    const inittime = useRef()
    const [Active, setActive] = useState(false)
    useEffect(() => {
        inittime.current = initialtime;
        initialtime !== 0 ? Playbuttonref.current.ChangeState(2) : Playbuttonref.current.ChangeState(1)
    }, [initialtime]);
console.log(audiotrack?.audio_coaches?.prepare_audio,'------')
    if (audiotrack.audio_type == 'basic') {

        var work =  new Sound(audiotrack?.audio_coaches?.work_audio, Sound.CACHES, (error) => {
            console.log("errr", error)


        })
        var rest = new Sound(audiotrack?.audio_coaches?.rest_audio,Sound.CACHES, (error) => {
            console.log("errr", error)
        })


        var preparerec = new Sound(audiotrack?.audio_coaches?.prepare_audio, Sound.CACHES, (error) => {
            console.log("errr", error)
        })

        var pauserec = new Sound(audiotrack?.audio_coaches?.paused_audio, Sound.CACHES, (error) => {
            console.log("errr", error)
        })
        var resumerec = new Sound(audiotrack?.audio_coaches?.resume_audio, Sound.CACHES, (error) => {
            console.log("errr", error)

        })
        var endrec = new Sound(audiotrack?.audio_coaches?.end_audio, Sound.CACHES, (error) => {
            console.log("errr", error)
        })



    } else {
   
        var audiosound = new Sound(audio_base_url + audiotrack?.audio_coaches?.week_custom,  Sound.CACHES, (error) => {
            console.log("errr", error)

        })
        var restlive = new Sound(audio_base_url + audiotrack?.audio_coaches?.rest_audio,  Sound.CACHES, (error) => {
            console.log("errr", error)
        })
        var prepare = new Sound(audio_base_url + audiotrack?.audio_coaches?.prepare_audio,  Sound.CACHES, (error) => {
            console.log("errr", error)
        })

        var pause = new Sound(audio_base_url + audiotrack?.audio_coaches?.paused_audio, Sound.CACHES, (error) => {
            console.log("errr", error)
        })
        var resume = new Sound(audio_base_url + audiotrack?.audio_coaches?.resume_audio, '', (error) => {
            console.log("errr", error)
        })
        var end = new Sound(audio_base_url + audiotrack?.audio_coaches?.end_audio, '', (error) => {
            console.log("errr", error)
        })


    }
    useEffect(() => {
        setLoader(true)
                Sound.setCategory('Playback');   
                const data = [{ id: 1, Audio: audiotrack?.audio_coaches?.week_custom }, { id: 2, Audio: audio?.audio_coaches?.rest_audio }, { id: 3, Audio: audio?.audio_coaches?.prepare_audio }, { id: 4, Audio: audio?.audio_coaches?.paused_audio }, { id: 5, Audio: audio?.audio_coaches?.resume_audio },
                    { id: 6, Audio: audio?.audio_coaches?.end_audio },]    
                Promise.all(
                  data.map(path =>
                    new Promise(resolve => {
                      const sound = new Sound( audio_base_url + path?.Audio, Sound.MAIN_BUNDLE, error => {
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
                    live(audioFiles[4])
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
    const live = (value) => {
        value.play(() => {
            value.reset(()=>{
                value.release();
            })
        })
    }

    const start = (value) => {

        value.play(() => { value.release() })

    }
  
    const PauseClockMain = () => {
        WorkoutRef.current.pause();
        setref.current.pause();
        repsRef.current.pause();
        dummyref.current.pause();
        mainRef.current.ChangeState(1);
        audio?.audio_type == "basic" ? start(pauserec) : handlePause() 
       
    };

    const OnComplete = e => {
        if (isPlay) {
            Playbuttonref.current.ChangeState(1)
            setisPrepareClock(false);
            setDummytimer(false);
            audio?.audio_type == "basic" ? start(work) : live(audiosound)
        }

    };
    const OnPlayMain = () => {
        if (isPlay) {
            mainRef.current.ChangeState(2)
            WorkoutRef.current.play();
            setref.current.play();
            repsRef.current.play();
            dummyref.current.play();
            audio?.audio_type == "basic" ? start(resumerec) : handleResume()
        } else {
            setInitialtime(0);
            setisPlay(true);

        }
    };


    
    const PlayButtonMain = (props, ref) => {
        const { onLpress, onRpress, onPause, onResume } = props

        const [pause, setpause] = useState(2)
        const ChangeState = (value) => {
            setpause(value)
        }

        useImperativeHandle(ref, () => ({
            ChangeState,
            setpause,
            pause,
            clearTimeout,
        }))
       
        return (
            <View style={{ flexDirection: 'row', marginTop: 45, paddingBottom: 7 }}>

                <TouchableOpacity
                    onPress={pause == 2 ? onResume : onLpress}
                    style={{ alignItems: 'center', height: 50, width: 50 }}>

                    {pause == 2 ? <Image
                        source={img.play_blue}
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    /> : <Image
                        source={img.check_right_yellow}
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



const PlayButton = (props, ref) => {
    const { onLpress, onRpress, onPause, onResume } = props
    const [pause, setpause] = useState(1)
    const ChangeState = (value) => {
        setpause(value)
    }
    useImperativeHandle(ref, () => ({
        ChangeState,
        setpause,
        pause
    }))


    return (
        <View style={{ flexDirection: 'row', marginTop: -15, paddingBottom: 7 }}>

            {pause == 2 ? <TouchableOpacity
                onPress={onResume}
                style={{ alignItems: 'center', height: 50, width: 50 }}>
                <Image
                    source={img.play_blue}
                    style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                />
            </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => { onLpress() }}
                    style={{ alignItems: 'center', height: 50, width: 50 }}>

                    <Image
                        source={img.check_right_yellow}
                        style={{ height: hp(7), width: hp(7), resizeMode: 'contain' }}
                    />
                </TouchableOpacity>}


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
            value={initialtime}
            ref={progressRef}
            Buttons={() => (
                <RefPlayButton
                    ref={Playbuttonref}
                    onLpress={() => {
                        setisPlay(true);
                        setInitialtime(parseInt(GetTimerValue?.prepare_time))
                        progressRef.current.play();
                        Playbuttonref.current.ChangeState(2)
                        audio?.audio_type == 'basic' ? start(preparerec)
                            : live(prepare)
                    }}
                    onResume={() => {

                        progressRef.current.pause();
                        Playbuttonref.current.ChangeState(1)
                       
                       
                        audio?.audio_type == "basic" ?  start(resumerec) : handleResume()

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
            inActiveStrokeColor={COLORS.PINK}
            // activeStrokeColor={COLORS.BLACK_10}
            activeStrokeWidth={13}
            Toptitle={'Get Ready'}
            onAnimationComplete={OnComplete}
            onRPress={() => { }}
            radius={100}
            duration={duration}
            maxValue={parseInt(GetTimerValue?.prepare_time)}
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
            showProgressValue={false}
            activeStrokeWidth={18}
            workouttitle="sdfkjhsfd"
            reverse={true}
            value={value}
            resttime={resttime}
            ref={initialref}
            Buttons={() =>
                <RefPlayButtonMain
                    ref={mainRef}
                    onLpress={OnPlayMain}
                    onResume={PauseClockMain}
                    onRpress={() => {
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
                        setSetount(0)
                        setDummytimer(true);
                        setisPrepareClock(true)
                    }}
                />
            }
            inActiveStrokeWidth={12}
            inActiveStrokeColor={COLORS.PINK}
            activeStrokeSecondaryColor={COLORS.PINK}
            Toptitle={''}
            onAnimationComplete={() => {
                let rep = repdecrese;
                if (rep < parseInt(GetTimerValue?.reps)) {
                    rep++;
                    setrepdecrease(rep);
                    WorkoutRef.current.reAnimate();
                    WorkoutRef.current.ColorAgain();
                }
                let setcount = Setcount;
                if (rep == parseInt(GetTimerValue?.reps)) {
                    setcount++;
                    setrepdecrease(0);
                    setSetount(setcount);
                    WorkoutRef.current.ColorAgain();

                    console.warn('check here ------->')
                    // setisPrepareClock(true)
                    // setisPlay(true);
                    // setInitialtime(5)
                    // //setrepdecrease(0);
                    // setDummytimer(true);
                    // Animationcomplete();
                    //setisPlay(false);

                    //     WorkoutRef.current.ColorAgain();
                    //    setisPrepareClock(true);
                    //    setisPlay(true);
                    //    setInitialtime(5)
                    //    progressRef.current.play();
                    //    Playbuttonref.current.ChangeState(2) 
                    //      audio?.audio_type == 'basic'? start(preparerec)
                    //       :live(prepare)




                }

                if (audio?.audio_type == 'basic') {
                    start(work)
                    // mainRef.current.timers()
                } else {
                    live(audiosound)
                }
                // audio?.audio_type == 'basic' &&
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
                         FinishValue = {(value)=>{
                           
                             if(value ==='rest'){
                                audio?.audio_type == "basic" ?start(rest) : live(restlive)
                                
                             }
                             if(value === 'workout'){
                                audio?.audio_type !== "basic" &&  live(audiosound) 
                             }
                            console.log("on Finish ---------------->=============>",value)
                           
                         }}
                            workoutref={WorkoutRef}
                            transparent={() => {
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

                    ref={setref}
                    time={(initialsets - Setcount)<10 ? `0${(initialsets - Setcount)}`:(initialsets - Setcount)}
                    onAnimationComplete={() => {
                        if (Setcount == initialsets) {
                            setActive(true)
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

                            audio?.audio_type == "basic" ? start(endrec) : live(end)
                        }
                    }}
                    title={'Sets Left'}
                    value={Setcount - 0.03}
                    maxValue={initialsets}
                    radius={60}
                    inActiveStrokeColor={COLORS.LIGHBLUE}
                    duration={1000}
                    dashedStrokeConfig={{
                        count: initialsets,
                        width: 198 / initialsets * 2,
                    }}
                />

                <CircularProgress
                    ref={repsRef}
                    time={(initialrepstime - repdecrese) < 10 ? `0${(initialrepstime - repdecrese)}`:(initialrepstime - repdecrese)}

                    onAnimationComplete={() => { }}
                    title={'Reps Left'}
                    value={repdecrese}//repdecrese
                    maxValue={(parseInt(GetTimerValue?.reps))}
                    radius={60}
                    inActiveStrokeColor={COLORS.REPS}
                    // activeStrokeColor={COLORS.BLACK_10}
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





