
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState, useEffect ,useContext,useRef} from 'react';
import { hp,wp } from '../../Components/Globalstyle';
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
export default function AlarmSetting({ navigation }) {
  const { Female, API, setprops,  firsttime, setLoader, } = useContext(Context);
  const [selected_date, setselected_date] = useState('')
  const [sessionOne, setsessionOne] = useState(new Date())
  const [sessionTwo, setsessionTwo] = useState(new Date())
  const [sessionThree, setsessionThree] = useState(new Date())
  const [sessionFour, setsessionFour] = useState(new Date())
  const [ActiveModal, setActiveModal] = useState(false);
  const [active, setactive] = useState(false)
  const currentDate = moment(new Date()).format("MM-DD-YYYY")
  const Dateforsession = moment(new Date()).format("MM-DD-YYYY")
  const [activequestion, setactivequesetio] = useState({
    active: currentDate.slice(0, 2),
    True: currentDate.slice(3, 5),
    id: currentDate.slice(6, 10),
  });
  const [data, setdata] = useState()
  const [getSession, setgetSession] = useState(false);
  const [Active, setActive] = useState(false);
  const monthNames = ["", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const [selected, setselected] = useState(false)
  const [selectDate, setselectDate] = useState(false)
  const DayTime = activequestion.True + ' ' + monthNames[activequestion.active] + ' ' + activequestion.id
  const Dayvalue = activequestion.id + ' ' + activequestion.active + ' ' + activequestion.True
  const dateValue = activequestion.active + '-' + activequestion.True + '-' + activequestion.id
  const [Remember, setRemember] = useState(false);
  const [RememberMonth, setRememberMonth] = useState(false);
  const [RememberYear, setRememberYear] = useState(false);
  const checkRef = useRef();
  const [idValue, setidValue] = useState('')
  const [editActive,setEditActive]= useState(false)
 

  useEffect(() => {
    checkRef.current = idValue;
    if (idValue == 1) {
      setRemember(true)
      setRememberMonth(false)
      setRememberYear(false)
    } else {
      if (idValue == 2) {
        setRemember(false)
        setRememberMonth(true)
        setRememberYear(false)
      } else {
        if (idValue == 3) {
          setRemember(false)
          setRememberMonth(false)
          setRememberYear(true)
        } else {
          setRemember(false)
          setRememberMonth(false)
          setRememberYear(false)
        }
      }
    }
  }, [idValue]);

  useEffect(() => {
    setLoader(true)
    API.GetSession((e) => {
      if (e.data.session_1 || e.data.session_2 || e.data.session_3 || e.data.session_4 !== null) {
        setprops(false)
        setLoader(false)
      } else {
        setdata(e.data)
        setactive(true)
        setprops(2)
        seteditkey(e.data.session_1.time)
        setsessionOne((e.data.session_1.time))
        setsessionTwo((e.data.session_2.time))
        setsessionThree((e.data.session_3.time))
        setsessionFour((e.data.session_4.time))
        setLoader(false)
      }

    }, {
      date: Dateforsession
    })
  }, [])

  useEffect(() => {
    setLoader(true)
    API.GetSession((e) => {
      if (e.data.session_1 || e.data.session_2 || e.data.session_3 || e.data.session_4 !== null) {
        setprops(2)
        setdata(e.data)

        setsessionOne(new Date(e.data.session_1.time))
        setsessionTwo(new Date(e.data.session_2.time))
        setsessionThree(new Date(e.data.session_3.time))
        setsessionFour(new Date(e.data.session_4.time))
        setLoader(false)

      } else {
        setprops(false)
        setLoader(false)
        seteditkey('')
      }
    }, {
      date: dateValue
    })
  }, [selected_date])

  const setTimer = () => {
    const sessionone = moment.utc(sessionOne).format("HH:mm")
    const sessiontwo = moment.utc(sessionTwo).format("HH:mm")
    const sessionthree = moment.utc(sessionThree).format("HH:mm")
    const sessionfour = moment.utc(sessionFour).format("HH:mm")
    API.getUserSession((e) => {
    }, {
      session_1: sessionone,
      session_2: sessiontwo,
      session_3: sessionthree,
      session_4: sessionfour,
      for_whole_week: Remember,
      for_whole_month: RememberMonth,
      for_whole_year: RememberYear,
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

  const CheckButton = ({ value, checkvalue, title, id }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            setidValue(checkvalue)
            setActive(checkvalue)
            if (checkvalue == Active) {
              setActive(!Active);
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
            title={title}
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



     useEffect(()=>{},[editActive])

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
                  title={currentDate}
                />

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
                markedDates={{
                  [selected_date]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedColor: !Female.gender ? Colors.blue : Colors.pink,
                    selectedTextColor: '#FFFF',
                  },
                }}
                disableAllTouchEventsForDisabledDays={true}
                minDate={this.previousdates()}
                onDayPress={day => {
                  setEditActive(false)
                  setselected(true)
                  setselectDate(true)
                  setselected_date(day.dateString)
                  setactivequesetio({ active: day.month, True: day.day, id: day.year })
                }}
                onMonthChange={month => {
                  if (moment(new Date()).format("MM") !== month) {
                    setprops(false)
                  } else {
                    setselectDate(true)
                  }
                }}

                theme={{
                  monthTextColor: !Female.gender ? Colors.blue : Colors.pink,
                  arrowColor: !Female.gender ? Colors.blue : Colors.pink,
                  textMonthFontSize: 18,
                  selectedDayTextColor: '#00adf5',
                  selectedDayBackgroundColor: '#00adf5',
                  todayTextColor: '#00adf5',
                  backgroundColor: "#ffffff",
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
              
                  justifyContent:'space-around'
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // width: wp(70),
                 
                    justifyContent:'space-around',
                   // marginLeft: wp(5),
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

                {/* <TouchableOpacity onPress={setTimer}> */}

                <View style={{ flexDirection: "row" ,marginLeft:-wp(10)}}>
                  <TouchableOpacity
                  onPress={()=>setEditActive(true)}
                  >
                  <Image
                    style={{
                      height: hp(3),
                      width: hp(3),
                    }}
                    source={!Female.gender ? img.edits : img.edits_pink}
                  />
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                  disabled={!editActive}
                  onPress={()=>  setTimer()}
                  >
                  <Image
                  
                    style={{
                      height: hp(3),
                      width: hp(3), 
                      marginLeft:wp(1.5),
                      opacity:!editActive?0.5:1
                    }}
                    source={!Female.gender ? img.plus_blue : img.plus}
                  />
                  </TouchableOpacity>
                 
                </View>
                {/* {
                    props == 2 ?  : 
                  } */}

                {/* </TouchableOpacity> */}
              </View>

              <View style={{ paddingHorizontal: 20, marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-around' }}>
                <SessionPicker
                  isEdit = {editActive}
                  title={'Session 1'}
                  value={sessionOne}
                  setValue={setsessionOne}
                  prop={2}
                />

                <SessionPicker
                isEdit = {editActive}
                  title={'Session 2'}
                  value={sessionTwo}
                  setValue={setsessionTwo}
                  prop={2}
                />

              </View>
              <View style={{ paddingHorizontal: 20, marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-around' }}>
                <SessionPicker
                   isEdit = {editActive}
                  title={'Session 3'}
                  value={sessionThree}
                  setValue={setsessionThree}
                  prop={3}
                />
                <SessionPicker
                   isEdit = {editActive}
                  title={'Session 4'}
                  value={sessionFour}
                  setValue={setsessionFour}
                  prop={2}
                />

              </View>
              <View style={{ marginLeft: wp(7), marginTop: wp(2) }}>
                <CheckButton
                  checkvalue={1}
                  title={"Copy for this week"}
                />
              </View>
              <View style={{ marginLeft: wp(7), marginTop: wp(2) }}>
                <CheckButton
                  checkvalue={2}
                  title={"Copy for this Month"}
                />
              </View>
              <View style={{ marginLeft: wp(7), marginTop: wp(2) }}>
                <CheckButton
                  checkvalue={3}
                  title={"Copy for this year"}
                />
              </View>
            </View>

            <View style={{ marginBottom: hp(6), marginTop: hp(4) }}>
              <Buttons

                onPress={() => firsttime == 2 ? navigate('AudioSetting') : navigate("Setting")}

                style={{ width: wp(90) }} title={firsttime == 2 ? 'Go To Audio Setting' : 'save'} />
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

