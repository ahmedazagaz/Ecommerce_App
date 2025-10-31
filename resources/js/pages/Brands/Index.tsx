import React from 'react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
   
     {
        title: 'Brands',
        href:  "#",
    },
      {
        title: 'List',
        href: "#",
    },
];

export default function Brands() {
    const [checked, setChecked] = React.useState(false);
    // Add router import if not present
    // ...existing code...
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Brands" />
            <h1 className="text-2xl font-bold px-6 pt-6">List of Brands</h1>
            <div className="flex justify-end mb-4 px-4 pt-4">
                <Button onClick={() => router.get('/brands/create')}>New Brand</Button>
            </div>
            <div className="overflow-x-auto bg-white shadow rounded-lg mx-6">
                <table className="min-w-full text-sm text-left">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-semibold">
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                />
                            </th>
                            <th className="px-6 py-3 font-semibold">Name</th>
                            <th className="px-6 py-3 font-semibold">Image</th>
                            <th className="px-6 py-3 font-semibold">Slug</th>
                            <th className="px-6 py-3 font-semibold">Is active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                            <td className="px-6 py-3"></td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="text-center py-4 text-gray-500">
                                No brands found
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-600">
                <span>Showing 1 to 0 of 0 results</span>
                <div className="flex items-center gap-2">
                    <span>Per page</span>
                    <select className="border rounded px-2 py-1">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </AppLayout>
    );
}
