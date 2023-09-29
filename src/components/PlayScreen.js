import React, { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const PlayScreen = () => {
    const [Language, setLanguage] = useState('en');
    const [Index, setIndex] = useState(0);
    
    const Data = [ 
    { en: "Hello", vi: "xin chào" },
    { en: "Mouse", vi: "Chuột" },
    { en: "Table", vi: "Bàn" },
    { en: "computor", vi: "Máy Tính" }]
    
    const [languageDate, setLanguageDate] = useState(Data);
    const [currentData, setCurrentData] = useState(languageDate[0]);

    const toggleLanguage = () => {
      if (Language === 'en') {
        setLanguage('vi');
      } else {
        setLanguage('en');
      }
    };
  
 
    const nextItem = () => {
      setIndex((Index) => (Index + 1) % languageDate.length);
      setCurrentData(languageDate[Index]);
  };
  
  
    const previousItem = () => {
        setIndex((Index)=> (Index -1 + languageDate.length) % languageDate.length);
        setCurrentData(languageDate[Index]);
    };
  
    const handleRemove = () => {
      const newData = [...languageDate];
      if (newData.length > 0) {
        newData.splice(Index, 1);
        setLanguageDate(newData);
  
        if (newData.length === 0) {
          setCurrentData({});
          setIndex(0);
        } else if (Index >= newData.length) {
          setIndex(newData.length - 1);
          setCurrentData(newData[newData.length - 1]);
        } else {
          setCurrentData(newData[Index]);
        }
      }
    };
    
    const handReset =()=>{
      setLanguageDate(Data);
    }

    return (
      <View style={styles.contents}>
        <View style={styles.topTitle}>
          <Text style={styles.Title}>Play({languageDate.length} Cards)</Text>
        </View>
        <Pressable style={styles.cardText} onPress={toggleLanguage}>
          <View style={styles.cardText_middle}>
            <Text style={styles.TextChange}>
              {currentData[Language]}
            </Text>
          </View>
        </Pressable>
        <View style={styles.Derects}>
          <Pressable style={styles.DerectsBtn}>
            <Text style={styles.TextBtn} onPress={previousItem}>Previous</Text>
          </Pressable>
          <Pressable style={styles.DerectsBtn} onPress={nextItem}>
            <Text style={styles.TextBtn}>Next</Text>
          </Pressable>
        </View>
        <View style={styles.BottomBtn}>
          <Pressable style={styles.BottomBtn_Tap} onPress={handleRemove}>
            <Text style={styles.BottomBtn_Text}>Remove from Deck</Text>
          </Pressable>
          <Pressable style={styles.BottomBtn_Tap} onPress={handReset}>
            <Text style={styles.BottomBtn_Text}>Reset Deck</Text>
          </Pressable>
        </View>
        <View style={styles.CtnBottom}>
            <Pressable>
              <Icon style={styles.Iconbtn} name="play" size={20} color="#FE2E54" />
              <Text style={styles.CtnBottom_text}>Play</Text>
            </Pressable>
            <Pressable>
            <Icon style={styles.Iconbtn} name="gear" size={20} color="#FE2E54" />
              <Text style={styles.CtnBottom_text}>Settings</Text>
            </Pressable>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    contents:{
        flex: 1,
        marginTop:30,
        backgroundColor:"#EFEFF3"
    },
    topTitle:{
        height:50,
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    Title:{
        fontSize:20,
        fontWeight:"600"
    }
    ,

    cardText:{
        width: '90%', 
        height: '50%',
        marginTop:20,
        backgroundColor:"#FE2E54",
        alignSelf:'center',
        borderRadius:10        
    },
    cardText_middle:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    TextChange:{
        fontSize:60,
        color:"white",
    },
    Derects:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20
    },
    DerectsBtn:{
        width:100,
        height:30,
        borderWidth:1,
        borderColor:'#FE2E54',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3
    },
    TextBtn:{
        color:'#FE2E54'
    },
    BottomBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    BottomBtn_Tap:{
        width: '90%',
        marginVertical: 5,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius:3
    },
    BottomBtn_Text:{
        color: '#FE2E54',
        fontSize:18
    },
    CtnBottom:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#FFFFFF"
    },
    CtnBottom_text:{
      color: '#FE2E54'
    },
    Iconbtn:{
      textAlign:"center"
    }

  })

  export default PlayScreen;
