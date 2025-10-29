import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { Colors } from '@/constants/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import userData from '../../assets/data/users.json'

const Profile = () => {
    const data = userData;

    const renderItem = ({item}: any) => (
        <View>
            <View
                style={styles.itemWidget}
            >
                <Typo size={20} fontWeight="600" color='black'>
                    Name: {item.first_name} {item.last_name}
                </Typo>
            </View>

            <View
                style={styles.itemWidget}
            >
                <Typo size={20} fontWeight="600" color='black'>
                    Username: {item.username}
                </Typo>
            </View>

            <View
                style={styles.itemWidget}
            >
                <Typo size={20} fontWeight="600" color='black'>
                    Email: {item.email}
                </Typo>
            </View>

            <View
                style={styles.itemWidget}
            >
                <Typo size={20} fontWeight="600" color='black'>
                    Phone: {item.phone}
                </Typo>
            </View>
        </View>
    );

  return (
    <ScreenWrapper>
        <LinearGradient 
            colors={['#F97794', '#623AA2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.profileImageContainer}
        >
            <View style={styles.profileImagePlaceholder}>
                <Image 
                    source={require('../../assets/images/profile.png')} 
                    style={styles.profileImage}
                    resizeMode="cover"
                />
            </View>
        </LinearGradient>

        <View style={styles.profileDetailsContainer}>
            <View
                style={styles.detailsWidget}
            >
                <FlatList 
                    data={[data[0]]}
                    keyExtractor={(item) => item.phone.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}

                    ListFooterComponent={
                        <Link href='/(auth)' asChild>
                            <TouchableOpacity
                                style={styles.logOutBtn}
                            >
                                <Typo size={24} fontWeight="700" color={Colors.light.text.light}>LogOut</Typo>
                            </TouchableOpacity>
                        </Link>
                    }
                />

                
            </View>
        </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
    profileImageContainer: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileImagePlaceholder: {
        width: '40%',
        aspectRatio: 1,           // ✅ keeps it a perfect square on all screens
        borderRadius: 9999,       // ✅ makes it perfectly circular
        overflow: 'hidden',       // ✅ ensures image stays inside the circle
    },

    profileImage: {
        width: '100%',
        height: '100%',
    },
    
    profileDetailsContainer: {
        flex: 1,
    },
    detailsWidget: {
        flex: 1,                        // fills remaining space under gradient
        backgroundColor: Colors.light.background,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -50,                 // overlap gradient
        padding: 20,
        overflow: 'hidden',             // ensures border radius works
    },
    itemWidget: {
        marginVertical: 10,
        backgroundColor: Colors.light.background,
        elevation: 5,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    logOutBtn: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.primary,
        padding: 15,
        borderRadius: 10,
    }
})