import React, { useState } from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  (
    {
      className,
      type = "text",
      placeholder,
      value,
      onChange,
      error = false,
      label,
      passwordToggle = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <>
        {label && <label className={className}>{label}</label>}

        <div className="relative">
          <input
            type={type === "password" && showPassword ? "text" : type}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 mt-1",
              className,
              {
                "border-red-500": error,
              }
            )}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref}
            {...props}
          />
          {type === "password" && passwordToggle && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#71717A"
                    d="m15.446 12.646l-.796-.796q.225-1.31-.742-2.267q-.968-.958-2.258-.733l-.796-.796q.252-.104.526-.156q.274-.052.62-.052q1.529 0 2.591 1.063q1.063 1.062 1.063 2.591q0 .346-.052.64q-.052.293-.156.506m3.162 3.073l-.758-.669q.95-.725 1.688-1.588T20.8 11.5q-1.25-2.525-3.588-4.012T12 6q-.725 0-1.425.1T9.2 6.4l-.78-.78q.87-.33 1.772-.475Q11.094 5 12 5q3.256 0 5.956 1.79t3.967 4.71q-.536 1.206-1.359 2.266q-.822 1.06-1.956 1.953m1.115 5.42l-3.892-3.881q-.664.294-1.647.518Q13.2 18 12 18q-3.275 0-5.956-1.79T2.077 11.5q.583-1.325 1.536-2.482q.954-1.156 2.037-1.941l-2.788-2.8l.707-.708l16.862 16.862zM6.358 7.784q-.86.611-1.758 1.607T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.865 0 1.744-.168q.88-.169 1.321-.34l-1.63-1.642q-.237.133-.66.218q-.423.086-.775.086q-1.529 0-2.591-1.063Q8.346 13.03 8.346 11.5q0-.333.086-.746q.085-.414.218-.689zm4.354 4.353"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#71717A"
                    d="M12.005 15.154q1.524 0 2.586-1.067t1.063-2.592q0-1.524-1.067-2.586t-2.592-1.063q-1.524 0-2.586 1.067t-1.063 2.592q0 1.524 1.067 2.586t2.592 1.063M12 14.2q-1.125 0-1.912-.787T9.3 11.5q0-1.125.788-1.912T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2m.003 3.8q-3.25 0-5.922-1.768q-2.673-1.769-4.004-4.732q1.33-2.963 4.001-4.732Q8.748 5 11.998 5q3.248 0 5.921 1.768q2.673 1.769 4.004 4.732q-1.33 2.963-4.001 4.732Q15.252 18 12.002 18M12 17q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6Q9.175 6 6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
        {error ? <span className="text-sm text-red-500">{error}</span> : null}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
