import Card from '@/components/Card'
import HorizontalWidget from '@/components/HorizontalWidget'
import QuickActionBtn from '@/components/QuickActionBtn'
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
                        color={Colors.light.secondary}
                        icon="document-attach"
                        title="1,284"
                        caption="Total Payable"
                    />

                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="2,184"
                        caption="Receivable"
                    />
                </View>

                <View style={styles.cardContainer}>
                    <Card 
                        color={Colors.light.primary}
                        icon="document-attach"
                        title="1,284"
                        caption="Pending Payables"
                    />

                    <Card 
                        color={Colors.light.secondary}
                        icon="document-attach"
                        title="2,184"
                        caption="Pending Receivables"
                    />
                </View>

                <Typo 
                    size={20} 
                    fontWeight='800' 
                    color={Colors.light.text.default}
                    style={styles.quickActionText}
                >
                    Quick Actions
                </Typo>
                <View style={styles.quickActionsBtnContainer}>
                    <QuickActionBtn 
                        icon='add'
                        text='Get Paid'
                    />

                    <QuickActionBtn 
                        icon='cloud-upload-outline'
                        text='Upload'
                    />

                    <QuickActionBtn 
                        icon='cash-outline'
                        text='Payments'
                    />
                </View>

                <Typo 
                    size={20} 
                    fontWeight='800' 
                    color={Colors.light.text.default}
                    style={styles.quickActionText}
                >
                    Recent Payments
                </Typo>
                <View
                    style={styles.recentActivityContainer}
                >
                    <HorizontalWidget 
                        title='School Fee - Jan 2024'
                        subTitle='Paid'
                        icon='chevron-forward'
                        date='1 Jan'
                    />

                    <HorizontalWidget 
                        title='School Fee - Fab 2024'
                        subTitle='Pending'
                        icon='chevron-forward'
                        date='12 Fab'
                    />

                    <HorizontalWidget 
                        title='School Fee - Mar 2024'
                        subTitle='Over Due'
                        icon='chevron-forward'
                        date='5 Mar'
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
        flexDirection: 'row', 
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