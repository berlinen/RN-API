import React, {useState} from 'react';
import {SegmentedControlIOS} from 'react-native';

const SegmentedControlIOsBasics = React.memo(() => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <SegmentedControlIOS
      values={['One', 'Two']}
      style={{marginTop: 50}}
      tintColor="gray"
      selectedIndex={selectedIndex}
      onChange={event => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
      }}
    />
  );
});

export default SegmentedControlIOsBasics;
