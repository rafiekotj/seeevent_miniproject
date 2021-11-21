import {combineReducers} from 'redux';
import authReducer from './authReducer';
// import { useSelector } from 'react-redux';

// const dataAuth = useSelector((state) => state.auth )

export default combineReducers({
    auth: authReducer,
})