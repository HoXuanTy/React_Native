import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    content:{
      flex: 1,
      marginTop: 30,
      backgroundColor: '#8C5CB3',
    },
    BgImage:{
        flex: 1,
        
    },
    textTitle: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
      paddingLeft:20
    },
    textTitle1:{
        fontWeight:"800",
        fontSize:20,
        paddingLeft:20
    },
    cloudContainer:{
        top: 20
    },
    // Cloud left
    cloudTop :{
        borderTopRightRadius:50,
        width:40,
        height:40,
        backgroundColor: '#D9D9D9'
    },
    cloudBottom:{
        width:100,
        height:120,
        backgroundColor: '#D9D9D9',
        borderTopRightRadius:100,
        borderBottomRightRadius:100,
    },
    
    // Cloud right
    cloudTopRight:{
        width: 70,
        height: 80,
        borderTopLeftRadius:100,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        top: -60,
        right: 0, 
    },
    cloudBottomRight: {
        width: 130,
        height: 130,
        backgroundColor: '#D9D9D9',
        position: 'absolute', 
        right: 0,
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
    },


    // Button Sign Up
    buttomGroup:{
        bottom:-180,
        alignSelf:'center',
        justifyContent:"center",
        alignItems:"center",
    },
    signupButton:{
        justifyContent:"center",
        alignItems:"center",
        width:284,
        height:59,
        backgroundColor:"#000000",
        borderRadius:20
    },
    signupText:{
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"800"
    },
    AlreadyGroup:{
        flexDirection:'row',
    },
    AlreadyText:{
        color:"#FFFFFF",
        fontSize:15,
        fontWeight:"800"
    },
    LoginText:{
        color:"#00000",
        fontSize:15,
        fontWeight:"800"
    }
  });
  
export default styles;
