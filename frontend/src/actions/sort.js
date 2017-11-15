export const CHANGE_SORT = 'CHANGE_SORT';

export function changeSort(data) {
  return dispatch => {
    dispatch({
      type: CHANGE_SORT,
      data,
    });
  };
};
