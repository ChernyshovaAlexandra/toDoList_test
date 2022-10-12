import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { AccordionDetails, Grid, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomizedSwitch from "./IOSSwitch";
import { CheckBox } from "@mui/icons-material";

const colors = [
    '#FF0000', '#366EFF', '#FFEB33'
]
function TasksAccorderon({ data, id, expandedDef }) {
    const [elemExpanded, setExpanded] = useState(expandedDef)
    return (
        <Accordion
            defaultExpanded={expandedDef}
            onChange={(e, expanded) => setExpanded(expanded)}
            sx={{
                background: 'transparent',
                borderColor: 'transparent',
                boxShadow: 'none'
            }}>
            <AccordionSummary
                sx={{
                    borderRadius: elemExpanded ? '0' : '25px',
                    borderColor: 'transparent',
                    background: elemExpanded ? "transparent" : "#282828",
                    boxShadow: elemExpanded ? "none" : '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
                    mb: elemExpanded ? "0" : '32px',
                    p: elemExpanded ? "0" : '14px'
                }}
                expandIcon={<ExpandCircleDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                {elemExpanded && <CheckBox />}
                <Typography sx={{
                    pl: '15px',
                    borderLeft: elemExpanded ? "none" : '5px solid',
                    lineHeight: '2'
                }}> {`${data.name} Tasks${elemExpanded ? ":" : ""}`}</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    borderRadius: '25px',
                    borderColor: 'transparent',
                    background: "#282828",
                    boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
                    mb: '32px',
                    p: '14px !important',
                    transition: 'none'
                }}>
                <List>
                    {data.data.map(
                        (task, id2) => (
                            <ListItem
                                key={id2}
                                sx={{
                                    borderLeft: '5px solid',
                                    borderColor: colors[Math.round(id2 % 3)],
                                    p: '0 0 5px',
                                    marginBottom: id2 === data.data.length-1 ? " " : '1rem'
                                }}>
                                <Grid sx={{ width: 'calc(100% - 15px)' }}>
                                    <Grid item xs sx={{ width: '100%' }}>
                                        <CustomizedSwitch
                                            position={[id, id2]}
                                            checked={task.checked}
                                            label={
                                                <Container sx={{
                                                    alignItems: 'flex-start',
                                                    p: "0 !important",
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Typography sx={{
                                                        fontSize: '1.35rem',
                                                        fontWeight: 600,
                                                        lineHeight: '28px',
                                                        color: '#F4F4F4',
                                                        textDecoration: task.checked ? 'line-through' : 'none'
                                                    }}>
                                                        {task.name}
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontWeight: 600,
                                                        fontSize: '14px',
                                                        lineHeight: '17px',
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        textDecoration: 'none!important'
                                                    }}>{task.description}
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