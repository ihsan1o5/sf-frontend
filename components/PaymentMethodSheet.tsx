import { Colors } from '@/constants/theme'
import React from 'react'
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'

type Props = {
  visible: boolean
  onClose: () => void
  onSelect: (method: 'easypaisa' | 'jazzcash') => void
}

export default function PaymentMethodSheet({
  visible,
  onClose,
  onSelect,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Select Payment Method</Text>

          <TouchableOpacity
            style={styles.method}
            onPress={() => onSelect('easypaisa')}
          >
            <Image
                source={require('../assets/images/easypaisa.png')} 
                style={{ width: 35, height: 35 }}
            />
            <Text style={styles.methodText}>Easypaisa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.method}
            onPress={() => onSelect('jazzcash')}
          >
            <Image
                source={require('../assets/images/jazzcash.png')} 
                style={{ width: 35, height: 35 }}
            />
            <Text style={styles.methodText}>JazzCash</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 10,
  },
  methodText: {
    fontSize: 16,
  },
  cancel: {
    marginTop: 15,
    textAlign: 'center',
    color: Colors.light.text.gray,
  },
})
