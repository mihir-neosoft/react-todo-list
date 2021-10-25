import React from 'react';
import NavigationBar from './SubComponents/NavigationBar';
import TodoApp from './TodoApp';
import SecureLS from 'secure-ls';

export default function Homepage() { 
  var ls = new SecureLS();
  const DATA = JSON.parse(ls.get(localStorage.getItem("user")));
  
  return (
    <div>
      <NavigationBar pagename="Todo App" />
      <TodoApp tasks={DATA} />
    </div >
  )
}
