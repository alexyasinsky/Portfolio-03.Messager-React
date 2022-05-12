import {useDispatch, useSelector} from "react-redux";

import {toggleCheckBox} from "../../store/profile/actions";
import Area from "../../components/Area/Area";
import {selectName, selectShowName} from "../../store/profile/selectors";

export default function Profile () {

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const dispatch = useDispatch();
  const handleCheckbox = () => {
    dispatch(toggleCheckBox)
  }

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
    </Area >
  )
}