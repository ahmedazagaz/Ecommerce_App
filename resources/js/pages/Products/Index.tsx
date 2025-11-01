import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
   
     {
        title: 'Products',
        href:  "#",
    },
      {
        title: 'List',
        href: "#",
    },
];

export default function Products() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <h1 className="text-2xl font-bold px-6 pt-6">Products</h1>

            <div className="flex justify-end mb-4 px-4 pt-4">
                <Button className="bg-black hover:bg-gray-900 text-white" onClick={() => {}}>
                    New product
                </Button>
            </div>

            <div className="overflow-x-auto bg-white shadow rounded-lg mx-6">
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
                        <Button variant="outline" size="sm">
                            <span className="material-icons">filter_list</span>
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline" size="sm">
                            <span className="material-icons">view_list</span>
                        </Button>
                    </div>
                </div>
                <table className="min-w-full text-sm text-left">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-semibold"><input type="checkbox" /></th>
                            <th className="px-6 py-3 font-semibold">Name</th>
                            <th className="px-6 py-3 font-semibold">Category</th>
                            <th className="px-6 py-3 font-semibold">Brand</th>
                            <th className="px-6 py-3 font-semibold">Price</th>
                            <th className="px-6 py-3 font-semibold">Is featured</th>
                            <th className="px-6 py-3 font-semibold">On sale</th>
                            <th className="px-6 py-3 font-semibold">In stock</th>
                            <th className="px-6 py-3 font-semibold">Is active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-6 py-3"><input type="checkbox" /></td>
                            <td className="px-6 py-3">One Plus 4K TV</td>
                            <td className="px-6 py-3">Television</td>
                            <td className="px-6 py-3">One Plus</td>
                            <td className="px-6 py-3">₹12,000.00</td>
                            <td className="px-6 py-3"><span className="text-green-600">&#10003;</span></td>
                            <td className="px-6 py-3"><span className="text-red-600">&#10007;</span></td>
                            <td className="px-6 py-3"><span className="text-green-600">&#10003;</span></td>
                            <td className="px-6 py-3"><span className="text-green-600">&#10003;</span></td>
                        </tr>
                        <tr>
                            <td colSpan={9} className="text-center py-4 text-gray-500">
                                Showing 11 to 11 of 11 results
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-600">
                <div>
                    <span>Showing 11 to 11 of 11 results</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>Per page</span>
                    <select className="border rounded px-2 py-1">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="flex gap-1">
                    <Button variant="outline" size="sm">&lt;</Button>
                    <Button variant="outline" size="sm">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">&gt;</Button>
                </div>
            </div>
        </AppLayout>
    );
}
