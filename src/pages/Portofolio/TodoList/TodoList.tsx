import { useState } from "react";
import { Container, Box, Heading } from "@chakra-ui/react";
import { ITodos } from "./interface";

import TodoForm from "./comTodoList/todoForm";
import TodoList from "./comTodoList/todoList";

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <Container p="2em" h="100vh">
      <Box mx="auto" px="auto" sx={{ color: "white" }}>
        <Box>
          <Heading size="lg" textAlign="center" mb="2rem" color="#1A1A1A">
            Chores ToDo List
          </Heading>
        </Box>
        <Box>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            count={count}
            setCount={setCount}
          />
          <TodoForm todos={todos} setTodos={setTodos} count={count} />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
