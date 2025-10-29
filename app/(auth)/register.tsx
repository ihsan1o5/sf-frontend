import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);


  return (
    <ScreenWrapper
        style={styles.container}
    >
      <View
        style={styles.topImageContainer}
      >
        <Image 
            source={require("../../assets/images/header-vector.png")} 
            style={styles.topImage}
        />
      </View>
      <View style={styles.createAccountContainer}>
        <Typo size={30} color='black' style={styles.createAccountTitleText}>
            Create Account  
        </Typo>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons 
            name="person-outline" 
            size={24} 
            color={Colors.light.icon} 
        />
        <TextInput 
            style={styles.textInput} 
            placeholder="Username"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons 
            name="lock-closed-outline" 
            size={24} 
            color={Colors.light.icon} 
        />
        <TextInput 
            style={styles.textInput} 
            placeholder="Password"
            secureTextEntry={!showPassword}
        />
        <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
        >
            <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={24} 
                color={Colors.light.icon} 
            />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons 
            name="mail-outline" 
            size={24} 
            color={Colors.light.icon} 
        />
        <TextInput 
            style={styles.textInput} 
            placeholder="Email Address"
            keyboardType='email-address'
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons 
            name="phone-portrait-outline" 
            size={24} 
            color={Colors.light.icon} 
        />
        <TextInput 
            style={styles.textInput} 
            placeholder="Mobile Number"
            keyboardType='phone-pad'
        />
      </View>

      <View style={styles.signInBtnContainer}>
        <TouchableOpacity
            style={styles.signInBtn}
        >
            <Typo size={18} fontWeight="700" color={Colors.light.text}>
                Sign Up 
            </Typo>
            <LinearGradient
                colors={['#F97794', '#623AA2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.arrowBtn}
            >
                <Ionicons
                    name="arrow-forward"
                    size={34}
                    color={Colors.light.primary}
                />
            </LinearGradient>
        </TouchableOpacity>
      </View>

      <View
        style={styles.socialLoginContainer}
      >
        <TouchableOpacity
            style={styles.socialLoginBtn}
        >
            <Image
                source={require('../../assets/images/facebook.png')} 
                style={{ width: 35, height: 35 }}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.socialLoginBtn}
        >
            <Image
                source={require('../../assets/images/twitter.png')} 
                style={{ width: 35, height: 35 }}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.socialLoginBtn}
        >
            <Image
                source={require('../../assets/images/google.png')} 
                style={{ width: 35, height: 35 }}
            />
        </TouchableOpacity>
      </View>

      <View
        style={styles.alreadyHaveAccountText}
      >
        <Typo 
            size={16} 
            color={Colors.light.text}
        >
            Already have an account?
        </Typo>
        <Link href="/(auth)" asChild>
            <TouchableOpacity>
                <Typo 
                    size={16} 
                    color={Colors.light.tint} 
                    fontWeight="bold"
                    style={{ textDecorationLine: 'underline' }}
                >SignIn</Typo>
            </TouchableOpacity>
        </Link>
      </View>

      

      <View style={styles.bottomLeftVectorContainer}>
        <ImageBackground 
            source={require('../../assets/images/bottom-left-vector.png')} 
            style={styles.bottomLeftVector}
        />
      </View>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.primary,
        flex: 1,
    },
    topImageContainer: {},
    topImage: {
        width: '100%',
        height: 130
    },
    createAccountContainer: {},
    createAccountTitleText: {
        textAlign: 'center',
        fontWeight: "500",
        color: Colors.light.text
    },

    inputContainer: {
        backgroundColor: Colors.light.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 15,
        height: 50,
        paddingHorizontal: 20,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    },

    arrowBtn: {
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    signInBtnContainer: {
        width: '90%',
        paddingVertical: '5%'
    },
    signInBtn: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    alreadyHaveAccountText: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        marginVertical: '2%',
        height: '100%'
    },
    bottomLeftVectorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1
    },
    bottomLeftVector: {
        height: 300,
        width: 200
    },
    socialLoginContainer: {
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 20,
    },
    socialLoginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: Colors.light.background,
        elevation: 8,
    }
})