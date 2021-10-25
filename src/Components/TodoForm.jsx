import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Grid, Slider } from '@mui/material';
import { useState, useRef } from 'react';

const marks = [
    {
        value: 1,
        label: 'Lowest',
    },
    {
        value: 2,
        label: 'Low',
    },
    {
        value: 3,
        label: 'Average',
    },
    {
        value: 4,
        label: 'High',
    }, {
        value: 5,
        label: 'Highest',
    },
];

export default function TodoForm(props) {

    let nameinput = useRef(null);
    let priorityinput = null;
    const [formdata, setFormdata] = useState({ name: "", priority: null })

    function handleChange() {
        setFormdata({
            name: nameinput.current.value,
            priority: priorityinput
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(formdata);
    }

    const valuetext = (value) => {
        priorityinput = value;
        return value;
    }

    return (
        <div>
            <Container className="todoapp" maxWidth="md" component="main" sx={{ pt: 1, pb: 1 }}>
                <Box component="form" onSubmit={handleSubmit}>
                    <Typography
                        component="h1"
                        variant="h6"
                        align="left"
                        color="text.primary"
                        gutterBottom
                        sx={{ pt: 2 }}
                    >
                        What needs to be done ?
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        name="taskinput"
                        label="Task"
                        autoComplete="off"
                        placeholder="Add Task"
                        inputRef={nameinput}
                        onChange={handleChange}
                    />
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={8} >
                            <Typography id="priority-slider" gutterBottom>
                                Priority :
                            </Typography>
                            <Slider
                                sx={{ ml: 5 }}
                                aria-label="priority-slider"
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                marks={marks}
                                defaultValue={1}
                                step={1}
                                min={1}
                                max={5}
                            />
                        </Grid>
                        <Grid item textAlign="center" xs={4}>
                            <Button variant="contained" type="submit">
                                Add Task
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
