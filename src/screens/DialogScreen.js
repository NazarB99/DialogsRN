/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {
  GiftedChat,
  Send,
  Composer,
  InputToolbar,
} from 'react-native-gifted-chat';
import IconButton from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';

const days = require('dayjs/locale/ru');

const DialogScreen = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(route.params?.item.messages);
  }, [route.params?.item.messages]);

  function renderToolbar(props) {
    return (
      <InputToolbar
        {...props}
        containerStyle={{paddingVertical: 5}}
        renderSend={renderSend}
        renderComposer={renderComposer}
      />
    );
  }

  function renderComposer(props) {
    return (
      <Composer
        {...props}
        placeholder="Сообщение"
        composerHeight={40}
        textInputStyle={styles.messageBox}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send
        {...props}
        containerStyle={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <View style={styles.sendingContainer}>
          <IconButton name="send" size={20} color="#fff" />
        </View>
      </Send>
    );
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        messages={messages}
        locale={days}
        alwaysShowSend
        onSend={(messages) => onSend(messages)}
        renderInputToolbar={renderToolbar}
        user={{
          _id: 0,
        }}
      />
      {/* {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  sendingContainer: {
    marginHorizontal: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#0c86f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  composer: {
    flexDirection: 'row',
  },
  messageBox: {
    backgroundColor: '#f5f6fa',
    borderRadius: 15,
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default DialogScreen;
