import { Colors } from '@/constants/theme'
import { QuickActionBtnProps } from '@/types'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Typo from './Typo'

const QuickActionBtn = ({icon, text}: QuickActionBtnProps) => {
  return (
    <TouchableOpacity
        style={styles.btnContainer}
    >
        <LinearGradient
            colors={[Colors.light.primary, Colors.light.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.actionBtn}
        >
            <Ionicons 
                name={icon}
                size={24}
                color={Colors.light.text.light}
                style={styles.btnIcon}
            />
        </LinearGradient>
        <Typo size={16} color={Colors.light.text.gray}>{text}</Typo>
    </TouchableOpacity>
  )
}

export default QuickActionBtn

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn: {
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    btnIcon: {
        fontWeight: '900',
        fontSize: 34
    }
})