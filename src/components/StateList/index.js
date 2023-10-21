import { Link } from "react-router-dom";
import "./index.css";

const ListOfState = (props) => {
  const { stateList } = props;
  const {
    stateCode,
    stateName,
    listOfConfirmed,
    listOfRecovered,
    listOfOther,
    listOfDeceased,
    listOfPopulation,
  } = stateList;
  const active =
    listOfConfirmed - listOfRecovered - listOfDeceased - listOfOther;
    console.log(listOfConfirmed)

  return (
    <>
      <li className="list-state-value">
        <Link to={`/state/${stateCode}`} className="link-class">
          <p className="state-names">{stateName}</p>
        </Link>
        <p className="state-confirm">{listOfConfirmed}</p>
        <p className="state-active">{active}</p>
        <p className="state-recover">{listOfRecovered}</p>
        <p className="state-decease">{listOfDeceased}</p>
        <p className="state-population">{listOfPopulation}</p>
      </li>
    </>
  );
};

export default ListOfState;