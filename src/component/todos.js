import React from "react";
import "../component/todos.css";
import { Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      // Set default color to white
      let color = "#ffffffff";

      // Check if the due date is in the past
      const currentDate = new Date();
      const dueDate = new Date(todo.due);

      if (dueDate < currentDate) {
        color = "#ff0000"; // Change the color if the due date is in the past, here it's set to red for example
      }

      return (
        <Grid key={todo.id}>
          {/* Set the background color of the card */}
          <Card style={{ marginTop: 10, backgroundColor: color }} data-testid={todo.content}>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox
                style={{ paddingLeft: 0 }}
                color="primary"
                onClick={() => deleteTodo(todo.id)}
              />
              {/* Display the due date instead of the date the todo was created */}
              <ListItemText primary={todo.content} secondary={todo.due} />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
