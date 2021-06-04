import {useSelector} from 'react-redux';

export const useNewsInfo = () => {
  return useSelector(({newsReducer}) => newsReducer);
};
