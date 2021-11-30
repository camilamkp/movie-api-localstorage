// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';
// Import any additional modules you want to include below \/

import View from './view.js';
import { Client } from './apiCall.js';

// \/ All of your javascript should go here \/

const moviesContainer = document.querySelector('.movies');
const save = document.querySelector('.btn-save');
const reset = document.querySelector('.btn-reset');
const moviesInput = document.querySelector('.#input');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) =>
{
    if(event.target == save)
    {
        
    }
});