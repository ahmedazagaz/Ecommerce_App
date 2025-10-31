import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Categories', href: '#' },
  { title: 'Create', href: '#' },
];

export default function CreateCategory() {
  const [form, setForm] = useState({
    name: '',
    slug: '',
    image: null as File | null,
    is_active: '1', // default active
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') {
      setForm({ ...form, image: e.target.files ? e.target.files[0] : null });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('slug', form.slug);
    if (form.image) data.append('image', form.image);
    data.append('is_active', form.is_active);

    router.post('/categories', data, {
      onError: (err) => setErrors(err),
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Create Category" />
      <h1 className="text-2xl font-bold px-6 pt-6">Create Category</h1>

      <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6 max-w-md">
        {/* Name */}
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Category name"
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
            placeholder="Category slug"
            required
          />
          <InputError message={errors.slug} />
        </div>

        {/* Image */}
        <div className="grid gap-2">
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
          <InputError message={errors.image} />
        </div>

        {/* Is Active */}
        <div className="grid gap-2">
          <Label>Is Active</Label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="is_active"
                value="1"
                checked={form.is_active === '1'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="is_active"
                value="0"
                checked={form.is_active === '0'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <InputError message={errors.is_active} />
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit">Create</Button>
           <Button
              type="button"
              variant="outline"
              onClick={() => router.get('/categories')}
            >
              Cancel
            </Button>
        </div>
      </form>
    </AppLayout>
  );
}
