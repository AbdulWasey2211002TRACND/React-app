import './header.css';
import FirstGoal from './FirstGoal'
import SecondGoal from './SecondGoal'
import ThirdGoal from './ThirdGoal'

function Header() {
    return (
      <div className="header">
          <a>
            My Goals for this book
          </a>

          <FirstGoal></FirstGoal>
          <SecondGoal></SecondGoal>
          <ThirdGoal></ThirdGoal>
      </div>


    );
  }

export default Header;
