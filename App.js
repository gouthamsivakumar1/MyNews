import React  from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Store from './src/store/store';
import { Provider } from 'react-redux';
import AppStack from './src/navigator/AppStack.navigator';
import HomeScreen from './src/screen/HomeScreen';



const App = () => { 
  return (
    <SafeAreaView style ={style.root}>
       <Provider store={Store}>
        <AppStack />
        </Provider>
  </SafeAreaView>
  );
}
const style = StyleSheet.create({
    root: {
        flex:1,
    }
})
export default App