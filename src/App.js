import './App.scss';
import { useMediaQuery } from 'react-responsive';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';
import { PopularGoods } from './PopularGoods';

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div className="container">
      {isDesktop 
        ? <HeaderDesktop />
        : <HeaderMobile />
      }

      {/* {isDesktop 
        ? <PopularGoods />
        : <Slider />
      } */}
      
      <PopularGoods />
    </div>
  );
}

export default App;
