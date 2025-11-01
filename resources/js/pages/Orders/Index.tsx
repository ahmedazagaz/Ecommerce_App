import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
   
     {
        title: 'Orders',
        href:  "#",
    },
      {
        title: 'List',
        href: "#",
    },
];

export default function Orders() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Orders" />
            <h1 className="text-2xl font-bold px-6 pt-6">Orders</h1>

            {/* Summary Cards */}
            <div className="flex gap-6 px-6 pt-6">
                <div className="bg-white rounded-lg shadow p-6 flex-1">
                    <div className="text-gray-500">New Orders</div>
                    <div className="text-3xl font-bold mt-2">10</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1">
                    <div className="text-gray-500">Order Processing</div>
                    <div className="text-3xl font-bold mt-2">3</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1">
                    <div className="text-gray-500">Average price</div>
                    <div className="text-3xl font-bold mt-2">₹113,351.41</div>
                </div>
                <div className="flex items-start justify-end flex-1">
                    <Button className="bg-black hover:bg-gray-900 text-white mt-2">New order</Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 px-6 pt-8 pb-2 justify-center">
                {['All', 'New', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map(tab => (
                    <Button
                        key={tab}
                        variant={tab === 'Shipped' ? 'default' : 'outline'}
                        className={tab === 'Shipped' ? 'bg-orange-100 text-orange-600 font-semibold' : ''}
                        size="sm"
                    >
                        {tab}
                    </Button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white shadow rounded-lg mx-6">
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
                        <Button variant="outline" size="sm">
                            <span className="material-icons">view_list</span>
                        </Button>
                    </div>
                </div>
                <table className="min-w-full text-sm text-left">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-semibold"><input type="checkbox" /></th>
                            <th className="px-6 py-3 font-semibold">User</th>
                            <th className="px-6 py-3 font-semibold">Grand total</th>
                            <th className="px-6 py-3 font-semibold">Payment method</th>
                            <th className="px-6 py-3 font-semibold">Payment status</th>
                            <th className="px-6 py-3 font-semibold">Status</th>
                            <th className="px-6 py-3 font-semibold">Currency</th>
                            <th className="px-6 py-3 font-semibold">Shipping method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-6 py-3"><input type="checkbox" /></td>
                            <td className="px-6 py-3">Sahil Kumar</td>
                            <td className="px-6 py-3">₹85,000.00</td>
                            <td className="px-6 py-3">cod</td>
                            <td className="px-6 py-3">pending</td>
                            <td className="px-6 py-3">
                                <select className="border rounded px-2 py-1">
                                    <option>Shipped</option>
                                    <option>Processing</option>
                                    <option>Delivered</option>
                                    <option>Cancelled</option>
                                </select>
                            </td>
                            <td className="px-6 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">inr</span></td>
                            <td className="px-6 py-3">none</td>
                        </tr>
                        <tr>
                            <td colSpan={8} className="text-center py-4 text-gray-500">
                                Showing 1 result
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-600">
                <div>
                    <span>Showing 1 result</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>Per page</span>
                    <select className="border rounded px-2 py-1">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </AppLayout>
    );
}
