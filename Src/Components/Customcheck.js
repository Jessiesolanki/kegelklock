import React, {useState,useContext} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { Context } from '../../Shared/Provider';
import {scale} from 'react-native-size-matters';

export const Femalecheck = ({onCheck, value,id }) => {
  const [Checked, setChecked] = useState(false);
  const {checkboxValue, setcheckboxValue,} = useContext(Context);
  return (
    <TouchableOpacity
      onPress={() => {
        if(value == true ){
        setChecked(true)
        onCheck(Checked)
        setcheckboxValue(id)
        if ( checkboxValue == id) {

            onCheck(checkboxValue);
            setcheckboxValue(!checkboxValue);
          
          
        }
        }
      }}
      style={{height: scale(30), width: scale(30)}}>
      <Image
        style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        source={
          checkboxValue == id
            ? require('../images/check_select_female.png')
            :require('../images/check_unselect_female.png')
        }
      />
    </TouchableOpacity>
  );
};

export const Malecheck = ({onCheck, value,id}) => {
  const {checkboxValue, setcheckboxValue} = useContext(Context);
  const [maleChecked, setMaleChecked] = useState(false);
  return (
    <TouchableOpacity
    onPress={() => {
      if(value == true ){
      setMaleChecked(true)
      onCheck(maleChecked)
      setcheckboxValue(id)
      if ( checkboxValue == id) {
        
          onCheck(checkboxValue);
          setcheckboxValue(!checkboxValue);
        
        
     
      }
    }
    }}
      style={{height: scale(30), width: scale(30)}}>
      <Image
        style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        source={
          checkboxValue == id
            ? require('../images/check_select__.png')
            : require('../images/check_unselect_male.png')
        }
      />
    </TouchableOpacity>
  );
};

export const Pinktick = ({onCheck}) => {
  const [pinkChecked, setpinkChecked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setpinkChecked(!pinkChecked);
        onCheck(pinkChecked);
      }}
      style={{height: scale(30), width: scale(30)}}>
      <Image
        style={{
          height: 25,
          width: 25,
          resizeMode: 'contain',
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          marginRight: 20,
          marginTop: 15,
        }}
        source={
          pinkChecked
            ? require('../images/pink_tick.png')
            : require('../images/cream.png')
        }
      />
    </TouchableOpacity>
  );
};

export const Greencheck = ({onCheck}) => {
  const [greenChecked, setGreenChecked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setGreenChecked(!greenChecked);
        onCheck(greenChecked);
      }}
      style={{height: scale(70), width: scale(70)}}>
      <Image
        style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        source={
          greenChecked
            ? require('../images/check.png')
            : require('../images/green_uncheck.png')
        }
      />
    </TouchableOpacity>
  );
};

export const Bluetick = ({onCheck}) => {
  const [blueChecked, setblueChecked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setblueChecked(!blueChecked);
        onCheck(blueChecked);
      }}
      style={{height: scale(30), width: scale(30)}}>
      <Image
        style={{
          height: 25,
          width: 25,
          resizeMode: 'contain',
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          marginRight: 20,
          marginTop: 15,
        }}
        source={
          blueChecked
            ? require('../images/check_select__.png')
            : require('../images/cream.png')
        }
      />
    </TouchableOpacity>
  );
};
