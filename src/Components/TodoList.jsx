import { Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function TodoList(props) {

    const ifcompleted = (
        <strike>{props.name}</strike>
    );
    let strikeoncomplete = props.name;
    if (props.completed === true) {
        strikeoncomplete = ifcompleted;
    }
    // convert priority in text.
    let translatepriority = "";
    if (props.priority === 1) {
        translatepriority = "Lowest";
    }
    if (props.priority === 2) {
        translatepriority = "Low";
    }
    if (props.priority === 3) {
        translatepriority = "Average";
    }
    if (props.priority === 4) {
        translatepriority = "High";
    }
    if (props.priority === 5) {
        translatepriority = "Highest";
    }
    else {
        translatepriority = props.priority;
    }

    const viewTemplate = (
        <>
            <TableCell component="th" style={{ width: 600 }} scope="row">
                {strikeoncomplete}
            </TableCell>
            <TableCell align="center">{translatepriority}</TableCell>
            <TableCell align="right">
                <Button variant="outlined" color="success" id={props.id} onClick={() => props.toggleTaskCompleted(props.id)} ><DoneIcon /></Button>
            </TableCell>
            <TableCell align="right">
                <Button variant="outlined" color="error" onClick={() => props.deleteTask(props.id)} ><CloseIcon /></Button>
            </TableCell>
        </>
    );

    return <TableRow key={1}>{viewTemplate}</TableRow>
}


