import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { AccordionDetails, Grid, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomizedSwitch from "./IOSSwitch";
import { CheckBox } from "@mui/icons-material";
import { styles } from "../constants/styles";


function TasksAccorderon({ data, id, expandedDef }) {
    const [elemExpanded, setExpanded] = useState(expandedDef)
    return (
        <Accordion
            defaultExpanded={expandedDef}
            onChange={(e, expanded) => setExpanded(expanded)}
            sx={styles.accordion.main}>
            <AccordionSummary
                sx={styles.accordion.summary(elemExpanded)}
                expandIcon={<ExpandCircleDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                {elemExpanded && <CheckBox />}
                <Typography sx={styles.accordion.typ(elemExpanded)}> {`${data.name} Tasks${elemExpanded ? ":" : ""}`}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordion.details}>
                <List>
                    {data.data.map(
                        (task, id2) => (
                            <ListItem
                                key={id2}
                                sx={styles.accordion.list.main(id2, data)}>
                                <Grid sx={{ width: 'calc(100% - 15px)' }}>
                                    <Grid item xs sx={{ width: '100%' }}>
                                        <CustomizedSwitch
                                            position={[id, id2]}
                                            checked={task.checked}
                                            label={
                                                <Container sx={styles.accordion.list.container}>
                                                    <Typography sx={styles.accordion.list.typ(task)}>
                                                        {task.name}
                                                    </Typography>
                                                    <Typography sx={styles.accordion.list.typSec}>{task.description}
                                                    </Typography>
                                                </Container>}
                                            labelPlacement="start" />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        )
                    )}
                </List>
            </AccordionDetails>

        </Accordion>

    )
}


export default TasksAccorderon;