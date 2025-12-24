import { Colors } from '@/constants/theme'
import { HorizontalWidgetProps } from '@/types'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Typo from './Typo'

const HorizontalWidget = ({title, subTitle, icon, date}: HorizontalWidgetProps) => {
    const badgeColor =
        subTitle === 'Paid'
            ? '#d4edda'
            : subTitle === 'Over Due'
            ? '#f8d7da'
            : '#fdf9c9'

  return (
    <View
        style={styles.widgetContainer}
    >
        <View>
            <Typo size={20} color={Colors.light.text.default} fontWeight='700'>
                {title}
            </Typo>
            <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
                <View
                    style={[styles.widgetBadge, { backgroundColor: badgeColor }]}
                >
                    <Typo 
                        size={18} 
                        color={Colors.light.text.gray}
                    >{subTitle}</Typo>
                </View>
                <Typo size={18} color={Colors.light.text.gray}>{date}</Typo>
            </View>
        </View>
        <Ionicons 
            name={icon}
            size={24}
            color={Colors.light.icon}
        />
    </View>
  )
}

export default HorizontalWidget

const styles = StyleSheet.create({
    widgetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.light.text.light,
        borderRadius: 10,
        elevation: 5,
        padding: 10,
        marginBottom: 10
    },
    widgetBadge: {
        width: 'auto',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center'
    }
})