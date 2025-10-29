import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import React from 'react'
import { StyleSheet } from 'react-native'

const Explore = () => {
  return (
    <ScreenWrapper>
      <Typo size={24} fontWeight="700" color='black'>
        Payment History 
      </Typo>
    </ScreenWrapper>
  )
}

export default Explore

const styles = StyleSheet.create({})