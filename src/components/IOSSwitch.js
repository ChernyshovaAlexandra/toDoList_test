import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import React, { useContext, useState } from 'react';
import { FormControlLabel } from '@mui/material';
import { CardContext } from '../Context';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
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
}));

export default function CustomizedSwitch({ label, labelPlacement, position, checked }) {
  const { newList, changeList } = useContext(CardContext)

  return (
    <FormControlLabel
      sx={{
        justifyContent:"space-between",
        width: '100%'
      }}
      control={<IOSSwitch sx={{ m: 1 }} defaultChecked={checked} />}
      label={label}
      onChange={e => changeList(newList, position, e.target.checked)}
      labelPlacement={labelPlacement}
    />
  )
}
