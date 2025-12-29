import Card from '@/components/Card'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { Colors } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const Home = () => {

  return (
    <ScreenWrapper>
        <LinearGradient
            colors={[Colors.light.secondary, Colors.light.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.homeScreenMasterCard}
        >
            <View
                style={styles.masterCardTitleContainer}
            >
                <View>
                    <Typo size={24} fontWeight="700">
                        Hi, Saeed 👋
                    </Typo>
                    <Typo size={18}>Welcome Back!</Typo>
                </View>

                <View
                    style={styles.masterCardIconsContainer}
                >
                    <Ionicons 
                        name="notifications"
                        size={28}
                        color={Colors.light.background}
                    />
                    <Ionicons
                        name="search"
                        size={28}
                        color={Colors.light.background}
                    />
                </View>
            </View>

            <View
                style={styles.masterCardCaptionTextContainer}
            >
                <Typo size={16} color={Colors.light.text.light}>
                    You have{" "}
                    <Typo size={16} fontWeight="700" color={Colors.light.text.light}>
                        24 new invoices
                    </Typo>
                    {" "}to pay.
                </Typo>
            </View>
        </LinearGradient>
        <View style={styles.homeScreenListContainer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.cardContainer}
                >
                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="2,184"
                        caption="Total fee due for the month of December, please make the payment before due date to avoid late fee charges."
                        beneficiary="ABC School"
                        dueDate="12 Dec 2024"
                    />

                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="2,184"
                        caption="Total fee due for the month of December, please make the payment before due date to avoid late fee charges."
                        beneficiary="ABC School"
                        dueDate="12 Dec 2024"
                    />

                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="2,184"
                        caption="Total fee due for the month of December, please make the payment before due date to avoid late fee charges."
                        beneficiary="ABC School"
                        dueDate="12 Dec 2024"
                    />

                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="2,184"
                        caption="Total fee due for the month of December, please make the payment before due date to avoid late fee charges."
                        beneficiary="ABC School"
                        dueDate="12 Dec 2024"
                    />

                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="2,184"
                        caption="Total fee due for the month of December, please make the payment before due date to avoid late fee charges."
                        beneficiary="ABC School"
                        dueDate="12 Dec 2024"
                    />

                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="2,184"
                        caption="Total fee due for the month of December, please make the payment before due date to avoid late fee charges."
                        beneficiary="ABC School"
                        dueDate="12 Dec 2024"
                    />
                </View>
                
            </ScrollView>
        </View>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
    homeScreenMasterCard: {
        margin: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 15,
        elevation: 15,
    },
    masterCardTitleContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    masterCardIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    masterCardCaptionTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#dc97d6",
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    homeScreenListContainer: { 
        flex: 1, 
        margin: 10,
        marginTop: 0,
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        marginTop: 20,
    },
    invoiceWidget: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.light.background,
        marginBottom: 10,
        elevation: 5,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    cardContainer: {
        flexDirection: 'column', 
        justifyContent: 'space-between',
        gap: 10,
        paddingHorizontal: 5,
        marginBottom: 10,
    },
    quickActionText: {
        paddingHorizontal: 5,
        marginVertical: 10
    },
    quickActionsBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20
    },
    recentActivityContainer: {
        marginHorizontal: 5,
        justifyContent: 'center',
        paddingBottom: 40
    }
})