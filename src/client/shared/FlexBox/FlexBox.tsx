import React from "react";
import classNames from "classnames";

export interface FlexBoxProps {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    wrap?: 'wrap' | 'no-wrap' | 'wrap-reverse';
    justifyContent?: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
    justifyItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch',
    alignContent?: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
    alignItems?: 'auto' | 'start' | 'end' | 'center' | 'stretch',
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch',
    flex?: '1' | 'auto' | 'initial' | 'none';
    grow?: 'grow-0' | 'grow';
    shrink?: 'shrink-0' | 'shrink';
    order?: string,
    className?: string,
    placeContent: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
    placeItems: 'auto' | 'start' | 'end' | 'center' | 'stretch';
    placeSelf: 'auto' | 'start' | 'end' | 'center' | 'stretch';
}

/**
 * @Note :Adding below classes in comments, so that tailwind can process these 
 * @direction flex-row	flex-row-reverse flex-col flex-col-reverse
 * @flex flex-1 flex-auto flex-initial flex-none
 * @wrap flex-wrap flex-wrap-reverse flex-no-wrap
 * @grow flex-grow-0 flex-grow
 * @shrink flex-shrink-0 flex-shrink
 * @justifyContent justify-start justify-end justify-center justify-between justify-around justify-evenly
 * @justifyItems justify-items-auto justify-items-start justify-items-end justify-items-center justify-items-stretch
 * @alignItems items-start items-center items-end items-auto items-stretch
 */

const FlexBox = ({ children, className, direction, wrap, justifyContent, alignItems, flex, grow, shrink }: FlexBoxProps) => {

    const classes = classNames('flex', {
        [`flex-${flex}`]: flex,
        [`flex-${direction}`]: direction,
        [`flex-${wrap}`]: wrap,
        [`flex-${grow}`]: grow,
        [`flex-${shrink}`]: shrink,
        [`justify-${justifyContent}`]: justifyContent,
        [`items-${alignItems}`]: alignItems,
    }, className
    );

    return <div className={classes}>
        {children}
    </div>
}

export default FlexBox;