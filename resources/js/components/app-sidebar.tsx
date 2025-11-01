import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, users,categories,brands,products,orders} from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen,Bell, Users,Tag ,LayoutGrid, Monitor, House, ShoppingCart } from 'lucide-react';
import AppLogo from './app-logo';



const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: House,
    },
    {
        title: 'Users',
        href: users(),
        icon: Users,
    },
    {
        title: 'Categories',
        href: categories(),
        icon: Tag,
    },
    {
        title: 'Brands',
        href: brands(),
        icon: Monitor,
    },
    {
        title: 'Products',
        href: products(),
        icon: LayoutGrid,
    },
    {
        title: 'Orders',
        href: orders(),
        icon: ShoppingCart,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Notifications',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Bell,
    },
  
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
