import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState ,useContext ,useRef} from 'react';
import {wp,  hp } from '../../Components/Globalstyle';
import Header from '../../Components/Header';
import { Calendar,LocaleConfig } from 'react-native-calendars';
import { scale } from 'react-native-size-matters';
import { Colors, img, navigate } from '../../Components/Config';
import Buttons from '../../Components/Buttons';
import MyText from '../../Components/Ctext';
import { Context } from '../../../Shared/Provider';
import SessionPicker from '../../Components/SessionPicker';
const { width } = Dimensions.get('window')
import moment from 'moment';
export default function Calender({ navigation }) {
  const { Female,  API} = useContext(Context);
  const [sessionOne, setsessionOne] = useState(new Date())
  const [sessionTwo, setsessionTwo] = useState(new Date())
  const [sessionThree, setsessionThree] = useState(new Date())
  const [sessionFour, setsessionFour] = useState(new Date())
  const [GetDay, setDay] = useState()
  const [ActiveModal, setActiveModal] = useState(false);
  const currentDate = moment(new Date()).format("MM-DD-YYYY")
  const [activequestion, setactivequesetio] = useState({
    active: currentDate.slice(0, 2),
    True: currentDate.slice(3, 5),
    id: currentDate.slice(6, 10),
  });
  const [idValue, setidValue] = useState('')
  const [month, setmonth] = useState('')
  const [getSession, setgetSession] = useState(false);
  const [Active, setActive] = useState(false);
  const monthNames = ["", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const [selected, setselected] = useState(false)
  const [selectDate, setselectDate] = useState(false)
  const DayTime = activequestion.True + ' ' + monthNames[activequestion.active] + ' ' + activequestion.id
  const dateValue = activequestion.active + '-' + activequestion.True + '-' + activequestion.id
  var monthsname = monthNames[month]
  const [Remember, setRemember] = useState(false);
  const [RememberMonth, setRememberMonth] = useState(false);
  const [RememberYear, setRememberYear] = useState(false);
  const [selected_date, setselected_date] = useState('')
  const setTimer = () => {
    if(idValue == 1){
      setRemember(true)
      setRememberMonth(false)
      setRememberYear(false)
    }else{
      if(idValue == 2){
        setRemember(false)
        setRememberMonth(true)
        setRememberYear(false)
      }else{
        if(idValue == 3){
          setRemember(false)
          setRememberMonth(false)
          setRememberYear(true)
        }else{
          setRemember(false)
          setRememberMonth(false)
          setRememberYear(false)
        }
      }
    }


    const sessionone = moment.utc(sessionOne).format("H:mm")
    const sessiontwo = moment.utc(sessionTwo).format("H:mm")
    const sessionthree = moment.utc(sessionThree).format("H:mm")
    const sessionfour = moment.utc(sessionFour).format("H:mm")
    

    API.getUserSession((e) => {
    }, {
      session_1: sessionone,
      session_2: sessiontwo,
      session_3: sessionthree,
      session_4: sessionfour,
      for_whole_week: Remember,
      for_whole_month:RememberMonth,
      for_whole_year:RememberYear,
      date: selected ? dateValue : currentDate
    })
    setgetSession(true)
    setActiveModal(true)
  }

  LocaleConfig.locales['fr'] = {
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", '	November', "December"],
    monthNamesShort: ['Jan.', 'Féb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Aug', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNames: ['Sunday.', 'Monday.', 'Tuesday.', 'Wednesday.', 'Thursday.', 'Friday.', 'Saturday.'],
    today: "Aujourd'hui"
  };
  LocaleConfig.defaultLocale = 'fr';

  const CheckButton = ({ value, checkvalue }) => {

    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            setidValue(checkvalue)
            setActive(checkvalue)
            if(checkvalue == Active){
              
              value(true);
              setActive(false);
            }
           
          }}
          style={{
            marginTop: 5,
            marginLeft: 5,
            width: hp(3),
            height: hp(3),
            borderWidth: 1,
            borderColor: !Female.gender ? Colors.blue : Colors.pink,
            borderRadius: 2,
            marginBottom: hp(3),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {checkvalue == Active && ( 
     
            <Image
              source={img.right}
              style={{ height: '70%', width: '70%', resizeMode: 'contain' }}
            />
          )}
        </TouchableOpacity>
        <View style={{ marginLeft: wp(3), marginTop: 6 }}>
          <MyText
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: '#191919',
              fontSize: 12,
            }}
            black
            title={"Copy for this week"}
          />
        </View>
      </View>
    );
  };


  previousdates = () => {
    var today, DD, MM, YYYY;
    today = new Date();
    DD = today.getDate();
    MM = today.getMonth() + 1;
    YYYY = today.getFullYear();
    return YYYY + "-" + MM + "-" + DD;
  }


  return (
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: '100%' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp(100),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                width: wp(50),
              }}>
              <Header
                onBackPress={() => {
                  navigation.goBack();
                }}
                left

              />
              <Text
                style={{
                  fontSize: scale(19),
                  marginTop: hp(1.5),
                  paddingLeft: wp(5),
                  fontFamily: 'Poppins-Bold',
                  color: !Female.gender ? Colors.blue : Colors.pink,
                }}>
                Calendar
              </Text>

            </View>

            <View
              style={{ flexDirection: 'row', marginTop: hp(2), width: wp(50) }}>
              <View style={{ padding: 13 }}>
                <Image
                  style={{
                    height: wp(5.2),
                    width: wp(5),
                    marginTop: -wp(1),
                  }}
                  source={!Female.gender ? img.calendar_blue : img.calendar}
                />
              </View>
              <View style={{}}>

                <MyText
                  style={{
                    fontSize: scale(11),
                    color: '#444444',
                    marginTop: hp(1.5),

                  }}

                  poppinsbold
                  title={GetDay == null ? currentDate : GetDay}
                />

                {/* <Text
                  style={{
                    fontSize: scale(7),
                    fontFamily: 'Montserrat-Regular',
                    color: '#575757',
                  }}>
                  3 Upcoming workout here
                </Text> */}
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: '#fff6d2',
              paddingTop: hp(5),
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              marginTop: 30,
              alignItems: 'center',
            }}>
            <View style={{ width: width / 1.1 }}>
              <Calendar
                hideExtraDays
                enableSwipeMonths={true}
                minDate={this.previousdates()}
                markedDates={{
                  [selected_date]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedColor: !Female.gender ? Colors.blue : Colors.pink,
                    selectedTextColor: '#FFFF',
                  },
                }}
                onDayPress={day => {
                  
                  setselected(true)
                  setselectDate(true)
                  setselected_date(day.dateString)
                  setactivequesetio({ active: day.month, True: day.day, id: day.year })

                }}
                theme={{
                  monthTextColor: !Female.gender ? Colors.blue : Colors.pink,
                  arrowColor: !Female.gender ? Colors.blue : Colors.pink,
                  textMonthFontSize: 18
                }}
                style={{
                  borderRadius: 15,
                  fontFamily: 'Poppins-SemiBold'
                }}
              />
            </View>
            <View
              style={{
                width: wp(90),
                backgroundColor: 'white',
                borderRadius: 15,
                marginTop: 30,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(3),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: wp(75),
                    marginLeft: wp(5),
                  }}>
                  <MyText
                    style={{ fontSize: scale(13), color: 'black' }}
                    black
                    poppinsbold
                    title={'Select Times'}
                  />
                  <View
                    style={{
                      borderRadius: 20,
                      backgroundColor: !Female.gender
                        ? Colors.blue
                        : Colors.pink,
                      width: wp(30),
                      height: wp(7),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: wp(3),
                    }}>
                    <MyText
                      style={{ textAlign: 'center', fontSize: scale(8) }}
                      white
                      poppinsbold
                      title={DayTime}
                    />
                  </View>
                </View>

                <TouchableOpacity onPress={setTimer}>
                  <Image
                    style={{
                      height: hp(3),
                      width: hp(3),
                    }}
                    source={!Female.gender ? img.plus_blue : img.plus}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ paddingHorizontal: 20, marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-around' }}>
                <SessionPicker
                  title={'Session 1'}
                  value={sessionOne}
                  setValue={setsessionOne}

                />

                <SessionPicker
                  title={'Session 2'}
                  value={sessionTwo}
                  setValue={setsessionTwo}

                />

              </View>
              <View style={{ paddingHorizontal: 20, marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-around' }}>
                <SessionPicker
                  title={'Session 3'}
                  value={sessionThree}
                  setValue={setsessionThree}

                />
                <SessionPicker
                  title={'Session 4'}
                  value={sessionFour}
                  setValue={setsessionFour}
                />

              </View>
              <View style={{ marginLeft: wp(7), marginTop: wp(2) }}>
                <CheckButton
                  checkvalue={1}
                  value={setRemember}
                />
              </View>
              <View style={{ marginLeft: wp(7), marginTop: wp(2) }}>
                <CheckButton
                  checkvalue={2}
                  value={()=>setRememberMonth}
                />
              </View>
              <View style={{ marginLeft: wp(7), marginTop: wp(2) }}>
                <CheckButton
                  checkvalue={3}
                  value={setRememberYear}
                />
              </View>
            </View>

            <View style={{ marginBottom: hp(6), marginTop: hp(4) }}>
              <Buttons
                onPress={() => navigate('WorkoutSetting')}
                // onPress={() => navigate('WorkoutSetting')}

                style={{ width: wp(90) }} title={'Go To Audio Setting'} />
            </View>
          </View>
        </View>
        <Modal
          animationType="slide"
          hardwareAccelerated
          transparent={true}
          visible={ActiveModal}
          onRequestClose={() => setActiveModal(false)}>
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
                  style={{ height: hp(7), width: hp(7), marginBottom: 33 }}
                  source={!Female.gender ? img.blue_tick : img.pink_tick}></Image>

                <MyText
                  style={{
                    textAlign: 'center',
                    fontSize: scale(13),
                    marginBottom: 33
                  }}
                  poppinsemibold
                  title={'Successfully added session'}
                />
                <TouchableOpacity
                  onPress={() => { setActiveModal(!ActiveModal) }}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
});