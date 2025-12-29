import { PayDialogProps } from '@/types';
import { useState } from 'react';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';

export default function PayDialog({
  isVisible,
  onClose,
}: PayDialogProps) {
  const [account, setAccount] = useState('');

  const handleSubmit = () => {
    setAccount('');
    onClose();
  };

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={onClose}>
        <Dialog.Title>Payment</Dialog.Title>

        <Dialog.Content>
          <TextInput
            label="Enter Account Number"
            value={account}
            onChangeText={setAccount}
          />
        </Dialog.Content>

        <Dialog.Actions>
          <Button onPress={onClose}>Cancel</Button>
          <Button
            onPress={handleSubmit}
            disabled={!account}
          >
            Submit
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

