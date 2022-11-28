import Cards from './Cards';
import Sidebar from './Sidebar';
const Aplic = () => {
  return (
    <div>
      <div className='stiky'>
        <div className='header'></div>
      </div>
      <div className='center'>
        <div class='Sidebar'>
          <Sidebar />
        </div>
        <div className='main'>
          <Cards />
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
};
export default Aplic;
