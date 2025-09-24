import React from 'react';
import '../../styles/ui.css'; 


interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    disabled?: boolean;
    className?: string;
}

const CustomButton: React.FC<ButtonComponentProps> = ({ label, className = '', disabled = false }) => {
    return (
        <button
            className={`customButton ${className}`}
            disabled={disabled}
        >
            <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">{label}</span>
        </button>
    );
};

export default CustomButton;
