import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Users', href: '#' },
  { title: 'Create', href: '#' },
];

export default function CreateUser() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    email_verified_at: '',
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.post('/users', form, {
      onError: (err) => setErrors(err),
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Create User" />

      <h1 className="text-2xl font-bold px-6 pt-6">Create User</h1>

      <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6 max-w-md">
        {/* Name */}
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            required
          />
          <InputError message={errors.name} />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />
          <InputError message={errors.email} />
        </div>

        {/* Password */}
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <InputError message={errors.password} />
        </div>

        {/* Email Verified At */}
        <div className="grid gap-2">
          <Label htmlFor="email_verified_at">Email Verified At</Label>
          <Input
            id="email_verified_at"
            type="datetime-local"
            name="email_verified_at"
            value={form.email_verified_at}
            onChange={handleChange}
          />
          <InputError message={errors.email_verified_at} />
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </AppLayout>
  );
}
