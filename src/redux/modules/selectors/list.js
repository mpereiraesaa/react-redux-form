export const isListLoading = state => state.list.isFetchingList;
export const getList = state => state.list.data;
export const getError = state => state.list.fetchErrorMessage;
