import React from 'react';
import '../marker.css';

const Marker = (props) => {
    const { color, name, id } = props;
    return (
      <><div className="pin bounce"
            position={{lat: 55.85416089896724,
                lng: -3.2079013289390543,}}
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name} /><div className='pulse' /></>
    );
  };

  export default Marker;