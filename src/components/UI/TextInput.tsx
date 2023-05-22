import React, { useState } from "react";

type Props = {
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  ref?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
};

const TextInput = React.forwardRef(
  (
    {
      className,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      value,
      disabled,
    }: Props,
    ref?: any
  ) => {
    const [text, setText] = useState(value);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      setText(value);
      onChange(value);
    };

    return (
      <input
        type="text"
        value={text}
        className={className}
        placeholder={placeholder}
        onChange={changeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
        ref={ref}
      />
    );
  }
);

export default TextInput;
