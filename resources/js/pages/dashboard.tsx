import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
   
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    
                     <div className="flex items-center justify-end mb-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded px-3 py-2 w-64"
                        />
                    </div>
                     {/* Table */}
            <div className="overflow-x-auto bg-white shadow rounded-lg mx-6">
                <table className="min-w-full text-sm text-left">
                    <thead className="border-b bg-gray-50">
                     <tr className="border-b">
                         
                    <th className="px-6 py-3 font-semibold">Orded ID</th>
                     <th className="px-6 py-3 font-semibold">Status</th>
                     <th className="px-6 py-3 font-semibold">Customer</th>
                     <th className="px-6 py-3 font-semibold">Payment Method</th>
                     <th className="px-6 py-3 font-semibold">Payment Status</th>
                     <th className="px-6 py-3 font-semibold">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  className="border-b hover:bg-gray-100">
                     <td className="px-6 py-3"></td>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3"></td>
                     </tr>
                      <tr>
                     <td colSpan={3} className="text-center py-4 text-gray-500">
                      No users found
                    </td>
                     </tr>  
                    </tbody>
                </table>
            </div>
                </div>
            </div>
        </AppLayout>
    );
}
