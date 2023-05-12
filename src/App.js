import './App.scss';
import { useMediaQuery } from 'react-responsive';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';
import { PopularGoods } from './PopularGoods';
import { Slider } from './Slider';

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

      {isDesktop 
        ? <Slider />
        : <PopularGoods />
      }
    </div>
  );
}

export default App;
