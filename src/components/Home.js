import React from 'react';
import { View, Text, Pressable,ImageBackground } from 'react-native';
import logo from '../../assets/bg.png';
import styles from '../css/styles';
const HomeLogin = () =>{

    return (
        <ImageBackground source={logo} style={styles.BgImage} >
            <Text style={styles.textTitle}>Welcome To {'\n'}Shh!</Text>
            <Text style={styles.textTitle1}>A Hub Where Whispers Echo {'\n'}Loudest</Text>
            <View style={styles. cloudContainer}>
                <View style={styles.cloudTop}></View>
                <View style ={styles.cloudBottom}></View>
            </View>
            <View style={styles. cloudContainer}>
                <View style={styles.cloudTopRight}></View>
                <View style ={styles.cloudBottomRight}></View>
            </View>
            <View style={styles.buttomGroup}>
                <Pressable style={styles.signupButton} onPress={()=>{}}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </Pressable>
                <View style={styles.AlreadyGroup}>
                    <Text style={styles.AlreadyText}>Already have a account?</Text>
                    <Pressable onPress={()=>{}}>
                        <Text style={styles.LoginText} >Login</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}   
 export default HomeLogin; 