
import './App.css'
import Navigation from './component/Navigation'
import Herosection from './component/Herosection'
function App() {
 
  return (
    <div>
      <Navigation/>
      {/* <Herosection/>   */}
     <div className='container'>
      <div className='hero-left'>
      <h1 className='heading'>YOUR FEET 
          DESERVE
          THE BEST
     </h1>
     <p>
YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
    <div className='btn-div'>
    <button className='btn'>Shop Now</button>
     <button className='btn-cat'>Category</button>
    </div>
    
    <p>Also Available On</p>
    <div className='img-div'>
      <img className='img' src="./images/amazon.png" alt="" />
    <img className='img'src="./images/flipkart.png" alt="" />
    </div>
    
    
     </div>
     <div className='hero-right'>
   <img src="./images/hero-image.png" alt="" />
     </div>
     </div>
       
    </div>
  );
};

export default App;
