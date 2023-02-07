import { FcHome } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import './stylesheets/menus.scss';

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray',
};

//좌측 메뉴
export const MainMenu = () => (
  <nav className="main-menu">
    <NavLink to="/">
      <FcHome />
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
      [회사 소개]
    </NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>
      [이벤트]
    </NavLink>
    <NavLink to="/products" activeStyle={selectedStyle}>
      [제품]
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>
      [고객 지원]
    </NavLink>
  </nav>
);

//회사소개 about 관련된 상단메뉴
export const AboutMenu = ({ match }) => {
  console.log(`AboutMenu - match : `, match);
  return (
    <div className="about-menu">
      <li>
        <NavLink to="/about" style={match.isExact && selectedStyle}>
          [Company]
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/history" activeStyle={selectedStyle}>
          [History]
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/services" activeStyle={selectedStyle}>
          [Services]
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/location" activeStyle={selectedStyle}>
          [Location]
        </NavLink>
      </li>
    </div>
  );
};
