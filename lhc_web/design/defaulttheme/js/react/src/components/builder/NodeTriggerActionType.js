import React, { Component } from 'react';
import {fromJS} from 'immutable';

export default ({onChange, type}) => {
    var options = fromJS([
        {
        'value':'text',
        'text' : 'Send Text',
        }/*,
        {
            'value':'typing',
            'text' : 'Send Typing',
        },
        {
            'value':'predefined',
            'text' : 'Send predefined block',
        },
        {
            'value':'image',
            'text' : 'Send Image',
        },
        {
            'value':'video',
            'text' : 'Send Video',
        },
        {
            'value':'audio',
            'text' : 'Send Audio',
        },
        {
            'value':'file',
            'text' : 'Send File',
        },
        {
            'value':'button',
            'text' : 'Send Buttons',
        },
        {
            'value':'generic',
            'text' : 'Send Carrousel',
        },
        {
            'value':'list',
            'text' : 'Send List',
        },
        {
            'value':'command',
            'text' : 'Update Current Lead',
        }*/
    ]);

    var list = options.map((option, index) => <option key={index} value={option.get('value')}>{option.get('text')}</option>);

    return (
        <div className="row">
            <div className="col-xs-6">
            Response type
            </div>
            <div className="col-xs-6">
                <div className="form-group">
                    <select onChange={(e) => onChange(e)} className="form-control" defaultValue={type}>
                        {list}
                    </select>
                </div>
            </div>
        </div>
    );
}
