import { Colors } from '@/constants/theme'
import { formatPublishedDate } from '@/lib/utils'
import { InvoiceDialogProps } from '@/types'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Dialog, Portal } from 'react-native-paper'
import Typo from './Typo'

export default function InvoiceDialog({isVisible, onClose, invoice}: InvoiceDialogProps) {
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
                            {formatPublishedDate(invoice?.createdAt)}
                        </Typo>
                    </View>
                </Dialog.Title>
            </LinearGradient>
            <Dialog.Content>
                <View style={styles.bodySectionHolder}>
                    <Typo size={18} color={Colors.light.text.gray}>
                        From 
                    </Typo>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Typo size={24} fontWeight="700" color={Colors.light.text.dark}>
                            {invoice?.fromUser?.name} 
                        </Typo>
                        <Typo size={18} color={Colors.light.text.gray}>
                            {invoice?.fromAccount?.accountNumber} 
                        </Typo>
                    </View>
                </View>

                <View style={styles.bodySectionHolder}>
                    <Typo size={18} color={Colors.light.text.gray}>
                        To 
                    </Typo>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Typo size={24} fontWeight="700" color={Colors.light.text.dark}>
                            {invoice?.toUser?.name}
                        </Typo>
                        <Typo size={18} color={Colors.light.text.gray}>
                            {invoice?.toAccount?.accountNumber} 
                        </Typo>
                    </View>
                </View>

                <View style={styles.bodySectionNoBorder}>
                    <Typo size={18} color={Colors.light.text.gray}>
                        Status
                    </Typo>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Typo size={20} color={Colors.light.secondary}>
                            Paid 
                        </Typo>
                    </View>
                </View>

                <LinearGradient
                    colors={['transparent', Colors.light.primary, 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        height: 1,
                        marginVertical: 20,
                        marginHorizontal: -24,
                    }}
                />

                <View style={styles.bodySectionNoBorder}>
                    <View>
                        <Typo size={18} color={Colors.light.text.gray}>
                            Amount 
                        </Typo>
                        <Typo size={18} color={Colors.light.text.gray}>Debited</Typo>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Typo size={24} fontWeight="700" color={Colors.light.text.dark}>
                            Rs. {invoice?.amount}
                        </Typo>
                    </View>
                </View>

            </Dialog.Content>

            <Dialog.Actions>
                <Button onPress={onClose}>Close</Button>
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
    },
    bodySectionNoBorder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5
    },
    divider: {
        borderBottomWidth: 5,
        borderBottomColor: Colors.light.text.gray,
        marginVertical: 20,
        borderStyle: 'dotted',
        marginHorizontal: -25
    }
})