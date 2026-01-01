import { Colors } from '@/constants/theme'
import { InvoiceDialogProps } from '@/types'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Dialog, Portal } from 'react-native-paper'
import Typo from './Typo'

export default function InvoiceDialog({isVisible, onClose}: InvoiceDialogProps) {
  return (
    <Portal>
        <Dialog visible={isVisible} dismissable={false}>
            <LinearGradient
                colors={[Colors.light.secondary, Colors.light.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.dialogHeaderContainer}
            >
                <Dialog.Title style={{ fontSize: 18, fontWeight: 'bold', color: Colors.light.text.light }}>
                    <View>
                        <Typo size={24} fontWeight="700">
                            Transaction Details
                        </Typo>
                        <Typo size={18}>
                            12 Dec, 2025
                        </Typo>
                    </View>
                </Dialog.Title>
            </LinearGradient>
            <Dialog.Content>
                <View style={styles.bodySectionHolder}>
                    <Typo size={18} color={Colors.light.text.gray}>
                        From 
                    </Typo>
                    <View>
                        <Typo size={24} fontWeight="700" color={Colors.light.text.dark}>
                            M.Usama 
                        </Typo>
                        <Typo size={18} color={Colors.light.text.gray}>
                            123456789 
                        </Typo>
                    </View>
                </View>

                <View style={styles.bodySectionHolder}>
                    <Typo size={18} color={Colors.light.text.gray}>
                        To 
                    </Typo>
                    <View>
                        <Typo size={24} fontWeight="700" color={Colors.light.text.dark}>
                            Idrees
                        </Typo>
                        <Typo size={18} color={Colors.light.text.gray}>
                            123456789 
                        </Typo>
                    </View>
                </View>
            </Dialog.Content>

            <Dialog.Actions>
                <Button onPress={onClose}>Ok</Button>
            </Dialog.Actions>
        </Dialog>
    </Portal>
  )
}

const styles = StyleSheet.create({
    dialogHeaderContainer: {
        marginTop: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    bodySectionHolder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.light.text.gray,
        paddingVertical: 10
    }
})