// import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
// import React, {
//     useState,
//     useImperativeHandle,
//     forwardRef,
//     useCallback,
//     exacttime
// } from 'react';
// import {
//     Text,
//     View,
// } from 'react-native';
// const Timerinitial = (props, ref) => {
//     const {
//         value,
//         duration,
//         values,
//         resttime,
//         exacttime,
//         workoutref,
//         colors,
//         colorsTime,
//         transparent,
//         name,
//         ...res
//     } = props


//     const [isTimerplay, setisTimerplay] = useState(value)
//     const [Check, setcheck] = useState(name[0]);
//     const [Trackcolor, setTractcolor] = useState("transparent")
//     const [ValueDifference, setValueDifference] = useState(value - resttime)
//     let halfValue = parseInt(duration / 1.8);


//     const play = useCallback(() => {
//         setisTimerplay(true)
//     }, []);
//     const pause = useCallback(() => {
//         setisTimerplay(false)
//     }, []);

//     const [Copycirclecolor, setcopycirclecolor] = useState(true)



//     const Coloranimate =()=>{
//        setcopycirclecolor(false)
//    }



//     const reAnimate = useCallback(() => {
//         console.log('hello');
//     }, []);

  
//     useImperativeHandle(ref, () => ({
//         play,
//         pause,
//         reAnimate,
//         Coloranimate,
//     }));
//     return (
//         <View style={{
//             justifyContent: 'center',
//             zIndex: Copycirclecolor? 21:-1,
//             alignItems: 'center',
//             paddingTop: 47,
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             overflow: 'hidden',
//         }}>
//         <CountdownCircleTimer
//             size={195}
//             onComplete={() => {
//                 setcheck(name[0]);
//                 return { shouldRepeat: true };
//             }}

//             onUpdate={e => {

//                 let difference = Math.abs(value - e)

//                 console.log(e, '15', 25 - 10)



//                 if (e == resttime + 0.5 || e < resttime + 0.5) {
//                     setcheck(name[1]);
//                     // pause()

//                     // workoutref.current.ColorChnage();
//                     // transparent(false)
//                 }

//                 if (e == 0) {
//                     // workoutref.current.ColorAgain()
//                     // transparent(true)

//                 }



//             }}
//             isSmoothColorTransition={false}

//             rotation="clockwise"
//             isPlaying={isTimerplay}
//             duration={duration}
//             colors={  ["#242bf9", '#242bf9', '#242bf9'] }
//             colorsTime={[15, 10, 0]}
//             {...res}
//         >
//             {({ remainingTime }) => (
//                 <View>
//                     <Text style={{ marginBottom: 105, fontSize: 20 }}>{Check}</Text>
//                 </View>
//             )}
//         </CountdownCircleTimer>
//         </View>
//     );
// };




// export default forwardRef(Timerinitial);

