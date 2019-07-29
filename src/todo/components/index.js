import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Input from "todo/containers/inputs/input";
import PropTypes from "prop-types";

class ToDo extends Component {
  state = { input: "" };

  onValueChange = name => ({ target: { value } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  onCheckedChange = index => ({ target: { checked } }) => {
    const { toggleForDone } = this.props;

    toggleForDone({ index, checked });
  }

  onAddToDo = name => e => {
    const {
      target: { value }
    } = e;
    const { onAddTodoItem } = this.props;

    if(!value) return;

    const code = e.keyCode || e.which;
    if (code == 13) {
      //Enter keycode
      onAddTodoItem({ title: value });

      this.setState({
        ...this.state,
        [name]: ''
      });
    }
  };

  closeEditMode = index => e => {
    const {
      target: { value }
    } = e;
    const { closeEditMode } = this.props;

    if(!value) return;

    const code = e.keyCode || e.which;
    if (code == 13) {
      //Enter keycode
      closeEditMode(index);
    }
  }

  renderTodoItems = () =>
    this.props.todoItems.map((todoItem, i) => (
      <div className={css(styles.todoItem)} key={i}>
        {todoItem.isEditMode
          ? (
            <Input
              value={todoItem.title}
              onChange={this.props.editModeOnChange(i)}
              onKeyPress={this.closeEditMode(i)}
            />
          )
          : (
            <div>
              <input
                type="checkbox"
                checked={todoItem.isDone}
                onChange={this.onCheckedChange(i)}
              />

              <span className={css(todoItem.isDone && styles.done)}>
                {todoItem.title}
              </span>
            </div>
          )
        }
        
        <div>
          <span
            className={css(styles.interactionButton)}
            onClick={this.props.onEditTodoItem(i)}
          >
            Edit
          </span>

          <span
            className={css(styles.interactionButton)}
            onClick={this.props.onRemoveTodoItem(i)}
          >
            Remove
          </span>
        </div>
      </div>
    ))

  render = () => {
    const {
      state: { input },
      props: {
        todoItems
      },
      onValueChange,
      onAddToDo,
      renderTodoItems
    } = this;

    return (
      <div className={css(styles.main)}>
        <Input
          value={input}
          onChange={onValueChange("input")}
          onKeyPress={onAddToDo('input')}
        />

        {!!todoItems.length && renderTodoItems()}
      </div>
    );
  };
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100vh"
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: '500px'
  },
  interactionButton: {
    margin: '0 15px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  done: {
    textDecoration: 'line-through'
  }
});

ToDo.propTypes = {
  todoItems: PropTypes.array.isRequired,
  onAddTodoItem: PropTypes.func.isRequired,
  onRemoveTodoItem: PropTypes.func.isRequired,
  onEditTodoItem: PropTypes.func.isRequired,
  editModeOnChange: PropTypes.func.isRequired,
  closeEditMode: PropTypes.func.isRequired,
  toggleForDone: PropTypes.func.isRequired
};

export default ToDo;
