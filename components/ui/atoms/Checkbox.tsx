import React from 'react';
import Image from 'next/image';

interface CheckboxComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: any;
  register: any;
  onChange?: any;
  name: string;
  errorMessage?: string;
}

const CustomCheckbox: React.FC<CheckboxComponentProps> = ({
  label,
  name = '',
  errorMessage = '',
  register,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event);
  };

  return (
    <label className="flex items-center space-x-3 leading-10">
      <div className="relative">
        <input
          {...register(name, {
            onChange: handleChange,
          })}
          type="checkbox"
          {...props}
          className="absolute opacity-0 h-0 w-0 peer"
        />

        <div className="w-5 h-5 border-2 border-[#55C1F7] rounded flex items-center justify-center peer-checked:bg-[#55C1F7]">
          <Image
            src={'/images/icons/checkboxIcon.svg'}
            alt="Checkbox Icon"
            width={16}
            height={16}
            className="w-3 h-3 peer-checked:block z-[10]"
          />
        </div>
      </div>
      <div className="flex items-start flex-col">
        <div className="text-inputPlaceholder">
          {label}
          {errorMessage && <div className="text-errorRed text-sm error-msg">{errorMessage}</div>}
        </div>
      </div>
    </label>
  );
};

export default CustomCheckbox;
