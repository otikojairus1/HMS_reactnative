import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Appbar, TextInput, List , Headline, FAB, Card, Title, Paragraph ,Button ,Snackbar } from 'react-native-paper';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert("Nurse youve successfully attended your shift!");
  };

  if (hasPermission === null) {
    return <View style={{flex: 1, justifyContent:"center", alignItems:'center'}}><Text style={{fontSize:20, fontWeight:"bold"}}>Requesting for camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{}}>
          {/* start of appbar */}
          <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Attend Shift" subtitle="Scan the QR at the door" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    {/* end of appbar */}
        <View style={{position:"absolute", left:20, top:400}}>
            <Text style={{fontSize:20}}>Scan the door QRCODE to attend your shift</Text>
        </View>
        <View style={{position:"absolute", top:50}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{height:700, position:"absolute", left:-70, width:500, justifyContent:'center', alignItems:'center'}}
      />
      </View>

      {scanned && <Button title={'Tap to Attend shift again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

// StyleSheet.absoluteFillObject
