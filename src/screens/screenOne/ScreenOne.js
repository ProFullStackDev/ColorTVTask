import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import {SearchUser} from '../../Api';
import {
  AppIconView,
  SearchComponent,
  Spinner,
  AlertPopUp,
  ListItem,
} from '../../components';
import {Value, screenWidth} from '../../components/utils';

const ScreenOne = () => {
  React.useEffect (() => {}, []);
  const [search, setSearch] = React.useState (undefined);
  const [data, setData] = React.useState (undefined);
  const [loading, setLoading] = React.useState (false);
  const [show, setShow] = React.useState (false);
  const [message, setMessage] = React.useState (undefined);

  const Search = () => {
    if (search && search.length > 0) {
      setLoading (true);

      SearchUser (search)
        .then (res => {
          console.log (res.data.results);
          setSearch ('');
          setData (res.data.results);
          setLoading (false);
        })
        .catch (e => {
          setShow (true);
          data && setData (undefined);
          setMessage ('user not found !');
          setSearch ('');
          setLoading (false);
        });
    } else {
      setShow (true);

      setMessage ('Please enter user name to search !');
    }
  };

  const renderItem = ({index, item}) => {
    return (
      <ListItem
        name={item.username}
        photo={item.profile_image.large}
        likes={item.total_likes}
        noOfPic={item.total_photos}
      />
    );
  };
  return (
    <View style={styles.container}>
      <AlertPopUp
        show={show}
        setShow={() => setShow (false)}
        message={message}
      />
      <View style={styles.headerContainer}>
        <AppIconView />
      </View>
      <View style={styles.searchContainer}>
        <SearchComponent
          search={search}
          onChange={e => setSearch (e)}
          onSearch={() => Search ()}
        />
      </View>
      <View style={styles.bodyContainer}>
        {loading &&
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
          </View>}
        {data &&
          !loading &&
          <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            style={{paddingBottom: Value (30), width: screenWidth * 0.88}}
            contentContainerStyle={{paddingBottom: Value (25)}}
          />}
      </View>

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,144,131,0.2)',
  },
  searchContainer: {
    height: '15%',
    width: '100%',
    paddingHorizontal: Value (20),
    paddingTop: Value (30),
    justifyContent: 'flex-start',
  },
  bodyContainer: {
    height: '73%',
    width: '100%',
    paddingHorizontal: Value (20),
    backgroundColor: '#f3f3f3',
    paddingTop: Value (10),
  },
  headerContainer: {
    height: '12%',
  },
});
export default ScreenOne;
