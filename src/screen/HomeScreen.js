import React,{useEffect} from 'react';
import { useNewsInfo } from '../redux/news.selector';
import { SafeAreaView, Text,View,StyleSheet, FlatList,ImageBackground, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { getNewsDetails } from '../api/news.service';


const image = { uri: "https://picsum.photos/200/300" };

const HomeScreen = ({navigation}) => {
  
    const { response } = useNewsInfo();
    const dispatch = useDispatch();

    const RenderItem = ( item ,navigation) => {
        return (
        <View>
        <TouchableOpacity onPress={() => {
            navigation.navigate("Details", {
                data: item
            });
                }}>       
        <View style={style.cardStyle}>
        <ImageBackground
          style={style.imgStyle}
          source={image}
        />
        <View style={style.descriptionContainer}>
          <Text  numberOfLines ={1} style={style.titleStyle}>{item.name}</Text>
          <Text   numberOfLines ={1} style={style.descriptionStyle}>{item.description}</Text>
        </View>
            </View>
                </TouchableOpacity>
                </View>

    )
};

    useEffect(() => {
      getNewsDetails(dispatch);
    }, []);
    
    return (
        <SafeAreaView style ={style.root}>
            <View>
                <FlatList
                    data={response}
                    
                    renderItem={({ item }) => {
                        return RenderItem(item, navigation);
                    }
                    }
            />
                
            </View>
            
        </SafeAreaView>
    );
    
    
};



const style = StyleSheet.create({
    root: {
        flex:1,
        flexDirection: "column",
    },
    listStyle: {
        paddingVertical:10
    },
    cardStyle: {
        height: 200,
        flexDirection: 'row',
        margin: 10
    },
    imgStyle: {
        height: 200,
        width: "100%",
        position: 'absolute',
        resizeMode: 'cover'
    },
    descriptionContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignSelf: 'flex-end'
    },
    titleStyle: {
        color: 'white',
        fontSize: 20,
        margin: 6
    },
    descriptionStyle: {
         color: 'white',
        margin: 6        
    }
})

export default HomeScreen;