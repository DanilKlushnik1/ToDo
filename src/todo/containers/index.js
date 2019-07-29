import ToDo from "todo/components";
import { connect } from "react-redux";
import * as Actions from "global/actions";

const mapStateToProps = state => ({
  todoItems: state.todoReducer.todoItems
});

const mapDispatchToProps = dispatch => ({
  onAddTodoItem: payload => dispatch(Actions.addTodoItem(payload)),
  onRemoveTodoItem: index => () => dispatch(Actions.removeTodoItem({ index })),
  onEditTodoItem: index => () => dispatch(Actions.editTodoItem({ index })),
  editModeOnChange: index => ({ target: { value } }) => dispatch(Actions.editModeOnChange({ index, value })),
  closeEditMode: index => dispatch(Actions.closeEditMode({ index })),
  toggleForDone: ({ index, checked }) => dispatch(Actions.toggleForDone({ index, checked }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
