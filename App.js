import {template} from '@babel/core';
import React from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';
import Colors from './constants/Colors';
import {pantsDummyData, pantsJSDOCDummyData} from './data/pantsData';
import {shirtsDummyData, shirtsJSDOCDummyData} from './data/shirtsData';
import Pants from './model/Pants';
import ParentClass from './model/ParentClass';
import Tshirt from './model/Tshirt';

const App = props => {
  const SHIRTS = 'T-shirts';
  const PANTS = 'Pants';

  //  /**
  //   * @type {[{title: SHIRTS, data: ParentClass[]}, {title: PANTS, data: ParentClass[]}]}
  //   */
  //  const DATA = [
  //    {
  //      title: 'T-shirts',
  //      data: shirtsDummyData,
  //    },
  //    {
  //      title: 'Pants',
  //      data: pantsDummyData,
  //    },
  //  ];

  /**
   * @template T
   * @typedef {{title: SHIRTS, data: T[]}} MyType1
   */

  /**
   * @template D
   * @typedef {{title: PANTS, data: D[]}} MyType2
   */

  /**
   * @type {{title: string, data: (Pant|Shirt)[]}[]}
   */
  const DATA = [
    {
      title: 'Clothes',
      data: [...pantsJSDOCDummyData, ...shirtsJSDOCDummyData],
    },
    // {
    //   title: SHIRTS,
    //   data: shirtsJSDOCDummyData,
    // },
  ];

  ///**
  // * @typedef {{title: PANTS, item: PantsObj}} PantsLocalObj
  // */
  //
  ///**
  // * @typedef {{title: SHIRTS, item: ShirtsObj}} ShirtsLocalObj
  // */
  //

  /**
   * @typedef {object} PantsProperties
   * @property {Color} color
   * @property {number} hip
   */

  /**
   * @typedef {object} ShirtProperties
   * @property {number} height
   * @property {number} width
   */

  /**
   * @template {string} T
   * @typedef {object} Base
   * @property {T} typeIdentifier
   * @property {string} id
   */

  /**
   * @typedef {Base<'pant-object'> & PantsProperties} Pant
   */

  /**
   * @typedef {Base<'shirt-object'> & ShirtProperties} Shirt
   */

  /** @type {{title: 'Pants'|'Shirts', data: (Shirt|Pant)[]}[]} */
  let invalidData;

  /**
   * @param {Pant|Shirt} item
   */
  const myTest = item => {
    switch (item.typeIdentifier) {
      case 'shirt-object':
        break;
      case 'pant-object':
        break;
      default:
        break;
    }
    if (item.typeIdentifier === 'shirt-object') {
      return <Tshirts item={item} />;
    } else {
      return <Pantss item={item} />;
    }
  };

  return (
    <SafeAreaView style={{margin: 10}}>
      <SectionList
        sections={invalidData}
        renderItem={
          item => {
            const myItem = item.item;
            return myTest(myItem);
            //myTest({title: title, item: myItem});
          }
          //myTest({title: item.section.title, item: item.item})
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
                marginBottom: 10,
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
