import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Button } from '@/ui/Button/Button';

import { IconReload } from '@/assets/svg';
import type { VerifyStepProps } from '../../Step.types';

const cn = classNames.bind(styles);

export const Verify: FC<VerifyStepProps> = ({ step, resendEmail, isResended, timeLeft, isLoadingResend }) => {
    const disabled = timeLeft > 0;

    return (
        <>
            <div className={cn('signup__button', `signup__button-${step}`)}>
                <Button onClick={resendEmail} rightIcon={<IconReload />} isLoading={isLoadingResend} disabled={disabled || isResended}>
                    Resend {timeLeft === 0 ? '' : timeLeft} 
                </Button>
            </div>
        </>
    );
};
