import React from 'react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Brands() {
    const [checked, setChecked] = React.useState(false);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Brands" />
            <div className="p-8">
                {/* Breadcrumb */}
                <div className="text-gray-500 text-sm mb-2 text-left">Brands &gt; List</div>
                {/* Title and New Brand Button */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Brands</h1>
                    <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded">New brand</button>
                </div>
                {/* Table Card */}
                <div className="bg-white rounded shadow p-4">
                    {/* Search Bar */}
                    <div className="flex items-center justify-end mb-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded px-3 py-2 w-64"
                        />
                    </div>
                    {/* Table */}
                    <table className="w-full text-left border-collapse">
                        <thead>
                                <tr className="border-b">
                                    <th className="py-2 px-2 font-medium text-gray-700">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() => setChecked(!checked)}
                                        />
                                    </th>
                                    <th className="py-2 px-2 font-medium text-gray-700">Name</th>
                                    <th className="py-2 px-2 font-medium text-gray-700">Image</th>
                                    <th className="py-2 px-2 font-medium text-gray-700">Slug</th>
                                    <th className="py-2 px-2 font-medium text-gray-700">Is active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Tableau vide */}
                            </tbody>
                        </table>
                        {/* Pagination & Results */}
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
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
                    </div>
                </div>
        </AppLayout>
    );
}
