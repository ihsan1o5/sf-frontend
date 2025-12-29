import { Colors } from '@/constants/theme'
import { CardProps } from '@/types'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import PayDialog from './PayDialog'
import Typo from './Typo'

const Card = ({color, icon, title, caption, beneficiary, dueDate}: CardProps) => {
    const router = useRouter();
    const [dialogVisible, setDialogVisible] = useState(false);
  return (
    <View
      style={[styles.cardContainer, { backgroundColor: color || '#fff' }]}
    >
        <View
            style={styles.cardBody}
        >
            <View
                style={styles.cardTitleSection}
            >
                <Ionicons 
                    name={icon}
                    size={64}
                    color={color}
                />
                <View>
                    <Typo size={24} fontWeight='700' color={Colors.light.text.default} style={{ marginTop: 10 }}>
                        {beneficiary}
                    </Typo>
                    <Typo size={16} color={Colors.light.text.gray}>
                        Due Date: {dueDate}
                    </Typo>
                </View>
            </View>
            <Typo size={24} color={Colors.light.text.default} fontWeight='800'>
                <Typo size={18} color={Colors.light.text.gray}>Amount: </Typo> {title}
            </Typo>
            <View style={styles.divider}></View>
            <Typo size={18} color={Colors.light.text.gray}>
                {caption}
            </Typo>
            <View>
                <TouchableOpacity
                    style={{ alignItems: 'flex-end' }}
                    onPress={() => setDialogVisible(true)}
                >
                    <LinearGradient
                        colors={[Colors.light.primary, Colors.light.secondary]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.actionBtn}
                    >
                        <Typo size={18} color={Colors.light.text.light} fontWeight='700'>
                            Pay Now 
                        </Typo>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
        <PayDialog
            isVisible={dialogVisible}
            onClose={() => setDialogVisible(false)}
        />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 18,
        paddingTop: 5,
        width: '100%',
    },
    cardBody: {
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 20,
        elevation: 5,
    },
    cardTitleSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    divider: {
        height: 1,
        backgroundColor: Colors.light.text.gray,
        marginVertical: 15,
    },
    actionBtn: {
        width: 'auto',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
})