import { Colors } from '@/constants/theme'
import { CardProps } from '@/types'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import PayDialog from './PayDialog'
import PaymentMethodSheet from './PaymentMethodSheet'
import Typo from './Typo'

import { useAuthStore } from '@/store/authStore'
import { useTransactionStore } from "@/store/transactionStore"

const Card = ({color, studentName, title, forMonth, forYear, beneficiary, dueDate, toAccount, toUser, invoiceId}: CardProps) => {
    const [methodSheetVisible, setMethodSheetVisible] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<'easypaisa' | 'jazzcash' | null>(null);

    const { token } = useAuthStore();
    const { makeTransaction } = useTransactionStore();

    const handleMethodSelect = (method: 'easypaisa' | 'jazzcash') => {
        setSelectedMethod(method)
        setMethodSheetVisible(false)
        setDialogVisible(true)
    }

    const submitTransaction = async (accountNumber: string, accountTitle: string) => {
        const result = await makeTransaction(token, {
            fromAccount: {
                accountTitle,
                accountNumber,
                bankName: selectedMethod,
            },
            toAccount,
            toUser,
            amount: title,
            invoiceId
        });

        return result
        // if (result?.success) {
        //     // Toast.show({
        //     //     type: 'success',
        //     //     text1: 'Payment Successful',
        //     //     text2: 'Your transaction has been completed.',
        //     // });
        // } else {
        //     // Toast.show({
        //     //     type: 'error',
        //     //     text1: 'Payment Failed',
        //     //     text2: result?.error || 'Something went wrong',
        //     // });
        // }
    };

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
                <View style={styles.imageHolder}>
                    <Image 
                        source={require("../assets/images/oxi-logo-cercle.png")} 
                        resizeMode="contain"
                        style={styles.logoImage}
                    />
                </View>
                <View style={styles.userInfoContainer}>
                    <Typo size={24} fontWeight='700' color={Colors.light.text.default}>
                        Rs. {title}
                    </Typo>
                    <Typo size={16} fontWeight="700" color={Colors.light.text.gray}>
                        Due Date: <Typo size={16} fontWeight="700" color={Colors.light.primary}>{dueDate}</Typo>
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
            <Typo size={24} color={Colors.light.text.default} fontWeight='800'>
                <Typo size={20} fontWeight="700" color={Colors.light.text.gray}>Student: </Typo> {studentName}
            </Typo>
            <Typo size={18} color={Colors.light.text.default} fontWeight='800'>
                <Typo size={18} fontWeight="700" color={Colors.light.text.gray}>For: </Typo> {forMonth}, {forYear}
            </Typo>
            <Typo size={18} color={Colors.light.text.default} fontWeight='800'>
                <Typo size={18} fontWeight="700" color={Colors.light.text.gray}>Bnfry: </Typo> {beneficiary}
            </Typo>
            <View>
                <TouchableOpacity
                    style={{ alignItems: 'flex-end' }}
                    onPress={() => setMethodSheetVisible(true)}
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
        <PaymentMethodSheet
            visible={methodSheetVisible}
            onClose={() => setMethodSheetVisible(false)}
            onSelect={handleMethodSelect}
        />
        <PayDialog
            isVisible={dialogVisible}
            onClose={() => setDialogVisible(false)}
            method={selectedMethod as 'easypaisa' | 'jazzcash'}
            handleSubmit={submitTransaction}
        />
        {/* <Toast /> */}
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
        padding: 10,
        elevation: 5,
    },
    cardTitleSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    imageHolder: {
        width: '18%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        width: '100%',
        height: 50,
        borderRadius: 50
    },
    userInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginLeft: 10
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