import React from 'react';

const IconComponent = (props) => {
  return <i className={props.className} style={props.style} onClick={props.function}><span style={{fontSize:'15px' ,marginLeft:'2px'}}>Hello Guest</span></i>;
};

export default IconComponent;