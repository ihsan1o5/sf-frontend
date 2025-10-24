import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import React from 'react'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <ScreenWrapper>
      <Typo size={24} fontWeight="700" color='black'>
        Home Page
      </Typo>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})