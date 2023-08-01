import {useSelector,useDispatch} from 'react-redux'
import { decNumber, incNumber } from './action/index';


function UserInterface(){
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
      <>
        <button onClick={() => dispatch(decNumber(2))}>-</button>
        <input type="text" value={myState} />
        <button onClick={() => dispatch(incNumber(5))}>+</button>
      </>
    );
}

export default UserInterface;