import React from 'react';
import {View, Text, StyleSheet, Image,Platform,FlatList,TouchableOpacity} from 'react-native';
import {UserProfile,UserPhotos} from '../../Api';
import {Value} from '../../components/utils';
import {AlertPopUp,Spinner,BackBtn} from '../../components';






const ScreenTwo = props => {
  const [loading, setLoading] = React.useState (false);
  const [show, setShow] = React.useState (false);
  const [data, setData] = React.useState (undefined);
  const [message, setMessage] = React.useState (undefined);
  const [imagesData,setImagesData] = React.useState(undefined)
  React.useEffect (() => {
    if(!data){
      fetchUserProfile ();
    }
   
  }, []);

  const fetchUserProfile = async () => {
    setLoading (true);
    try {
      const userData = await UserProfile (props.route.params.userName);
      const photosData = await UserPhotos(props.route.params.userName)
       console.log(userData.data)
      setLoading (false);  
      setData (userData.data);
      setImagesData(photosData.data);
    } catch (e) {
      setShow (true);
      setMessage ('Problem fetching user profile !');
      props.navigation.pop()
      setLoading (false);
    }
  };

  const renderItem =({index,item}) =>{
    return(<TouchableOpacity style={{height:Value(150),width:Value(150),marginLeft:Value(14)}} onPress={() => props.navigation.navigate('Screen3',{images:imagesData,index:index})}>
      <Image source={{uri:item.urls.regular}} style={{height:Value(150),width:Value(150),borderRadius:Value(10)}}/>
    </TouchableOpacity>)
  }
  const getItemLayout = (data, index) => ({
    length: Value(150),
    offset: Value(150) * index,
    index,
  });

  return (
    <View style={styles.container}>
      <AlertPopUp
        show={show}
        setShow={() => setShow (false)}
        message={message}
      />
      <BackBtn />
      {loading && <View style={styles.spinnerView}><Spinner/><Text style={styles.loaderMsg}>Fetching profile...</Text></View>}
      {data && imagesData && <><View style={styles.bodyContainer}>
      <Text style={styles.userNametxtStyle}>@{data.username}</Text>
         <Image source={{uri:data.profile_image.large}} style={{height:Value(190),width:Value(190),borderRadius:Value(90)}} resizeMethod="auto" resizeMode="contain"/>
          <Text style={styles.name}>{data.first_name} {data.last_name}{' '}</Text>
          <Text style={styles.bio}>{data.location} </Text>
      </View>
      <View style={styles.bodyTwoContainer}>
      <View style={styles.stats}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.values}>{data.followers_count} </Text>
        <Text style={styles.headerTxt}>FOLLOWERS </Text>
       
        </View>
        <View style={{justifyContent:'center',alignItems:'center',paddingLeft:Value(10)}}>
        <Text style={styles.values}>{data.following_count} </Text>
        <Text style={styles.headerTxt}>FOLLOWINGS </Text>
       
        </View>
        <View style={{justifyContent:'center',alignItems:'center',paddingHorizontal:Value(2)}}>
        <Text style={styles.values}>{data.total_collections} </Text>
        <Text style={styles.headerTxt}>COLLECTIONS </Text>
       
        </View>
        
      </View>
      <View style={styles.photos}>
       
       <View style={styles.photoTag}>
       <Text style={{fontSize:Value(11),color:'white',fontWeight:'700',}}>{imagesData.length} </Text>
           <Text style={{fontSize:Value(10),color:'white',fontWeight:'700',}}>PHOTOS </Text>
           
       </View>
       <View>
       {imagesData.length > 0 ?<FlatList getItemLayout={getItemLayout} scrollEventThrottle={16} data={imagesData} horizontal={true} renderItem={renderItem} style={{height:Value(150),paddingHorizontal:'25%'}} contentContainerStyle={{paddingRight:Value(100)}} showsHorizontalScrollIndicator={false}/>:<Text style={{textAlign:'center'}}>No Images</Text>}
       </View>

      </View>
      </View></>}
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  spinnerView:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  userNametxtStyle:{
    position:'absolute',
    top:Platform.OS==='ios'?Value (42) : Value (20),
    fontSize:Value(13),
    fontStyle:'italic',
    letterSpacing:0.8,
    color:'grey'

  },
  bodyContainer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  loaderMsg:{
    fontStyle:'italic',
    color:'grey',
    fontSize:Value(9)
  },
  name:{
    fontSize:Value(16),
    fontWeight:'400',
    letterSpacing:0.4,
    color:'grey',
    paddingTop:Value(6)
  },
  bio:{
    fontSize:Value(11),
    letterSpacing:0.2,
    color:'grey',
  },
  bodyTwoContainer:{
    flex:1,
  },
  stats:{
    flexDirection:'row',
    justifyContent:'center',
    height:'30%'

  },
  values:{
    fontSize:Value(14),
    
    color:'grey',
    letterSpacing:1,
    fontWeight:'700'
  },
  headerTxt:{
    fontSize:Value(12),
    fontWeight:'700',
    color:'grey',
    letterSpacing:0.5
  },
  photos:{
    height:'70%',
    justifyContent:'center',
    width:'100%',
  },
  photoTag:{
  position:'absolute',
  height:'30%',
  width:'20%',
  backgroundColor:'grey',
  left:0,
  top:'33%',
  borderBottomRightRadius:Value(8),
  borderTopRightRadius:Value(8),
justifyContent:'center',
alignItems:'center'}
});
export default ScreenTwo;
