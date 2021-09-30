import React from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';
import Colors from './constants/Colors';
import {pantsDummyData} from './data/pantsData';
import {shirtsDummyData} from './data/shirtsData';
import Pants from './model/Pants';
import ParentClass from './model/ParentClass';
import Tshirt from './model/Tshirt';

const App = props => {
  const SHIRTS = 'T-shirts';
  const PANTS = 'Pants';

  /**
   * @type {[{title: SHIRTS, data: ParentClass[]}, {title: PANTS, data: ParentClass[]}]}
   */
  const DATA = [
    {
      title: 'T-shirts',
      data: shirtsDummyData,
    },
    {
      title: 'Pants',
      data: pantsDummyData,
    },
  ];
  return (
    <SafeAreaView style={{margin: 10}}>
      <SectionList
        sections={DATA}
        renderItem={({item}) =>
          item instanceof Pants ? (
            <Pantss item={item} />
          ) : item instanceof Tshirt ? (
            <Tshirts item={item} />
          ) : (
            <Text>{item.toString()}</Text>
          )
        }
        renderSectionHeader={({section: {title}}) => (
          <View style={{backgroundColor: Colors.white}}>
            <View
              style={{
                marginTop: 10,
                height: 50,
                backgroundColor: Colors.white,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                marginEnd: 10,
                marginStart: 10,
                shadowOffset: {width: 0, height: 1},
                shadowRadius: 8,
                elevation: 5,
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: '800', margin: 10}}>
                {title}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const Tshirts = props => {
  /**
   * @type {Tshirt}
   */
  const shirt = props.item;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginStart: 10,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 10,
              backgroundColor: Colors.black,
              borderRadius: 30,
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Text>Height: {shirt.height}</Text>
          <Text>Width: {shirt.width}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.greyish,
          height: 1,
          width: '100%',
          marginTop: 5,
          marginBottom: 5,
        }}
      />
    </View>
  );
};

const Pantss = props => {
  /**
   * @type {Pants}
   */
  const pants = props.item;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginStart: 10,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 10,
              backgroundColor: pants.color,
              borderRadius: 30,
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Text style={{color: pants.color}}>
            Color hex code: {pants.color}
          </Text>
          <Text>Hip: {pants.hip}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.greyish,
          height: 1,
          width: '100%',
          marginTop: 5,
          marginBottom: 5,
        }}
      />
    </View>
  );
};

export default App;
