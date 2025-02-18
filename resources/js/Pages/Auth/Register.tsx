import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-yellow-100">
            <Head title="Register" />

            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                {/* โลโก้ Richly */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/dino.webp"
                        alt="Richly Logo"
                        className="w-32 h-32"
                    />
                </div>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <Link
                            href={route('login')}
                            className="text-sm text-gray-600 underline hover:text-yellow-600"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton
                            className="ms-4 bg-yellow-500 text-white hover:bg-yellow-600 px-4 py-2 rounded-md transition-all"
                            disabled={processing}
                        >
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
