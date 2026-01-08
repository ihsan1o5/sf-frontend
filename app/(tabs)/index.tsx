import Card from '@/components/Card'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { Colors } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native'

import { formatPublishedDate } from '@/lib/utils'
import { useAuthStore } from '@/store/authStore'
import { useStudentStore } from '@/store/studentStore'

const Home = () => {
    const token = useAuthStore(state => state.token);
    const user = useAuthStore(state => state.user);

    const students = useStudentStore(state => state.students);
    const isLoading = useStudentStore(state => state.isLoading);
    const isRefreshing = useStudentStore(state => state.isRefreshing);
    const page = useStudentStore(state => state.page);
    const hasMore = useStudentStore(state => state.hasMore);
    const fetchStudents = useStudentStore(state => state.fetchStudents);
    const totalStudents = useStudentStore(state => state.totalStudents);

    const handleLoadMore = () => {
        if (isLoading || !hasMore) return;
        fetchStudents(token, page + 1);
    };

    const handleRefresh = () => {
        if (isLoading) return; 
        fetchStudents(token, 1, true);
    };

    useEffect(() => {
        if (!token) return;
        fetchStudents(token, 1, true);
    }, [token, fetchStudents]);

    const renderItem = ({ item }: any) => (
        <Card
            color={Colors.light.primary}
            studentName={item.name}
            title={item.fee.$numberDecimal}
            forMonth={item.forMonth}
            forYear={item.forYear}
            beneficiary={item.school?.name}
            dueDate={formatPublishedDate(item.createdAt)}
            toAccount={item.school?.account?._id}
            toUser={item.school?._id}
            invoiceId={item._id}
        />
    );

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
                        Hi, {user?.name} 👋
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
                        {totalStudents ? totalStudents : 0} new invoices
                    </Typo>
                    {" "}to pay.
                </Typo>
            </View>
        </LinearGradient>
        <View style={styles.homeScreenListContainer}>
            {students.length > 0 || !isLoading ? (
                <FlatList
                    data={students}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={handleRefresh}
                        tintColor={Colors.light.primary}
                        />
                    }
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.4}
                    contentContainerStyle={
                        students.length === 0
                        ? { flex: 1 } // makes empty container take full height
                        : styles.cardContainer
                    }
                    ListEmptyComponent={
                        !isLoading ? (
                            <View style={styles.emptyContainer}>
                                <Ionicons name="document-outline" size={60} color="#999" />
                                <Typo size={18} fontWeight="700">No invoices found</Typo>
                            </View>
                        ) : null
                    }
                    ListFooterComponent={
                        isLoading && hasMore ? (
                            <ActivityIndicator size="small" color={Colors.light.primary} />
                        ) : null
                    }
                />
            ) : null}
        </View>
        {isLoading && (
            <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color="#F97794" />
            </View>
        )}
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
        paddingBottom: 20
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
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,     // iOS
        elevation: 20,    // Android 🔑
    },
})