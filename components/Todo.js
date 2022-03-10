import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Todo = ({item , deleteHandler}) => {
    return ( 
        <TouchableOpacity
            onPress={()=> deleteHandler(item.key)}
            >
            <Text 
                style={styles.item}
            >
                {item.text}
            </Text>
        </TouchableOpacity>
          

     );
}

const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }
  });

export default Todo;