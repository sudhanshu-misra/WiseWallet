import {Button, View } from 'react-native'
import React from 'react'
import { Modal } from 'react-native';

export default function WalletModal({modalState,hideModal}) {
  
  return (
    <Modal visible={modalState}
       transparent={true}
       animationType='slide'
        
       >
         <View style={{ backgroundColor:"green",padding:30}}> 
         <Button title="Close" color="red" onPress={hideModal}></Button>
         </View>
        
    </Modal>
  )
}
