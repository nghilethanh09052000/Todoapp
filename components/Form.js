import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import React, {useState} from 'react'

const Form = ({submitHandler,text,setText}) => {
    const onChangeText =(val)=>{
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter your new Todo"
                onChangeText={onChangeText}
                value={text}
            />
            <Button
                title='Add'
                color='red'
                onPress={ ()=>submitHandler(text) }
            />
        </View>
      );
}

const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
});
 
export default Form;