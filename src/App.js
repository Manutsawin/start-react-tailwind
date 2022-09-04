// import logo from './logo.svg';
import './App.css';
import Navbar from './component/nav';
function App() {
  return (
    <div
      class='bg-[url("https://wallpaper.dog/large/17017419.jpg")] h-96 w-full bg-cover bg-center p-20'
    > 
      <Navbar/>

      <div className='flex bg-gray-50 mt-48  rounded-md drop-shadow-lg'>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <img className='m-10 items-center' src={require('./assets/soccer.png')}  width={50} height={50} alt='icon'/>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <img className='m-10 items-center' src={require('./assets/soccer.png')}  width={50} height={50} alt='icon'/>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <img className='m-10 items-center' src={require('./assets/soccer.png')}  width={50} height={50} alt='icon'/>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <img className='m-10' src={require('./assets/soccer.png')}  width={50} height={50} alt='icon'/>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
