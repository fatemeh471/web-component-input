import {css} from 'lit';

export const textFieldStyles = css`
.text-field {
  display: inline-block;
  padding: 8px;
  border: 1px solid #afafaf;
  border-radius:10px;
  .text-field__input{
    padding: 5px;
    border: none
  }
  .text-field__input:focus-visible,
  .text-field__input:focus,
  .text-field__input:active {
    outline-color: transparent 
  }      
  .text-field.text-field__icon-right {
    background: red;
    outline-color: red;
    width:100px
  }
  .text-field,.text-field__icon-left {
    background: red;
    outline-color: red;
  }  

            
}
`;