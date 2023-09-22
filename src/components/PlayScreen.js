import React, { View, Text, StyleSheet, Pressable } from "react-native";

const  PlayScreen = () => {
    return (
        <View style={styles.contents}>
            <View style={styles.topTitle}>
              <Text style={styles.Title}>Play(46 Cards)</Text>
            </View>
            <Pressable style={styles.cardText}>
            </Pressable>
            <View style={styles.Derects}>
                <Pressable style={styles.DerectsBtn}>
                    <Text style={styles.TextBtn}>Previous</Text>
                </Pressable>
                <Pressable style={styles.DerectsBtn}>
                    <Text style={styles.TextBtn}>Next</Text>
                </Pressable>
            </View>
            <View style={styles.BottomBtn}>
                <Pressable style={styles.BottomBtn_Tap}>
                    <Text style={styles.BottomBtn_Text}>Remove from Deck</Text>
                </Pressable>
                <Pressable style={styles.BottomBtn_Tap}>
                    <Text style={styles.BottomBtn_Text}>Reset Deck</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contents:{
        flex: 1,
        marginTop:30,
        backgroundColor:"#E2E1E1"
    },
    topTitle:{
        height:50,
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    cardText:{
        width: '90%', 
        height: '50%',
        marginTop:20,
        backgroundColor:"#DC143C",
        alignSelf:'center',
        borderRadius:10        
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
        borderColor:'#DC143C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2
    },
    TextBtn:{
        color:'#DC143C'
    },
    BottomBtn_Tap:{
        width: '90%', 
        
    },
    BottomBtn_Text:{
        marginTop:10,
        height:30,
        backgroundColor:"#FFFFFF",
        color:'#DC143C',
    }




  })

  export default PlayScreen;
