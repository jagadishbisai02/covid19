import {IoIosArrowForward} from 'react-icons/io'
import "./searchState.css";

const SearchState = (props) => {
  const { stateName, stateCode } = props;

  return (
    <>
      <li className='search-state-name'>
        <p className='state-names'>{stateName}</p>
        <button type="button" className='state-name-btn'>{stateCode}<span className='icon-span'><IoIosArrowForward/></span></button>
      </li>
    </>
  );
};

export default SearchState;
