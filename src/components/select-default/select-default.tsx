/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ChangeEvent, useState } from 'react';
import type { IconType } from 'react-icons';
import { 
  baseInputClasses, 
  defaultInputClasses, 
  disabledInputClasses, 
  primaryInputClasses, 
  secondaryInputClasses, 
  selectDropdownClasses, 
} from './style';
import clsx from 'clsx';

interface Option {
  value: string;
  label: string;
}

interface SelectDefaultProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  variant?: 'primary' | 'secondary' | 'default';
  name?: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

const SelectDefault: FC<SelectDefaultProps> = ({
  className = '',
  variant,
  disabled = false,
  loading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);

  const inputClasses = clsx(
    baseInputClasses,
    {
      [primaryInputClasses]: variant === 'primary' && !disabled,
      [secondaryInputClasses]: variant === 'secondary' && !disabled,
      [defaultInputClasses]: variant === 'default' && !disabled,
      [disabledInputClasses]: disabled,
    },
    className
  );

  const selectClasses = clsx(
    `w-full px-2 py-1 bg-transparent border-none outline-none transition-all`,
    selectDropdownClasses,
    {
      'text-black': isOpen, // Texto preto quando aberto
      'text-white': !isOpen // Texto branco quando fechado
    }
  );

  return (
    <div className={`${inputClasses} flex items-center`}>
      {LeftIcon && <LeftIcon className="my-auto mr-2" />}
      <select
        className={selectClasses}
        name={name || "ispsml-select"}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled || loading}
        required={required}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {RightIcon && <RightIcon className="ml-2" />}
    </div>
  );
};

export default SelectDefault;
