
import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Brands', href: '#' },
    { title: 'Create', href: '#' },
];

export default function CreateBrand() {
    const [form, setForm] = useState({
        name: '',
        slug: '',
        image: null,
        is_active: true,
    });
    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'checkbox') {
            setForm({ ...form, [name]: checked });
        } else if (type === 'file') {
            setForm({ ...form, [name]: files && files[0] ? files[0] : null });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', form.name);
        data.append('slug', form.slug);
        if (form.image) data.append('image', form.image);
        data.append('is_active', form.is_active ? '1' : '0');
        router.post('/brands', data, {
            onError: (err) => setErrors(err),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Brand" />
            <h1 className="text-2xl font-bold px-6 pt-6">Create Brand</h1>
            <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6 max-w-xl">
                {/* Name */}
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Brand name"
                        required
                    />
                    <InputError message={errors.name} />
                </div>

                {/* Slug */}
                <div className="grid gap-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                        id="slug"
                        name="slug"
                        value={form.slug}
                        onChange={handleChange}
                        placeholder="Slug"
                    />
                    <InputError message={errors.slug} />
                </div>

                {/* Image */}
                <div className="grid gap-2">
                    <Label htmlFor="image">Image</Label>
                    <Input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                    />
                    <InputError message={errors.image} />
                </div>

                {/* Is Active */}
                <div className="flex items-center gap-2">
                    <input
                        id="is_active"
                        name="is_active"
                        type="checkbox"
                        checked={form.is_active}
                        onChange={handleChange}
                    />
                    <Label htmlFor="is_active">Is active</Label>
                    <InputError message={errors.is_active} />
                </div>

                <div className="flex items-center gap-4">
                    <Button type="submit">Create</Button>
                </div>
            </form>
        </AppLayout>
    );
}
