import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Sound1 from './assets/one.wav';
import Sound2 from './assets/two.wav';
import Sound3 from './assets/three.wav';
import Sound4 from './assets/four.wav';
import Sound5 from './assets/five.wav';
import Sound6 from './assets/six.wav';
import Sound7 from './assets/seven.wav';
import Sound8 from './assets/eight.wav';
import Sound9 from './assets/nine.wav';
import Sound10 from './assets/ten.wav';
import Logo from './assets/logo.png';
import Sound from 'react-native-sound';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'blue',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    backgroundColor: 'red',
    // marginTop: 20,
    borderRadius: 20,
    padding: 20,
    textAlign: 'center',
    // width: '46%',
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  box: {
    width: '46%',
    margin: 6,
  },
});

const App = () => {
  const sounds = [
    Sound1,
    Sound2,
    Sound3,
    Sound4,
    Sound5,
    Sound6,
    Sound7,
    Sound8,
    Sound9,
    Sound10,
  ];

  const handleSound = (sound) => {
    const playSound = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log(err);
      }
      playSound.play();
      playSound.release();
    });
  };

  return (
    <ScrollView style={styles.root}>
      <Image source={Logo} />
      <View style={styles.gridContainer}>
        {sounds.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => handleSound(item)}>
            <Text style={styles.text}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
