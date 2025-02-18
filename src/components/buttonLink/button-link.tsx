import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export default function ButtonLink({
    href,
    leftIcon,
    rightIcon,
    children,
    className = "",
    onClick,
    ...props
}: ButtonLinkProps) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
        if (href) {
            window.location.href = href;
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center gap-2 lg:py-5 py-4  text-white uppercase transition-all text-sm lg:text-normal bg-black border-2 border-black lg:px-7 px-6 hover:bg-white hover:text-black ${className}`}
            {...props}
        >
            {leftIcon && <span className="my-auto">{leftIcon}</span>}
            <span className="my-auto">{children}</span>
            {rightIcon && <span className="flex my-auto ">{rightIcon}</span>}
        </button>
    );
}
