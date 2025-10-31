import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import React from 'react';
const breadcrumbs: BreadcrumbItem[] = [
   
     {
        title: 'Categories',
        href:  "#",
    },
      {
        title: 'List',
        href: "#",
    },
];

export default function Categories() {
     const [checked, setChecked] = React.useState(false);
    return (
      <AppLayout breadcrumbs={breadcrumbs}>
                          <Head title="Categories" />
                           {/* Titre de la page */}
            <h1 className="text-2xl font-bold px-6 pt-6">List of Categories</h1>

                          <div className="flex justify-end mb-4 px-4 pt-4">
                             
                               <Button onClick={() => router.get('/categories/Create')}>New Categorie</Button>

                          </div>
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
                     <tr>
                         <th className="py-2 px-2 font-medium text-gray-700">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() => setChecked(!checked)}
                                        />
                                    </th>
                    <th className="px-6 py-3 font-semibold">Name</th>
                     <th className="px-6 py-3 font-semibold">image</th>
                     <th className="px-6 py-3 font-semibold">Slug</th>
                      <th className="px-6 py-3 font-semibold">is active</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  className="border-b hover:bg-gray-100">
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

            {/* Footer Pagination */}
            <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-600">
              
                <div className="flex items-center gap-2">
                    <span>Per page</span>
                    <select className="border rounded px-2 py-1">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                </div>
            </div>
                      </AppLayout>
        );}
