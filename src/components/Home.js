import React from "react";

const Home = () => (

  <div>
     <div>
    <div class='Title'> 
    <h1>Lily Davidson & Adam Moore </h1>
    <h2> are getting married</h2>
    </div>

    <img className = 'homeImage' src={require('../wedding2.jpg')} />
       <div class = 'weddingInfo'>
       <h2>Date</h2>
       <p>7th July 2023</p>
       </div>
       <div class = 'weddingInfo'>
       <h2>Time</h2>
       <p>1300</p>
       </div>
       <div class = 'weddingInfo'>
       <h2>Location</h2>
       <p>Glencorse House, Milton Bridge, Penicuik EH26 0NZ</p>
       </div>
       <div class = 'weddingInfo'>
       <h2>Gifts</h2>
       <p>As we’ve lived together for a year or two,
We really don’t need anything new.

If you're thinking of giving us a gift to help us on our way,

a contribution towards our honeymoon would make our day.

Then when we're sipping a cocktail by the sea so blue,

We'll know our trip was thanks to you.

But please remember what means the most,

Is that you be with us to share our toast.

https://www.honeyfund.co.uk/wedding/</p>
       </div>
      
       </div>
  </div>
    
);


export default Home;