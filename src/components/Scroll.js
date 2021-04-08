import React from 'react';

class Scroll extends React.Component {
    render() {
        return (
            <div style={style}>
            {this.props.children}
            </div>
        );
    }
}

const style = {
    overflowY: 'scroll',
    //border: '5px solid black',
    height: '900px'
};

export default Scroll



// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const Name = () => {
//   return (
//     <View>
//       <Text>Name</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default Name;