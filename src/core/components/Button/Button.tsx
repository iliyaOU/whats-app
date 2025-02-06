import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
};

function Button({
  children,
  className,
  ...buttonProps
}: PropsWithChildren<Props & ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
