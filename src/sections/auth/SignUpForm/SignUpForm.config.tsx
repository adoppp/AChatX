import type {
    StepFormProps,
    StepPasswordProps,
    VerifyStepProps,
} from '@/sections/auth/SignUpForm/SignUpForm.types';

import { StepPassword } from '@/sections/auth/SignUpForm/steps/StepPassword/StepPassword';
import { StepPersonal } from '@/sections/auth/SignUpForm/steps/StepPersonal/StepPersonal';
import { StepVerify } from '@/sections/auth/SignUpForm/steps/StepVerify/StepVerify';
import { IconEmail, IconLockAnimated, IconUser } from '@/assets/svg';
import type { FC } from 'react';

export const STEPS = [1, 2, 3] as const;
export type Step = (typeof STEPS)[number];

export const stepComponents = {
    1: (props: StepFormProps) => <StepPersonal {...props} />,
    2: (props: StepPasswordProps) => <StepPassword {...props} />,
    3: (props: VerifyStepProps) => <StepVerify {...props} />,
} as const;

export const stepIcons = {
    1: <IconUser />,
    2: (isOpen: boolean) => <IconLockAnimated isOpen={isOpen} />,
    3: <IconEmail />,
} as const;

interface StepIconHandlerProps {
    step: Step,
    isActive?: boolean
}

export const StepIconHandler: FC<StepIconHandlerProps> = ({ step, isActive = false }) => {
    switch (step) {
        case 2:
            return stepIcons[step](isActive);

        default:
            return stepIcons[step];
    };
};