import React from 'react';
import '../../styles/ui.css';

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  register: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const CustomInput: React.FC<ICustomInput> = ({
  name = '',
  errorMessage,
  register,
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (name === 'mobile' && value.length > 10) {
      event.target.value = value.slice(0, 10);
    }
    if (onChange) {
      onChange(event);
    }
  };

  const conditionalProps =
    name === 'mobile'
      ? {
          maxLength: 10,
          inputMode: 'numeric',
        }
      : {};

  return (
    <div className='relative z-0 w-full'>
      <input
        {...register(name, {
          onChange: handleChange,
        })}
        {...props}
        {...conditionalProps}
        placeholder=' '
        id={name}
        className={`customInput ${props.className}`}
      />
      <label htmlFor={name} className="custumInput__label">
        {props.placeholder || ''}
      </label>
      {errorMessage && (
        <div className="text-errorRed text-left text-sm error-msg">{errorMessage}</div>
      )}
    </div>
  );
};

export default CustomInput;
