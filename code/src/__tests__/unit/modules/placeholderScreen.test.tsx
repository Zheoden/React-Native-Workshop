import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import JestIDs from '../../../utils/JestIdentifiers';
import PlaceholderScreen, {
  IPlaceholderScreenProps,
  PlaceHolder
} from '../../../modules/placeholder/PlaceholderScreen';

const PlaceHolderIDs = JestIDs.modules.placeholder.placeHolderScreen;

describe('Modules - PlaceHolder Screen', () => {
  let placeholderScreenComponent: any;

  // Mocked props with the essentials for the component to use
  const props: IPlaceholderScreenProps = {
    title: 'Unit Test',
    navigation: {
      navigate: jest.fn(),
      getParam: jest.fn(() => '1337'),
      goBack: jest.fn(),
      t: jest.fn()
    } as any,
    translate: jest.fn(),
    setTranslate: jest.fn() as any
  };

  // Component to be rendered for each test
  beforeEach(() => {
    placeholderScreenComponent = shallow(<PlaceholderScreen {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should exist', () => {
    expect(placeholderScreenComponent).toBeTruthy();
  });

  it('Should display a title', () => {
    // We get the title using the JestID
    const title = placeholderScreenComponent.findWhere((node: any) => node.prop('testID') === PlaceHolderIDs.text.key);

    // Title comes as an array of the rendered text.
    // E.g.: '<Text>{foo} text {foo2}</Text>' would come as '[foo(), text, foo2()]'
    const joinedTitle = title.get(0).props.children.join('');
    expect(joinedTitle).toBe(`${props.title} with ID ${props.navigation.getParam('')}`);
  });

  it('Should be able to navigate back', async () => {
    /*
     * We have to get a unique element by filtering the children by the testID.
     * This is because the PlaceholderScreen is a PureComponent and doesn’t have an instance that we can use to call the onPress function
     */
    const button = placeholderScreenComponent.findWhere(
      (node: any) => node.prop('testID') === PlaceHolderIDs.goBack.button.key
    );

    await button.get(0).props.onPress();
    expect(props.navigation.goBack).toHaveBeenCalled();
  });

  it('PlaceHolder function should return a PlaceHolder component', () => {
    // We call the PlaceHolder function with the same parameters we use to render the component
    const placeHolder = shallow(PlaceHolder(props.title)(props));

    // As these two objects would be compared by reference instead of value, we need to compare the objects as JSONs
    expect(JSON.stringify(placeHolder.get(0))).toEqual(JSON.stringify(placeholderScreenComponent.get(0)));
  });
});
