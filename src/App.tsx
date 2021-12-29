import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Nav</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/route1'>Route 1</Link>
        <br />
        <Link to='/route2'>Route 2</Link>
      </nav>
    </div>
  );
};

export default App;
