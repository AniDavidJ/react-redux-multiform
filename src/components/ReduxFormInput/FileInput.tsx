import React from 'react';


const FileInput: React.FC = (field: any) => {
    const { input: { value } } = field
    console.log(value)
    
    const onChange = (e : any) => {
        const { input: { onChange } } = field
        onChange(e.target.files[0])
      }
    return(
    <div >
        
        <input 
        type="file"
        onChange={onChange}
            
        />
    </div>
)};

export default FileInput