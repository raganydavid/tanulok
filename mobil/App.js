/*
* File: App.java
* Author: Ragány Dávid Gergő
* Copyright: 2024, Ragány Dávid Gergő
* Group: Szoft II-1-E
* Date: 2024-04-09
* Github: https://github.com/raganydavid/tanulok
* Licenc: GNU GPL
*/



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { lekerTanulok } from './services/tanuloService';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-web';

export default function App() {

  const [tanulok, beallitTanulok] = useState([]);

  useEffect(() => {
    lekerTanulok().then(data => {
      console.log(data);
      beallitTanulok(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tanulók listája</Text>

      <FlatList
        data={tanulok}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tanuloLista}>
            <Text>{item.nev}</Text>

            <View style={styles.footer}>
              <Text style={styles.meretText}>{item.meret}</Text>
          </View>
        </View>
      )}
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tanuloLista: {
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'gold',
  },
  meretText: {
    fontSize: 15,
    marginEnd: 10,
  },
});
