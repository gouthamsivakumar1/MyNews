import React from 'react';
import { SafeAreaView, StyleSheet, View, ImageBackground, Text,Share } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = { uri: "https://picsum.photos/200/300" };

const NewsDetails = ({ route }) => {
    
    const { data } = route.params;


    const ShareApp = async() => {
     await Share.share({
        message:
          `Hey!! Check out this Link ${data.url}`,
     });
    }


    return (
        <SafeAreaView style={style.root}>
            <View style ={style.imgBgStyle}>
             <ImageBackground
          style={style.imgStyle}
                    source={image}
                    resizeMode="stretch"
                />
            </View>
           
            <View style={style.descriptionContainer}>
                 <View style={style.titleContainer}>
            <Text style ={style.titleStyle}>
               { data.name.toUpperCase()}
                    </Text>
                      <Text style ={style.categoryStyle}>
               { data.category.toUpperCase()}
                </Text>
                </View>
            <Text style ={style.descriptionStyle}>
               { data.description}
                </Text>
                <Text style ={style.descriptionStyle}>
               { data.country.toUpperCase()} Report
                </Text>
            </View>
            <Button
                onPress={ShareApp}
                icon={
                    <Icon
                        name="share"
                        size={20}
                        color="white"
                    />
                }
                 />
         </SafeAreaView>

    )
}


const style = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        height:"100%"
    },
    imgBgStyle: {
        height: 250,
        width: "100%"
    },
    imgStyle: {
        marginBottom:10,
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'contain'
    },
    titleContainer: {
        marginVertical: 10,
        marginHorizontal:5,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
     categoryStyle: {
        fontSize: 18,
    },
    descriptionStyle: {
        marginVertical: 10,
        fontSize: 16,
        lineHeight:25,
        textAlign:'justify'
    },
    descriptionContainer: {
        flex:1,
         marginHorizontal: 10,
    }
});

export default NewsDetails;