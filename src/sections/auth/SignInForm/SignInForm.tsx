import { useState, type FC } from "react";
import classNames from "classnames/bind";

import styles from '@/sections/auth/SignInForm/SignInForm.module.scss'
import { Input } from "@/ui/Input/Input";
import { InputPassword } from "@/ui/InputPassword/InputPassword";
import { Button } from "@/ui/Button/Button";

interface FormState {
    email: string,
    password: string
};

type Field = keyof FormState;

const cn = classNames.bind(styles);

const initialFormState: FormState = {
    email: '',
    password: ''
};

export const SignInForm: FC = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);

    const handleChange = (field: Field) => (value: string) => {
        setFormState(prev => ({...prev, [field]: value}))
    };

    return (
        <div className={cn('signin')}>
            <div className={cn('signin__container')}>
                <form>
                    <div className={cn('signin__inputs-container')}>
                        <Input
                            label="Email"
                            value={formState.email}
                            onChange={handleChange('email')}
                        />
                        <InputPassword 
                            label="Password"
                            value={formState.password}
                            onChange={handleChange('password')}
                        />
                    </div>
                    <div>
                        
                    </div>
                    <Button customClassName={cn('signin__button')}>
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
};