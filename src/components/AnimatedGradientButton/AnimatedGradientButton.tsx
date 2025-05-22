import React, { ButtonHTMLAttributes, useState } from "react";
import "./AnimatedGradientButton.scss";

export interface AnimatedGradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Primary content of the button
   */
  children: React.ReactNode;

  /**
   * Button size variation
   */
  size?: "small" | "medium" | "large";

  /**
   * Variant determines the pre-defined color scheme
   */
  variant?: "primary" | "secondary" | "danger" | "success";

  /**
   * Disables the button
   */
  disabled?: boolean;
}

export const AnimatedGradientButton: React.FC<AnimatedGradientButtonProps> = ({
  children,
  className = "",
  size = "medium",
  variant = "primary",
  disabled = false,
  onClick,
  ...props
}) => {
  // State to track click animation
  const [isClicked, setIsClicked] = useState(false);

  // Handle click animation
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsClicked(true);

      // Remove animation class after animation completes
      setTimeout(() => {
        setIsClicked(false);
      }, 400); // Match animation duration

      // Call original onClick if provided
      if (onClick) {
        onClick(e);
      }
    }
  };

  // Combine classes based on props
  const buttonClasses = [
    "animated-gradient-button",
    size,
    variant,
    isClicked ? "clicked" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <span className="button-content">{children}</span>
    </button>
  );
};

export default AnimatedGradientButton;