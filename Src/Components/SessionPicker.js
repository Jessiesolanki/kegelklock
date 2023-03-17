// import { Text,TouchableOpacity,Dimensions, View} from 'react-native'
// import React ,{useState,useContext, useEffect} from 'react'
// import DateTimePicker from '@react-native-community/datetimepicker';
// import {scale} from 'react-native-size-matters';
// import {Context} from '../../Shared/Provider';
// import moment from 'moment';
// const { height, width } = Dimensions.get('window')

//  const SessionPicker = ({start,setstart,value,setValue,title,prop,}) => {
//     const {props, setprops,calendar} = useContext(Context);
//     const [isDisplayDate, setShow] = useState(false);
//     const [timerValue, settimerValue] = useState('--:--')
 
//        const  showDatePicker=()=> {
//         setShow(true)
//         setprops(prop)
       
//       };

//       const onDateSelected = (event, selectedDate) => {
//          const currentDate = selectedDate || value;
//          setValue(currentDate);
//          setShow(false)
//       };
     
//       const time = moment(value).format("HH:mm")
//  return (
//     <View>
//         <Text style={{fontSize:14,fontWeight:'700',marginBottom:5}}>{title}</Text>
//     <TouchableOpacity onPress={()=>showDatePicker(true)} style={{height:60,width:width/2.9, fontSize: scale(18),
//     borderRadius: 5,backgroundColor: '#f0f0f5',color: '#444444',  fontFamily: 'Poppins-Bold',justifyContent:'center',alignItems:'center'  }}>
//     {  calendar == true ?    <Text style={{color:'grey',fontSize:30}}>{ timerValue  }</Text>
// :
//    <Text style={{color:'grey',fontSize:30}}>{ props ? time :timerValue }</Text>}
//            {isDisplayDate && (
//              <DateTimePicker
//              value={value}
//              mode={'time'}
//              is24Hour={true}
//              display="spinner"
//              onChange={onDateSelected}
//           />)}
//     </TouchableOpacity>
//     </View>
//   )
// }


// export default SessionPicker


import { Text, TouchableOpacity, Dimensions, View } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { scale } from 'react-native-size-matters';
import { Context } from '../../Shared/Provider';
import moment from 'moment';
const { height, width } = Dimensions.get('window')

const SessionPicker = ({ isEdit, start, setstart, value, setValue, title, prop, }) => {
   const { GetTime, setTime, props, setprops, setcalendar, calendar } = useContext(Context);
   const [datePicker, setDatePicker] = useState(false);
   const [isDisplayDate, setShow] = useState(false);
   const [timerValue, settimerValue] = useState('--:--')

   const showDatePicker = () => {
      setShow(true)
      setprops(prop)

   };
   const onDateSelected = (event, value) => {

      setValue(value)

      setShow(false)

   };

   // var hours =  value.getHours() ;
   // if(hours <= 9)
   // hours = '0'+hours;
   // var min =value.getMinutes();
   //  if(min <= 9)
   //   min = '0'+min;
   // const time = hours+':'+ min
   const time = moment(value).format("HH:mm")



   return (
      <View>
         <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 5 }}>{title}</Text>
         <TouchableOpacity onPress={() => {
         if(isEdit){
            showDatePicker(props)
         }
         }} style={{
            height: 60, width: width / 2.9, fontSize: scale(18),
            borderRadius: 5, backgroundColor: '#f0f0f5', color: '#444444', fontFamily: 'Poppins-Bold', justifyContent: 'center', alignItems: 'center'
         }}>
            {calendar == true ? <Text style={{ color: 'grey', fontSize: 30 }}>{timerValue}</Text>
               :
               <Text style={{ color: 'grey', fontSize: 30 }}>{props ? time : timerValue}</Text>}
            {isDisplayDate && (
               <DateTimePicker
                  value={value}
                  mode={'time'}
                  is24Hour={true}
                  display="default"
                  onChange={onDateSelected}
               />)}
         </TouchableOpacity>
      </View>
   )
}

//      const  showDatePicker=()=> {
//       setShow(true)
//       setTime(prop)

//     };
//     const onDateSelected =(event, value)=> {

//        setValue(value)

//         setShow(false)

//     };
//     const timetwo = moment(value).format("HH:mm")
// return (
//   <View>
//       <Text style={{fontSize:14,fontWeight:'700',marginBottom:5}}>{title}</Text>
//   <TouchableOpacity onPress={()=>showDatePicker(GetTime)} style={{height:60,width:width/2.9, fontSize: scale(18),
//   borderRadius: 5,backgroundColor: '#f0f0f5',     color: '#444444',  fontFamily: 'Poppins-Bold',justifyContent:'center',alignItems:'center'  }}>
//   {  calendar == true ?    <Text style={{color:'grey',fontSize:30}}>{ timerValuetwo  }</Text>
// :
//  <Text style={{color:'grey',fontSize:30}}>{ GetTime ? timetwo :timerValuetwo }</Text>}
//          {isDisplayDatetwo && (
//            <DateTimePicker
//            value={value}
//            mode={'time'}
//            is24Hour={true}
//            display="default"
//            onChange={onDateSelected}
//         />)}
//   </TouchableOpacity>
//   </View>
// )
// }

export default SessionPicker