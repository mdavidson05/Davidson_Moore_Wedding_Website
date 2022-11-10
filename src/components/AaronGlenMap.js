import React,{useState} from 'react'




const mapStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '800px',
    height: '600px',
}

const containerStyle = {

  // position: 'center',  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  
};

const topRowPictureContainer = {
  width: '100%',
  height: '400px',
  display: 'inline-flex',
  justifyContent: 'space-between'


}



const AaronGlenMap = () => {

  
  const [magnifyTL, setMagnifyTL] = useState(false);
  const [magnifyTR, setMagnifyTR] = useState(false);
  const [magnifyBL, setMagnifyBL] = useState(false);
  const [magnifyBR, setMagnifyBR] = useState(false);


  return (

    <><div>

      <div className='Title'>
        <h1>Aaron Glen Map</h1>
      </div>
      <p>The wedding will be held at the historic Glencorse House at the foot of the pentland hills and is aproximately 20 minutes from Edinburgh.</p>
      <p>split into two direction and parking at chapel and aaron glen</p>
      
    </div>
    <div className='topFlexboxContainer' style ={topRowPictureContainer}>
    <div className = 'topLeftPicture'>
    <img className={magnifyTL ? 'hover' : 'topLeftPicture'} src={require('../NissanParking.PNG')} 
    onMouseEnter={() => setMagnifyTL(true)}
    onMouseLeave={() => setMagnifyTL(false)}
    />
    <p>You can park in this road next to the Nissan garage</p>
    </div>
    
    <div className = 'topRightPicture'>
    <img className={magnifyTR ? 'hover' : 'topRightPicture'} src={require('../DouglasParking.PNG')} 
    onMouseEnter={() => setMagnifyTR(true)}
    onMouseLeave={() => setMagnifyTR(false)}
    />
    <p>There's also some parking along the main road</p>
    </div>
    </div>
    <div className = "parkingmap" style  ={containerStyle}>
    <img className = "parkingImage" src={require('../AGParking.gif')} style = {mapStyle}/> 
    </div>
    <div className='what3Words'>
      <p>What Three Words ///monday.finishers.handfuls</p></div>
          
      
      <div className='topFlexboxContainer' style ={topRowPictureContainer}>
    <div className = 'bottomLeftPicture'>
    <img className={magnifyBL ? 'hover' : 'bottomLeftPicture'} src={require('../IndustrialParking.PNG')} 
    onMouseEnter={() => setMagnifyBL(true)}
    onMouseLeave={() => setMagnifyBL(false)}
    />
    <p>There's plenty of free parking in the Bilston Industrial Estate however it's an approximately 5 minute walk</p>
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
      
  ) 
  }

export default AaronGlenMap