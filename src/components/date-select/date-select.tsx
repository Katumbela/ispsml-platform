import { FC } from 'react';
import clsx from 'clsx';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  baseInputClasses,
  defaultInputClasses,
  disabledInputClasses,
  primaryInputClasses,
  secondaryInputClasses,
} from '../select-default/style';

interface DateSelectProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'default';
  name?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
}

const DateSelect: FC<DateSelectProps> = ({
  className = '',
  variant,
  disabled = false,
  loading = false,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  label
}) => {
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

  return (
    <div className="mb-4">
      {label && <label className="block mb-2 text-sm font-bold text-gray-700">{label}</label>}
      <div className={`${inputClasses} flex items-center`}>
        <FaCalendarAlt className="my-auto mr-2" />
        <DatePicker
          selected={value}
          onChange={(date) => onChange(date as Date | null)}
          className="w-full px-2 py-1 bg-transparent border-none outline-none"
          placeholderText={placeholder}
          disabled={disabled || loading}
          required={required}
          name={name || "ispsml-date"}
        />
      </div>
    </div>
  );
};

export default DateSelect;