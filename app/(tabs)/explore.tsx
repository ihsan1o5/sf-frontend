import InvoiceDialog from '@/components/InvoiceDialog'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { Colors } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native'

import { useAuthStore } from '@/store/authStore'
import { useTransactionStore } from '@/store/transactionStore'


const Explore = () => {
    const [isInvoiceDialogVisible, setIsInvoiceDialogVisible] = useState(false)

    const token = useAuthStore(state => state.token);
    const transactions = useTransactionStore(state => state.transactions);
    const isLoading = useTransactionStore(state => state.isLoading);
    const isRefreshing = useTransactionStore(state => state.isRefreshing);
    const page = useTransactionStore(state => state.page);
    const hasMore = useTransactionStore(state => state.hasMore);
    const fetchTransactions = useTransactionStore(state => state.fetchTransactions);

    const handleLoadMore = () => {
        if (isLoading || !hasMore) return;
        fetchTransactions(token, page + 1);
    };

    const handleRefresh = () => {
        if (isLoading) return; 
        fetchTransactions(token, 1, true);
    };

    useEffect(() => {
        if (!token) return;
        fetchTransactions(token, 1, true);
    }, [token, fetchTransactions]);

    const renderItem = ({ item }: any) => (
        <View>
            <TouchableOpacity
                style={styles.itemWidget}
                onPress={() => setIsInvoiceDialogVisible(true)}
            >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10 }}>
                    <Ionicons 
                        name="cash"
                        size={35} 
                        color={Colors.light.icon}
                    />
                    <View>
                        <Typo size={20} fontWeight="600" color='black'>
                            {item?.amount}
                        </Typo>
                        <Typo size={14} color={Colors.light.text.gray}>
                            {item?.createdAt}
                        </Typo>
                    </View>
                </View>
                <Ionicons 
                    name="chevron-forward-outline"
                    size={24}
                    color={Colors.light.icon}
                />
            </TouchableOpacity>
        </View>
    );


  return (
    <ScreenWrapper>
        {transactions.length > 0 || !isLoading ? (
            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item) => item._id.toString()}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={handleRefresh}
                        tintColor={Colors.light.primary}
                    />
                }
                // stickyHeaderIndices={[0]}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Typo size={24} fontWeight="700" style={styles.headerTitle}>Payment History 📖</Typo>
                        <Typo size={18} style={styles.headerSubtitle}>
                            Discover your past payments history and invoices here 👇
                        </Typo>
                    </View>
                }
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.4}
                
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
        <InvoiceDialog
            isVisible={isInvoiceDialogVisible}
            onClose={() => setIsInvoiceDialogVisible(false)}
        />
    </ScreenWrapper>
  )
}

export default Explore

const styles = StyleSheet.create({
    itemWidget: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor: Colors.light.background,
        elevation: 5,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        marginTop: 20,
    },
    header: {
        padding: 40,
        marginBottom: 20,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: "JetBrainsMono-Medium",
        letterSpacing: 0.5,
        color: Colors.light.primary,
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 14,
        color: Colors.light.text.gray,
        textAlign: "center",
    },
})