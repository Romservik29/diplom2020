import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

type MyButtonProps = {
  tip: string
  tipClassName?: string
  btnClassName?: string
  onClick: () => void
  children: React.ReactNode
}

const MyButton = (props: MyButtonProps) => (
  <Tooltip title={props.tip} className={props.tipClassName} placement="top" >
    <IconButton onClick={props.onClick} className={props.btnClassName} >
      {props.children}
    </IconButton>
  </Tooltip>
);

export default MyButton