import {useDispatch, useSelector} from "react-redux";

import {initProfileTrack, setNameFB, setShowName, stopProfileTrack} from "../../store/profile/actions";
import Area from "../../components/Area/Area";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {logOut} from "../../services/firebase";
import {Form} from "../../components/Form/Form";
import {useEffect} from "react";

export default function Profile () {

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    dispatch(setShowName(!showName))
  }

  const handleSubmit = (text) => {
    dispatch(setNameFB(text));
  };

  useEffect(() => {
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };
  }, [dispatch]);



  return (
    <Area height={650}>
      <div>
        <label>
          Скрыть/Показать имя
          <input
            type="checkbox"
            checked={showName}
            onChange={handleCheckbox}
          />
        </label>
        <br/>
        {showName && name}
      </div>
      <button onClick={logOut}>LOGOUT</button>
      <Form onSubmit={handleSubmit} />
    </Area >
  )
}