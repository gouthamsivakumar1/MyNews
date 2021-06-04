import { API_KEY,SUCCESS,FAILURE,LOADING } from '../Utils/AppConstant';
import API from './apiHandler';
import { useDispatch } from 'react-redux';
import { loadSuccess,loadFailed } from '../redux/news.slice';


export const getNewsDetails = async (dispatch) => {    
     return API.get(API_KEY).then(function (response) {
        dispatch(loadSuccess(response.data.sources));
    }).catch(function (error) {
        if (error.response) {
             dispatch(loadFailed(error.response));
        }
    })
}

