export const CHANGE_SORT = 'CHANGE_SORT';

export function changeSort(data) {
  console.log('changeSort action');
  return dispatch => {
    dispatch({
      type: CHANGE_SORT,
      data,
    });
  };
};
