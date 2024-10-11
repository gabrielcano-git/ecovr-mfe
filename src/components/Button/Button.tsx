import React, { FC, ReactNode, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    as?: keyof JSX.IntrinsicElements;
    children: ReactNode;
    className?: string;
    // onClick?: (event: MouseEvent<HTMLElement>) => void;
    // type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    variants?: Array<'fit' | 'lg' | 'primary' | 'black'>;
}

const Button: FC<ButtonProps> = ({
    as: Tag = 'a',
    children,
    className = '',
    // onClick = () => {},
    // type = 'button',
    disabled = false,
    variants = ['primary']
}) => {
    const variantClasses = variants.map(variant => styles[`btn--${variant}`]).join(' ');

    return (
        <Tag
            className={`${styles['btn']} ${variantClasses} ${className}`}
            // onClick={onClick}
            // type={type}
            disabled={disabled}
        >
            {children}
        </Tag>
    );
};

export default Button;