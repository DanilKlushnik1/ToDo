import * as ActionTypes from "global/types";
import { removeItemFromArray } from "global/shared/utils/arrayUtils";

const initialState = {
  todoItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_ITEM: {
      const { title } = action.payload; // === action.payload.title
      const newTodoItems = [...state.todoItems];
      newTodoItems.push({
        title,
        isDone: false,
        isEditMode: false
      });

      return {
        ...state,
        todoItems: newTodoItems
      };
    }

    case ActionTypes.EDIT_TODO_ITEM: {
      const { index } = action.payload; // === action.payload.title
      const newTodoItems = [...state.todoItems];
      newTodoItems[index].isEditMode = true;

      return {
        ...state,
        todoItems: newTodoItems
      };
    }

    case ActionTypes.REMOVE_TODO_ITEM: {
      const { index } = action.payload; // === action.payload.title
      const newTodoItems = removeItemFromArray(state.todoItems, index);

      return {
        ...state,
        todoItems: newTodoItems
      };
    }

    case ActionTypes.EDIT_MODE_ON_CHANGE: {
      const { index, value } = action.payload; // === action.payload.title
      const newTodoItems = [...state.todoItems];

      newTodoItems[index].title = value;

      return {
        ...state,
        todoItems: newTodoItems
      };
    }

    case ActionTypes.CLOSE_EDIT_MODE: {
      const { index } = action.payload; // === action.payload.title
      const newTodoItems = [...state.todoItems];

      newTodoItems[index].isEditMode = false;

      return {
        ...state,
        todoItems: newTodoItems
      };
    }

    case ActionTypes.TOGGLE_FOR_DONE: {
      const { index, checked } = action.payload; // === action.payload.title
      const newTodoItems = [...state.todoItems];

      newTodoItems[index].isDone = checked;

      return {
        ...state,
        todoItems: newTodoItems
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
