import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import React, { useContext, useState } from 'react';
import { FormControlLabel } from '@mui/material';
import { CardContext } from '../Context';
import { styles } from '../constants/styles';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => (
  styles.switch(theme)
));

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
