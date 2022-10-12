import * as React from 'react';
import List from '@mui/material/List';
import { Backdrop, Box, Divider, FormControlLabel, Grid, ListItem, Switch, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import TasksAccorderon from './TasksAccordeon';
import { CardContext } from '../Context';
import { styles } from '../constants/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function FolderList({ news, error, isLoading }) {
    const { newList } = React.useContext(CardContext)
    const [message, setMessage] = React.useState(false)
    const [menu, showMenu] = React.useState(false)
    const [showNews, disableNews] = React.useState(true)

    React.useEffect(() => {
        if (news && news.articles) {
            setMessage(news.articles[0].description)
        }
    }, [news])

    const toggleMenu = () => {
        showMenu(!menu)
    }
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <List sx={styles.mainList}>
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
                        <SettingsIcon onClick={toggleMenu} sx={styles.settingsIcon} />
                    </Grid>
                </Grid>
                {menu &&
                    <Box sx={styles.menuBox}>
                        <List component="nav" aria-label="mailbox folders">
                            <Divider />
                            <ListItem button>
                                <FormControlLabel
                                  
                                    value="start"
                                    control={<Switch color="primary"  defaultChecked={showNews} />}
                                    label={showNews ? "Disable news" : "Enable news"}
                                    labelPlacement="start"
                                    onChange={e => disableNews(e.target.checked)}
                                />
                            </ListItem>
                            <Divider />
                        </List>
                    </Box>}

                <Container sx={styles.mainContainer}>
                    {newList.map(
                        (item, id) => (<TasksAccorderon key={id} id={id} data={item} expandedDef={id === 0 ? true : false} />)
                    )}
                </Container>
            </List>

            <Box sx={{ margin: '1rem auto', width: '100%' }}>
                {message && showNews && <Typography sx={styles.newsLine}>{message}</Typography>}
            </Box>
        </ThemeProvider>
    );
}
