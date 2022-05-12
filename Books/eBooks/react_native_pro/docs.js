-Height and Width
A components height and width determine its size on the screen.

-Layout with Flexbox
A component can specify the layout of its children using the flexbox algorithm. Flexbox is designed to 
provide a consistent layout on different screen sizes.

You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right 
layout.

Flex Direction
Adding flexDirection to a component's style determines the primary axis of its layout. Should the children 
be organized horizontally (row) or vertically (column)? The default is column.

Justify Content
Adding justifyContent to a components style determines the distribution of children along the primary axis. 
Should children be distributed at the start, the center, the end, or spaced evenly? Available options are 
flex-start, center, flex-end, space-around, space-between and space-evenly.

Align Items
Adding alignItems to a components style determines the alignment of children along the secondary axis 
(if the primary axis is row, then the secondary is column, and vice versa). Should children be aligned at 
the start, the center, the end, or stretched to fill? Available options are flex-start, center, flex-end, 
and stretch.

-Handling Text Input
TextInput is a basic component that allows the user to enter text. It has an onChangeText prop that takes a 
function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be 
called when the text is submitted.

-Handling Touches
Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as 
tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all 
sorts of common gestures, as well as a comprehensive gesture responder system to allow for more advanced 
gesture recognition, but the one component you will most likely be interested in is the basic Button.

ex 
<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>

-Using List Views
React Native provides a suite of components for presenting lists of data. Generally, youll want to use 
either FlatList or SectionList.

The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList 
works well for long lists of data, where the number of items might change over time. Unlike the more 
generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all 
the elements at once.

The FlatList component requires two props: data and renderItem. data is the source of information for the 
list. renderItem takes one item from the source and returns a formatted component to render.

-Networking
Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST 
API, or you may simply need to fetch a chunk of static content from another server.

