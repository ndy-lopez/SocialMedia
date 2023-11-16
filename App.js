import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';

const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
