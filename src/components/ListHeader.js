/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import PopoverTooltip from 'react-native-popover-tooltip';
import Tooltip from 'react-native-walkthrough-tooltip';
import {CHEVRON_DOWN} from '../commons/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const ListHeader = () => {
  const [tooltipVisible, setTooltipVisble] = useState(false);

  return (
    <View style={styles.headerWrapper}>
      <Tooltip
        isVisible={tooltipVisible}
        arrowStyle={{
          marginLeft: 40,
        }}
        content={
          <View style={styles.menuWrapper}>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Диалоги</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Диалоги</Text>
            </TouchableOpacity>
          </View>
        }
        placement="bottom"
        backgroundColor="rgba(0,0,0,0)"
        onClose={() => setTooltipVisble(false)}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTooltipVisble(true)}>
            <Text style={styles.headerTitle}>Диалоги</Text>
            <Image
              source={CHEVRON_DOWN}
              style={{width: 20, height: 20, marginLeft: 5}}
            />
          </TouchableOpacity>
        </View>
      </Tooltip>
      <Input
        containerStyle={{borderWidth: 0}}
        inputContainerStyle={styles.searchBox}
        placeholder="Поиск"
        leftIcon={<Icon name="search" size={25} color="#dcdde1" />}
        leftIconContainerStyle={{marginHorizontal: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    borderBottomWidth: 0,
    backgroundColor: '#f5f6fa',
    borderRadius: 5,
  },
  headerWrapper: {
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  menuWrapper: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
  menuButton: {
    // borderBottomColor: '#000',
    // borderBottomWidth: 1,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListHeader;
