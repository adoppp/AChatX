import type { FC } from "react";
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';
import { stepsData, type Step } from "../../../SignUpForm.config";
import { StepIconHandler } from "../../StepIconHandler";

interface HeaderProps {
    step: Step,
    isActive: boolean;
}

const cn = classNames.bind(styles);

export const Header: FC<HeaderProps> = ({ step, isActive }) => {

    return (
        <div className={cn('signup__description')}>
            <div className={cn('signup__description--icon', `signup__description--icon-${step}`)}><StepIconHandler step={step} isActive={isActive} /></div>
            <h2 className={cn('signup__description--title')}>{stepsData[step].header.title}</h2>
            <p className={cn('signup__description--description')}>
                {stepsData[step].header.description}
            </p>
        </div>
    );
};