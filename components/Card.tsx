import { Colors } from '@/constants/theme'
import { CardProps } from '@/types'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Typo from './Typo'

const Card = ({color, icon, title, caption}: CardProps) => {
  return (
    <View
      style={[styles.cardContainer, { backgroundColor: color || '#fff' }]}
    >
        <View
            style={styles.cardBody}
        >
            <Ionicons 
                name={icon}
                size={32}
                color={color}
            />
            <Typo size={24} color={Colors.light.text.default} fontWeight='800'>
                {title}
            </Typo>
            <Typo size={18} color={Colors.light.text.gray}>
                {caption}
            </Typo>
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 18,
        paddingTop: 5,
        width: '48%',
    },
    cardBody: {
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 20,
        elevation: 5,
    }
})