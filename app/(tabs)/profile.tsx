import profileItems from '@/assets/data/profile-items.json'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { Colors } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import { Alert, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SvgUri } from 'react-native-svg'

import { useAuthStore } from '@/store/authStore'

const Profile = () => {
    const profileWidgets = profileItems;
    const router = useRouter();
    const { logout, user } = useAuthStore();

    const handleLogout = () => {
        Alert.alert(
          "Warning",
          "Are you sure you want to logout?",
          [
            {
              text: "Cancel",
              style: "cancel", // 👈 safe dismiss
            },
            {
              text: "Yes, Logout",
              style: "destructive",
              onPress: async () => {
                await logout();                 // 👈 clear auth state
                router.replace("/(auth)");      // 👈 go to login
              },
            },
          ],
          { cancelable: true }
        );
    };      

    const isSvg =
        typeof user?.profileImage === 'string' &&
        (
            user.profileImage.includes('/svg') ||
            user.profileImage.includes('format=svg')
        );

    const renderItem = ({item}: any) => (
        <View>
            <TouchableOpacity
                style={styles.itemWidget}
                onPress={()=>router.replace(item.route)}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Ionicons 
                        name={item.icon} 
                        size={24} 
                        color={Colors.light.icon}
                    />
                    <Typo size={20} fontWeight="600" color='black'>
                        {item.title}
                    </Typo>
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
        <LinearGradient 
            colors={[Colors.light.primary, Colors.light.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.profileImageContainer}
        >
            <View style={styles.profileImagePlaceholder}>
                {isSvg ? (
                    <SvgUri
                        uri={user.profileImage}
                        width="100%"
                        height="100%"
                    />
                ) : (
                    <Image
                        source={
                            user?.profileImage
                            ? { uri: user.profileImage }
                            : require('../../assets/images/profile.png')
                        }
                        style={styles.profileImage}
                        resizeMode="cover"
                    />
                )}
            </View>
            <View style={{ marginTop: 10, alignItems: 'center', marginBottom: 30 }}>
                <Typo size={18} fontWeight="700" color={Colors.light.text.light}>
                    {user?.name || 'Saeed Ahmad'}
                </Typo>
                <Typo size={18} color={Colors.light.text.gray}>
                    {user?.cnic || ''}
                </Typo>
            </View>
        </LinearGradient>

        <View style={styles.profileDetailsContainer}>
            <View
                style={styles.detailsWidget}
            >
                <FlatList 
                    data={profileWidgets}
                    keyExtractor={(item) => item.title.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}

                    ListFooterComponent={
                        <TouchableOpacity
                            style={styles.logOutBtn}
                            onPress={handleLogout}
                        >
                            <Typo size={24} fontWeight="700" color={Colors.light.text.light}>LogOut</Typo>
                        </TouchableOpacity>
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
    logOutBtn: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.primary,
        padding: 15,
        borderRadius: 10,
    }
})