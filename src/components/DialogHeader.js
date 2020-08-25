/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {WIDTH} from '../commons/Constants';
import {HeaderBackButton} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const DialogHeader = ({item, goBack}) => {
  return item ? (
    <View style={styles.dialogItem}>
      <TouchableOpacity
        onPress={goBack}
        style={{alignSelf: 'center', marginRight: 30}}>
        <FontAwesome name="chevron-left" size={26} color="#0c86f9" />
      </TouchableOpacity>
      <View style={styles.imageSection}>
        <Image style={styles.avatarImage} source={{uri: item.picture}} />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.source}>
          <Text style={styles.sourceText}>{item.company}</Text>
        </View>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  dialogItem: {
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  sourceText: {
    fontWeight: '300',
    color: '#2d3436',
    textTransform: 'capitalize',
  },
  source: {
    marginTop: 5,
    width: WIDTH * 0.25,
    borderRadius: 3,
    backgroundColor: '#dfe6e9',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  imageSection: {
    flex: 1,
  },
  infoSection: {
    flex: 3,
  },
});

export default DialogHeader;
