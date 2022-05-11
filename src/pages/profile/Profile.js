import {useDispatch, useSelector} from "react-redux";

import {toggleCheckBox} from "../../store/profile/actions";
import Area from "../../components/Area/Area";

export default function Profile () {

  const state = useSelector(state => state);
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
            checked={state.showName}
            onChange={handleCheckbox}
          />
        </label>
        <br/>
        {state.showName && state.name}
      </div>
    </Area >
  )
}