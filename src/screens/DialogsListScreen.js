import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import ListHeader from '../components/ListHeader';
import {WIDTH} from '../commons/Constants';

const DialogsListScreen = ({navigation}) => {
  const [dialogsList, setDialogsList] = useState([]);

  useEffect(() => {
    fetch('https://next.json-generator.com/api/json/get/4ypM89pfF').then(
      (res) => {
        res.json().then((result) => setDialogsList(result.friends));
      },
    );
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DialogScreen', {
            item,
          })
        }
        style={styles.dialogItem}>
        <View style={styles.imageSection}>
          <Image style={styles.avatarImage} source={{uri: item.picture}} />
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.messages[item.messages.length - 1].text}
          </Text>
          <View style={styles.source}>
            <Text style={styles.sourceText}>{item.company}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={dialogsList}
        stickyHeaderIndices={[0]}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<ListHeader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dialogItem: {
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  lastMessage: {
    color: '#2d3436',
    textTransform: 'capitalize',
    marginTop: 2,
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

export default DialogsListScreen;
