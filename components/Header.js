import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>Your Todo list</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: 'coral',
    },
    title: {
      textAlign: 'center',
      justifyContent:'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      alignItems:'center'
    }
  });
 
export default Header;