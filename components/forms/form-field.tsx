import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?:
    | "text"
    | "email"
    | "tel"
    | "search"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  errors?: string[];
  children?: ReactNode;
};

export function FormField({
  label,
  name,
  type = "text",
  defaultValue,
  placeholder,
  autoComplete,
  inputMode,
  required,
  minLength,
  maxLength,
  pattern,
  errors,
  children,
}: FormFieldProps) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {children ?? (
        <input
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400"
        />
      )}
      {errors?.length ? (
        <p className="mt-2 text-sm text-rose-600">{errors[0]}</p>
      ) : null}
    </label>
  );
}
