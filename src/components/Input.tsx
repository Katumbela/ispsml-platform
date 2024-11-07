import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input = ({ icon, ...props }: InputProps) => {
  return (
    <div className="flex items-center border border-gray-300 rounded p-2">
      {icon && <span className="mr-2">{icon}</span>}
      <input className="flex-1 outline-none" {...props} />
    </div>
  );
};

export default Input;
