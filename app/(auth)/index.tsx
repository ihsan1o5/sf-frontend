import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
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
      <View style={styles.helloContainer}>
        <Typo size={70} color='black' style={styles.helloText}>
            Hello 
        </Typo>
      </View>
      <View>
        <Typo size={18} style={styles.signInText}>Sign in to your account!</Typo>
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
      <TouchableOpacity>
        <Typo size={18} color={Colors.light.text} style={styles.forgotPasswordText}>
            Forgot you password?
        </Typo>
      </TouchableOpacity>

      <View style={styles.signInBtnContainer}>
        <TouchableOpacity
            style={styles.signInBtn}
        >
            <Typo size={18} fontWeight="700" color={Colors.light.text}>
                Sign In 
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
        style={styles.createAccountText}
      >
        <Typo 
            size={16} 
            color={Colors.light.text}
        >
            Don't have an account?
        </Typo>
        <Link href="/(auth)/register" asChild>
            <TouchableOpacity>
                <Typo 
                    size={16} 
                    color={Colors.light.tint} 
                    fontWeight="bold"
                    style={{ textDecorationLine: 'underline' }}
                >Create</Typo>
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

export default Login

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
    helloContainer: {},
    helloText: {
        textAlign: 'center',
        fontWeight: "500",
        color: Colors.light.text
    },
    signInText: {
        textAlign: 'center',
        color: Colors.light.text,
        marginBottom: 30,
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
        marginVertical: 20,
        height: 50,
        paddingHorizontal: 20,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    },
    forgotPasswordText: {
        textAlign: 'right',
        width: '90%',
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
        paddingVertical: '12%'
    },
    signInBtn: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    createAccountText: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        marginVertical: '10%',
        height: '100%'
    },
    bottomLeftVectorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    bottomLeftVector: {
        height: 300,
        width: 200
    },
})