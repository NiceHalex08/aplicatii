import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div>
      <div>
        <Link to='/Pag1'>
          <button className='sideButton'>ggg</button>
        </Link>
      </div>
      <div>
        <Link to='/Pag2'>
          <button className='sideButton'>gggg</button>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
