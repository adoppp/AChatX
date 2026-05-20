import classNames from 'classnames/bind';
import type { FC } from 'react';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';
import { Progress } from './Progress/Progress';
import { useSignUpForm } from './SignUpForm.hooks';
import { Loader } from '@/components/Loader/Loader';
import { Step, StepWrapper } from './Step/Step';

const cn = classNames.bind(styles);

export const SignUpForm: FC = () => {
    const {
        formState,
        errorState,
        step,
        maxStep,
        isLoading,
        isResended,
        timeLeft,
        isLoadingResend,
        ActiveStepComponent,
        StepHeader,
        resendEmail,
        canGoNext,
        _prev,
        _next,
        handleOnChange,
        handleSubmit,
    } = useSignUpForm();

    return (
        <div className={cn('signup')}>
            <div className={cn('signup__content')}>
                <Progress step={step} />

                <StepWrapper header={StepHeader} isLoading={isLoading}>
                    <ActiveStepComponent
                            formState={formState}
                            errorState={errorState}
                            step={step}
                            maxStep={maxStep}
                            isResended={isResended}
                            timeLeft={timeLeft}
                            isLoadingResend={isLoadingResend}
                            resendEmail={resendEmail}
                            _next={_next}
                            _prev={_prev}
                            canGoNext={canGoNext}
                            onChange={handleOnChange}
                            onSubmit={handleSubmit}
                        />
                </StepWrapper>
            </div>
        </div>
    );
};
