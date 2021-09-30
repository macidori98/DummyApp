import React from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';
import {pantsDummyData} from './data/pantsData';
import {shirtsDummyData} from './data/shirtsData';
import Pants from './model/Pants';
import Tshirt from './model/Tshirt';

const App = props => {
  const SHIRTS = 'T-shirts';
  const PANTS = 'Pants';

  /**
   * @type {[{title: SHIRTS, data: Tshirt[]}, {title: PANTS, data: Pants[]}]}
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
        keyExtractor={(item, index) => `${item.toString()}${index}`}
        renderItem={(
          {item} /*{
            switch (true) {
              case item instanceof Pants:
                return <Pantss item={item} />;
              case item instanceof Tshirt:
                return <Tshirts item={item} />;
              default:
                break;
            }
          }*/,
        ) =>
          item instanceof Pants ? (
            <Pantss item={item} />
          ) : (
            <Tshirts item={item} />
          )
        }
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontSize: 20, fontWeight: '800'}}>{title}</Text>
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
    <View style={{margin: 10}}>
      <Text>Height: {shirt.height}</Text>
      <Text>Width: {shirt.width}</Text>
    </View>
  );
};

const Pantss = props => {
  /**
   * @type {Pants}
   */
  const pants = props.item;
  return (
    <View style={{margin: 10}}>
      <Text style={{color: pants.color}}>Color: {pants.color}</Text>
      <Text>Hip: {pants.hip}</Text>
    </View>
  );
};

export default App;
