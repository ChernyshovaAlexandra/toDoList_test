import * as React from 'react';
import List from '@mui/material/List';
import { Grid, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import TasksAccorderon from './TasksAccordeon';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { CardContext } from '../Context';
const queryClient = new QueryClient()


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function FolderList() {
    const { newList } = React.useContext(CardContext)
    React.useEffect(() => {
        console.log(123, newList)
    }, [newList])
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <List sx={{
                width: '100%',
                maxWidth: 360,
                backgroundColor: '#222222',
                borderRadius: '30px',
                p: '1rem 10px !important',
                textAlign: 'left',
                margin: '1rem auto 0',
                maxHeight: '844px'
            }}>
                <Grid container spacing={2} justifyContent="space-between" sx={{ p: '0 10px!important' }}>
                    <Grid item xs sx={{ maxWidth: '100%' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: '"Actor", sans-serif',
                            color: '#F4F4F4'
                        }}>
                            To Do
                        </Typography>
                    </Grid>
                    <Grid item >
                        <SettingsIcon />
                    </Grid>
                </Grid>
                <Container sx={{
                    maxHeight: '763px',
                    p: '10px!important',
                    overflow: 'auto'
                }}>
                    {newList.map(
                        (item, id) => (
                            <TasksAccorderon key={id} id={id} data={item} expandedDef={id === 0? true : false} />
                        )
                    )}

                </Container>
            </List>
        </ThemeProvider>
    );
}
