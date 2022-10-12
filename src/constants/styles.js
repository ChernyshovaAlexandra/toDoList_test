const colors = [
    '#FF0000', '#366EFF', '#FFEB33'
]

export const styles = {
    mainList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#222222',
        borderRadius: '30px',
        p: '1rem 10px !important',
        textAlign: 'left',
        margin: '1rem auto 0',
        maxHeight: '844px'
    },
    settingsIcon: { zIndex: 101, position: 'relative', cursor: 'pointer', "&:hover": { opacity: '.5' } },
    menuBox: {
        width: '100%',
        padding: '10px',
        background: '#343434',
        margin: '0px',
        position: 'absolute',
        zIndex: '100',
        left: 0,
        minHeight: '200px',
        top: 0,
        boxShadow: '0px 4px 4px #131313',
        borderRadius: '30px 30px 0 0',
        padding: '50px 20px'
    },
    mainContainer: {
        maxHeight: '763px',
        p: '10px!important',
        overflow: 'auto'
    },
    newsLine: {
        whiteSpace: 'nowrap',
        animation: '28s text infinite linear'
    },
    switch: (theme,) => {
        return {
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
                '&:before': {
                    content: "''",
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 24 22"><path fill="${encodeURIComponent(
                        '#A9A9A9',
                    )}" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>')`,
                }
            },
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',

                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                        opacity: 1,
                        border: 0,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                    '& .MuiSwitch-thumb': {

                        '&:before': {

                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 24 22"><path fill="${encodeURIComponent(
                                '#A9A9A9',
                            )}" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>')`,
                        }
                    },
                },

                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',

                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color: "#fff",
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                },

            },


            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: "#366EFF",
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
            },
        }
    },
    accordion: {
        main: {
            background: 'transparent',
            borderColor: 'transparent',
            boxShadow: 'none'
        },
        summary: elemExpanded => {
            return {
                borderRadius: elemExpanded ? '0' : '25px',
                borderColor: 'transparent',
                background: elemExpanded ? "transparent" : "#282828",
                boxShadow: elemExpanded ? "none" : '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
                mb: elemExpanded ? "0" : '32px',
                p: elemExpanded ? "0" : '14px'
            }
        },
        typ: elemExpanded => {
            return {
                pl: '15px',
                borderLeft: elemExpanded ? "none" : '5px solid',
                lineHeight: '2'
            }
        },
        details: {
            borderRadius: '25px',
            borderColor: 'transparent',
            background: "#282828",
            boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
            mb: '32px',
            p: '14px !important',
            transition: 'none'
        },
        list: {
            main: (id2, data) => {
                return {
                    borderLeft: '5px solid',
                    borderColor: colors[Math.round(id2 % 3)],
                    p: '0 0 5px',
                    marginBottom: id2 === data.data.length - 1 ? " " : '1rem'
                }
            },
            container: {
                alignItems: 'flex-start',
                p: "0 !important",
                justifyContent: 'space-between'
            },
            typ: task => {
                return {
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    lineHeight: '28px',
                    color: '#F4F4F4',
                    textDecoration: task.checked ? 'line-through' : 'none'
                }
            },
            typSec: {
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '17px',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none!important'
            }
        }
    }
}