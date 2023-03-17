import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useCallback,
    exacttime,
    useContext
} from 'react';
import { Context } from '../../../Shared/Provider';
import {
    Text,
    View,
} from 'react-native';
import { hp, wp } from "../Globalstyle";
const Anothercomponent = (props, ref) => {
    const {
        value,
        duration,
        values,
        resttime,
        exacttime,
        workoutref,
        colors,
        colorsTime,
        transparent,
        name,
        FinishValue,
        ...res
    } = props
    const { audio_base_url, weekCount, audiotrack, valueRef, stoprest, setstoprest } = useContext(Context);
    const [isTimerplay, setisTimerplay] = useState(value)
    const [Check, setcheck] = useState(name[0]);
    const [rest, setrest] = useState('')
    useImperativeHandle(ref, () => ({
        play,
        pause,
        reAnimate,
        Check
    }));


    const filteredValue = (val) => {
        let worktime = val - resttime
    

        if (worktime <= 0) {

            return val<10 ?` 0${val}`  : val 
        }
       console.log(val,'val',duration,'duration',resttime,'resttime',worktime.length)

        return worktime<10 ? `0${worktime}`: worktime 

    }

    const play = useCallback(() => {
        setisTimerplay(true)
    }, []);
    const pause = useCallback(() => {
        setisTimerplay(false)
    }, []);
    const reAnimate = useCallback(() => {
        console.log('hello');
    }, []);


   


    return (
        <>
            <CountdownCircleTimer
                size={195}
                onComplete={() => {
                    FinishValue('workout')
                    setcheck(name[0]);

                  
                    return { shouldRepeat: true };
                }}
                onUpdate={e => {
                    console.log(resttime,'resttimeresttimeresttimeresttimeresttime',e)
                    if(e==resttime){
                        FinishValue('rest')
                    }
                    FinishValue('')
                    if (e == resttime + 0.5 || e < resttime + 0.5) {
                      
                        setcheck(name[1]);
                        
                        workoutref.current.ColorChnage();
                    }
                    if (e == 0) {
                        workoutref.current.ColorAgain()
                        
                    }
                }}
                isSmoothColorTransition={false}
                trailColor="rgba(0,0,0,0.3)"
                colors={["#03d875", '#ff0000', '#ff0000']}
                 colorsTime={[resttime, resttime, 0]}
                rotation="clockwise"
                isPlaying={isTimerplay}
                duration={duration}
                {...res}
            >
                {({ remainingTime }) => (
                    <View>
                          <Text style={{ fontSize: 20 }}>{Check}</Text>
                         <Text style={{ alignSelf: "center", color: 'black', fontWeight: "bold", fontSize: 37, marginBottom: "34%", }}>{':' + filteredValue(remainingTime)}</Text>
                    </View>
                )}
            </CountdownCircleTimer>
         
            {Check == name[0] && <View style={{ position: "absolute", top: "24%" }}>
                <CountdownCircleTimer
                    size={195}
                    onComplete={() => {
                        FinishValue('work')
                    }}

                    onUpdate={e => {
                       
                        FinishValue('work')
                    }}
                    initialRemainingTime={resttime}
                    isSmoothColorTransition={false}
                    rotation="clockwise"
                    trailColor="transparent"
                    isPlaying={false}
                    duration={duration}
                    colors={["#ff0000", '#ff0000', '#ff0000']}
                    colorsTime={colorsTime}
                >

                </CountdownCircleTimer>
            </View>}
        </>

    );
};




export default forwardRef(Anothercomponent);


