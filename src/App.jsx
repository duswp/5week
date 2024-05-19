import React, { useState } from 'react';
import styled from 'styled-components';

// 과제
const TodoContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #0B610B;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const TodoInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const TodoItem = styled.div`
  background-color: #f0f0f0;
  padding-left: 10px;
  margin-bottom: 5px;
`;

const TodoList = styled.div`
  margin-top: 20px;
  font-size: 25px;
`;
const AddButton = styled.button`
  background-color: #0B610B;
  color: white;
  font-size: 15px;
`;

const DeleteButton = styled.button`
  float: right;
  background-color: #ff4d4d;
  color: white;
  font-size: 15px;

  
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
      setTodos([...todos, inputValue]);
      setInputValue('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <TodoContainer>
      <Title>My Starbucks Todo List</Title>
      <span>
        <TodoInput onChange={handleChange} type='text' placeholder='Enter your todo' value={inputValue}></TodoInput>
      </span>
      <AddButton onClick={handleAddTodo}>Add Todo</AddButton>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index}>{todo}
          <DeleteButton onClick={() => handleDeleteTodo(index)}>Delete</DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
}

export default App;

// <!-- 그냥 실습-->
// const TodoContainer = styled.div`
//   font-family: Arial, sans-serif;
// `;

// const TodoInput = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   margin-bottom: 10px;
// `;

// const TodoItem = styled.div`
//   background-color: #f0f0f0;
//   padding-left: 10px;
//   margin-bottom: 5px;
// `;

// const TodoList = styled.div`
//   margin-top: 20px;
// `;

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//   };

//   return (
//     <TodoContainer>
//       <h1>Todo List</h1>
//       <span>
//         <TodoInput onChange={handleChange} type='text' placeholder='할 일 입력' value={inputValue}></TodoInput>
//       </span>
//       <button onClick={handleAddTodo}>Add todo</button>
//       <TodoList>
//         {todos.map((todo, index) => (
//           <TodoItem key={index}>{todo}</TodoItem>
//         ))}
//       </TodoList>
//     </TodoContainer>
//   );
// }

// export default App;




// export default function useStatePage() {
//   const [time, setTime] = useState(1);

//   const handleClick = () => {
//     setTime(time + 1);
//   };

//   return (
//     <div>
//       <span> 현재 시간 : {time}시 </span>
//       <button onClick  = {handleClick}>Update</button>
//     </div>
//   );
// }
// let SkyBox = styled.div`

//   background: ${props => props.background};
//   padding: 20px;
//   border-radius: 10px;
// `;
// function Page() {

//   return (
//     <>
//       <SkyBox background="pink" />
//       <SkyBox background="gold" />
//       <SkyBox background="cyan" />
//       <SkyBox background="black" />
      
//     </>
//   )
// }

// export default Page;
