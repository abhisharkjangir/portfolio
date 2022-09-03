import React from "react";
import classNames from "classnames";

const buttonKindMapping = {
    'primary': 'bg-uiPrimary text-uiWhite border-2 border-solid border-uiPrimary hover:opacity-70',
    'secondary': 'bg-uiWhite text-uiPrimary border-2 border-solid border-uiPrimary hover:opacity-70',
    'ghost': "bg-uiLight3 text-uiDark1 border-2 border-solid border-uiLight3 hover:opacity-70",
    'link': 'text-uiPrimary border-none bg-uiTransparent hover:opacity-70',
    'info': 'bg-uiInfo text-uiWhite border-2 border-solid border-uiInfo hover:opacity-70',
    'success': 'bg-uiSuccess text-uiWhite border-2 border-solid border-uiSuccess hover:opacity-70',
    'warning': 'bg-uiWarning text-uiWhite border-2 border-solid border-uiWarning hover:opacity-70',
    'danger': 'bg-uiError text-uiWhite border-2 border-solid border-uiError hover:opacity-70'
}

const buttonSizeMapping = {
    xlarge: "py-4 px-12 text-lg",
    large: "py-3.5 px-8 text-base",
    medium: "py-3 px-6 text-sm",
    small: "py-2 px-4 text-xs"
};


export interface ButtonProps {
    kind?: 'primary' | 'secondary' | 'ghost' | 'link' | 'success' | 'warning' | 'danger' | 'info' | 'icon'
    children?: JSX.Element
    label?: string,
    xlarge?: boolean,
    large?: boolean,
    medium?: boolean,
    small?: boolean,
    className?: string,
    iconRight?: JSX.Element,
    iconLeft?: JSX.Element,
    rounded?: boolean,
    roundedFull?: boolean,
    href?: string,
    disabled?: boolean,
    loading?: boolean,
    type?: 'submit' | 'button' | 'reset',
    onClick?: () => void,
    fullWidth?: boolean
}

const Button = (props: ButtonProps) => {
    const { kind = 'primary', children, label, medium, small, xlarge, className, iconRight, iconLeft, rounded, roundedFull, href, disabled, loading, type, onClick, fullWidth } = props;

    const buttonSizeClasses = medium && buttonSizeMapping['medium'] || small && buttonSizeMapping['small'] || xlarge && buttonSizeMapping['xlarge'] || buttonSizeMapping['large'];

    const buttonClasses = classNames(`no-underline ${buttonSizeClasses} ${buttonKindMapping[kind]} ${className}`, {
        rounded,
        'rounded-full': roundedFull,
        'cursor-pointer': !(disabled || loading),
        'cursor-not-allowed opacity-50': disabled,
        'cursor-wait': loading,
        'w-full': fullWidth
    });

    const CTA = href ? 'a' : 'button';

    return <CTA type={type || 'button'} onClick={onClick} className={buttonClasses} href={href}>
        {iconLeft ? <span className="mr-1"> {iconLeft}</span> : null}
        {loading ? 'loading...' : children || label}
        {iconRight ? <span className="ml-1"> {iconRight}</span> : null}
    </CTA>
}

export default Button;