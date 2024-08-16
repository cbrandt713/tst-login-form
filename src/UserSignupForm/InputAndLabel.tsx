import React, { SyntheticEvent } from "react";

interface InputAndLabelProps {
  id: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function InputAndLabel({
  id,
  type = "text",
  label,
  value,
  onChange,
  className,
}: InputAndLabelProps): JSX.Element {
  return (
    <div>
      <label className={className} htmlFor={id}>
        {label}
      </label>
      <input
        className={className}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(getValueFromEvent(e))}
      />
    </div>
  );
}

function getValueFromEvent(event: SyntheticEvent<HTMLInputElement>): string {
  return event.currentTarget.value;
}
