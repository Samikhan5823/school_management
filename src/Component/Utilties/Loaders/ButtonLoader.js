import React from 'react';

const ButtonLoader= (props)=>{
  
        const { small } = props;
        return (
            <span
                className={small ? "spinner-border spinner-border-sm ml-1" : "spinner-border ml-1"}
                role="status"
                aria-hidden="true"
            ></span>
        );
}



export default ButtonLoader;