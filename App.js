import React,{ useState } from 'react';
import { StyleSheet, 
        Text,
        View, 
        FlatList, 
        TouchableWithoutFeedback,
        Keyboard,
        Alert
} 
from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import Todo from './components/Todo';
import {v4 as uuidv4} from 'uuid'


export default function App() {
  const [text,setText]=useState('');
  const [todos, setTodos] = useState([]);

  const submitHandler = (text)=>{
    if(text.length>3){
      setText('');
      setTodos(prevTodos =>{
        return [
          ...prevTodos,
          {text:text,key:uuidv4().toString()}
        ]
      })
    }else{
      Alert.alert("Failed to add","Your Todo must at least 3 chars long",
        {text:'Understood'}
      )
      setText('');
    }
    
  }

  const deleteHandler = (key) =>{
    setTodos(prevTodos =>{
      return prevTodos.filter( todo =>todo.key !== key)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <Form
            submitHandler={submitHandler}
            text={text}
            setText={setText}
          />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <Todo
                  item={item}
                  deleteHandler={deleteHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
