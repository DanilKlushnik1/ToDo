import * as ActionTypes from "global/types";

export const addTodoItem = payload => ({
  type: ActionTypes.ADD_TODO_ITEM,
  payload
});

export const editTodoItem = payload => ({
  type: ActionTypes.EDIT_TODO_ITEM,
  payload
});

export const removeTodoItem = payload => ({
  type: ActionTypes.REMOVE_TODO_ITEM,
  payload
});

export const editModeOnChange = payload => ({
  type: ActionTypes.EDIT_MODE_ON_CHANGE,
  payload
});

export const closeEditMode = payload => ({
  type: ActionTypes.CLOSE_EDIT_MODE,
  payload
});

export const toggleForDone = payload => ({
  type: ActionTypes.TOGGLE_FOR_DONE,
  payload
});
