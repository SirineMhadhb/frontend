import React from 'react';
import { Bar } from 'academy/Navbar';
export const Prop = (props) => (
    <div>
        <Bar/>
        {props.children}
    </div>
);


