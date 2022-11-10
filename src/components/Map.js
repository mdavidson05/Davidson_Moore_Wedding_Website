import React,{useState} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from './Marker';
import Caption from 'react-caption';



const mapStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const containerStyle = {
  width: '500px',
  height: '500px',
  // position: 'center',  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  
};

const topRowPictureContainer = {
  width: '100%',
  height: '600px',
  display: 'inline-flex',
  justifyContent: 'space-between'


}

const center = {
  
  lat: 55.85416089896724,
  lng: -3.2079013289390543,
};




const getMapOptions = (map) => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  };
};



function MyComponent() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBZGB4mJ0zxwT7eNP0N_oegfttjuUtMAaA"
  })



  const [map, setMap] = React.useState(null)
  const [magnifyTL, setMagnifyTL] = useState(false);
  const [magnifyTR, setMagnifyTR] = useState(false);
  const [magnifyBL, setMagnifyBL] = useState(false);
  const [magnifyBR, setMagnifyBR] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (

    <><div>

      <div className='Title'>
        <h1>Map</h1>
      </div>
      <p>The wedding will be held at the historic Glencorse House at the foot of the pentland hills and is aproximately 20 minutes from Edinburgh.</p>
      <p>split into two direction and parking at chapel and aaron glen</p>
      
    </div>
    <div className='topFlexboxContainer' style ={topRowPictureContainer}>
    <div className = 'topLeftPicture'>
    <img className={magnifyTL ? 'hover' : 'topLeftPicture'} src={require('../wedding2.jpg')} 
    onMouseEnter={() => setMagnifyTL(true)}
    onMouseLeave={() => setMagnifyTL(false)}
    />
    <p>Turn Here</p>
    </div>
    
    <div className = 'topRightPicture'>
    <img className={magnifyTR ? 'hover' : 'topRightPicture'} src={require('../wedding2.jpg')} 
    onMouseEnter={() => setMagnifyTR(true)}
    onMouseLeave={() => setMagnifyTR(false)}
    />
    <p>Ignore this church</p>
    </div>
    </div>
    <div className = "map" style  ={mapStyle}>
      <GoogleMap 
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={getMapOptions}
    >
    
        {/* {<Marker
    title={'Glencorse House'}
    name={'Venue'}
    position={{lat: 55.85416089896724, lng: -3.2079013289390543}}
    color = "red" />} */}
        <></>
      </GoogleMap>
      
      </div>

      <div className='what3Words'>
      <p>What Three Words ///described.satin.slide</p></div>
      
      
      <div className='topFlexboxContainer' style ={topRowPictureContainer}>
    <div className = 'bottomLeftPicture'>
    <img className={magnifyBL ? 'hover' : 'bottomLeftPicture'} src={require('../wedding2.jpg')} 
    onMouseEnter={() => setMagnifyBL(true)}
    onMouseLeave={() => setMagnifyBL(false)}
    />
    <p>Walk up here</p>
    </div>
    
    <div className = 'bottomRightPicture'>
    <img className={magnifyBR ? 'hover' : 'bottomRightPicture'} src={require('../wedding2.jpg')} 
    onMouseEnter={() => setMagnifyBR(true)}
    onMouseLeave={() => setMagnifyBR(false)}
    />
    <p>Park here</p>
    </div>
    </div>
    </>
      
  ) : <></>
}

export default React.memo(MyComponent)