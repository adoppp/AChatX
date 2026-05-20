import classNames from "classnames/bind";
import type { FC, ReactNode } from "react";

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';
import { Loader } from "@/components/Loader/Loader";
import { Personal } from "./steps/Personal/Personal";
import { Password } from "./steps/Password/Password";
import { Verify } from "./steps/Verify/Verify";
import { Header } from "./steps/Header/Header";
import { type Step as STEP } from "../SignUpForm.config";

interface StepProps {
    isLoading: boolean;
    header?: ReactNode;
    children: ReactNode;
};

const cn = classNames.bind(styles);

export const StepWrapper: FC<StepProps> = ({ isLoading, header, children }) => {
    return (
        <div className={cn('signup__container')}>
            {
                isLoading ? (
                    <div className={cn('signup__loader')}>
                        <Loader />
                    </div> 
                ) : (
                    <>
                        {header ?? header}
                        {children}
                    </>
                )
            }
        </div>
    );
};

export const Step = Object.assign(StepWrapper, {
    Personal,
    Password,
    Verify,
    Header
});
