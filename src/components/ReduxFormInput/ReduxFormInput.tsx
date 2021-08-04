import React from 'react';

const ReduxFormInput: React.FC = (field: any) => (
    <div >
        <label >{field.label}</label>
        <input
            {...field.input}
            type={field.type}
            step={field.step}
            disabled={field.disabled}
            style={{width:"80%",height:"25px"}}
            
        />
        {field.meta.touched && <p className="text-danger" style={{margin:0,padding:0,color:"red"}}>{field.meta.error}</p>}
    </div>
);

export default ReduxFormInput;