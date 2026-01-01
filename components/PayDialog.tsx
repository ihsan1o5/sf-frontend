import { PayDialogProps, Step } from '@/types';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';

import { useTransactionStore } from '@/store/transactionStore';

export default function PayDialog({
  isVisible,
  onClose,
  method,
  handleSubmit
}: PayDialogProps) {
  const [step, setStep] = useState<Step>('account')
  const [account, setAccount] = useState('')
  const [accountTitle, setAccountTitle] = useState('')
  const [otp, setOtp] = useState('')
  const [response, setResponse] = useState('');
  const { isLoading } = useTransactionStore();


  const handleAccountSubmit = () => {
    // 🔥 later: call API to request OTP
    setStep('otp')
    setAccountTitle("Account Title");
  }

  const handleOtpSubmit = async () => {
    try {
        const result = await handleSubmit(account, accountTitle);

        if (result?.success) {
            setStep('success');
            setResponse("Payment Successful! Thank You.");
            setAccount('')
            setOtp('')
        } else {
            setStep('success');
            setResponse("Failed to make transaction! Please try again later.");
            setAccount('')
            setOtp('')
        }

    } catch (error) {
        console.log("Error making transaction: => ", error);
        setStep('success');
        setResponse("Failed to make transaction! Please try again later.");
        setAccount('')
        setOtp('')
    }
  }

  const handleClose = () => {
    setAccount('')
    setOtp('')
    setStep('account')
    onClose()
  }

  return (
    <Portal>
        <Dialog visible={isVisible} dismissable={false}>

            {step === 'success' && (
            <View>
                <Dialog.Title style={{ fontSize: 18, fontWeight: 'bold' }}>
                {isLoading ? (
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator />
                    </View>
                ) : (<>
                    {response}
                </>)}
                </Dialog.Title>

                <Dialog.Actions>
                <Button onPress={handleClose}>Ok</Button>
                </Dialog.Actions>
            </View>
            )}

            {step !== 'success' && (
            <View>
                <Dialog.Title style={{ fontSize: 18, fontWeight: 'bold' }}>
                {step === 'account'
                    ? `Enter ${method} Account`
                    : `Enter OTP`}
                </Dialog.Title>

                <Dialog.Content>
                {step === 'account' ? (
                    <TextInput
                    label="Account Number"
                    value={account}
                    onChangeText={(text) => {
                        setAccount(text);
                    }}
                    keyboardType="number-pad"
                    style={{ backgroundColor: 'transparent' }}
                    />
                ) : (
                    <TextInput
                    label="OTP / PIN"
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="number-pad"
                    secureTextEntry
                    style={{ backgroundColor: 'transparent' }}
                    />
                )}
                </Dialog.Content>

                <Dialog.Actions>
                <Button onPress={handleClose}>Cancel</Button>

                {step === 'account' ? (
                    <Button onPress={handleAccountSubmit} disabled={!account}>
                    Continue
                    </Button>
                ) : (
                    <Button onPress={handleOtpSubmit} disabled={!otp}>
                    Confirm
                    </Button>
                )}
                </Dialog.Actions>
            </View>
            )}

        </Dialog>
    </Portal>

  );
}

