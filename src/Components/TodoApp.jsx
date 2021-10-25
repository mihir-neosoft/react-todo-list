import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { nanoid } from "nanoid";
import SecureLS from 'secure-ls';



export default function TodoApp(props) {

    const [tasks, setTasks] = useState(props.tasks);
    const taskList = tasks
        .map(task => (
            <TodoList
                key={task.id}
                id={task.id}
                name={task.name}
                priority={task.priority}
                completed={task.completed}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
            />
        ));

    var ls = new SecureLS();
    ls.set(localStorage.getItem("user"), JSON.stringify(tasks));
    // localStorage.setItem("DATA",JSON.stringify(tasks));

    function addTask(formdata) {
        // convert priority in text.
    let translatepriority = "";
    if (formdata.priority === 1) {
        translatepriority = "Lowest";
    }
    if (formdata.priority === 2) {
        translatepriority = "Low";
    }
    if (formdata.priority === 3) {
        translatepriority = "Average";
    }
    if (formdata.priority === 4) {
        translatepriority = "High";
    }
    if (formdata.priority === 5) {
        translatepriority = "Highest";
    }
        const newTask = { id: nanoid(4), name: formdata.name, priority:translatepriority, completed: false };
        setTasks([...tasks, newTask]);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                console.log(id, task);
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    return (
        <div className="">
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    TODO LIST
                </Typography>
            </Container>

            {/* task form */}
            <TodoForm addTask={addTask} />

            {/* show all task */}
            <Container className="todoapp" maxWidth="md" component="main" sx={{ pt: 1, pb: 1 }}>
                <Box sx={{ mt: 4, mb: 4, }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Task</TableCell>
                                    <TableCell align="center">Priority</TableCell>
                                    <TableCell colSpan={2} align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {taskList}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </div>
    )
}
