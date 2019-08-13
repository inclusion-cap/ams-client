import React, { useState, useEffect } from 'react';
import '../../styles/form/createForm.css';

function CreateForm() {
    const [options, setOptions] = useState([]);
    const [form, setForm] = useState({label: '', option: ''});
    const [inputTypeTranslator] = useState({
        'text input': {tagSpecifier: 'input', tagType: 'text'},
        'text area': {tagSpecifier: 'textarea', tagType: ''},
        'checkbox': {tagSpecifier: 'input', tagType: 'checkbox'},
        'date': {tagSpecifier: 'input', tagType: 'date'}
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (options.length > 0) {
            
        }
    }

    function handleAddOption(e) {
        e.preventDefault();
        if (form.option in inputTypeTranslator) {
            setOptions(options => {
                let translatedType = inputTypeTranslator[form.option];
                
                if (form.option === 'checkbox') {
                    return [...options, {label: form.label, ...translatedType, value: form.label}];            
                } else return [...options, {label: form.label, ...translatedType}];
            });
        }
    }
    function onChange(type) {
        return (e) => {
          setForm({...form, [type]: e.target.value});
        };
    }

    return (
        <div>

            <form onSubmit={handleSubmit} id="form-itself">
                <label>Create a form for your campaign</label>
                <br/>
                <label>Campaign Name</label>
                <input type="text" name="" id="itself-inp"/>
                <br/>
                {options.map((option, ind) => {
                    return  option.tagType !== "checkbox" ? ( 
                        <div key={ind} id="new-inp-cont">
                            <label>{option.label}</label>
                            <option.tagSpecifier id="itself-inp" type={`${option.tagType}`} />
                        </div>
                    ) : (
                        <div key={ind} style={{'display': 'flex'}}>
                            <option.tagSpecifier id="itself-checkbox" type={`${option.tagType}`} />
                            <label>{option.label}</label>
                        </div>
                    )
                })}

                <input type="submit" id='btn-submit' value="Create Form"/> 
            </form>   

            <form onSubmit={handleAddOption} id="form-itself">
                
                <label>Add a field label</label>
                <input type="text" onChange={onChange('label')} id="itself-inp"/>

                <select onChange={onChange('option')} defaultValue={'DEFAULT'} id="add-select">
                    <option value="DEFAULT" disabled></option>
                    <option value="text input">Text input</option>
                    <option value="text area">Text area</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="date">Date</option>
                </select>

                <input type="submit" value="Add Option to Form" id="btn-submit"/>
            </form>


        </div>
    )
}

export default CreateForm;



