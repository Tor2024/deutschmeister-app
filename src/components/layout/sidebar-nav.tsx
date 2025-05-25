'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, CheckSquare, BarChart3, Settings, GraduationCap } from 'lucide-react';
import { SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from '@/components/ui/sidebar';
import { NAV_LINKS, APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { useUserProgress } from '@/hooks/use-user-progress'; // Placeholder for actual hook

export default function SidebarNav() {
  const pathname = usePathname();
  // const { clearProgress } = useUserProgress(); // Assuming useUserProgress hook exists

  // const handleClearProgress = () => {
  //   if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие необратимо.')) {
  //     clearProgress();
  //     // Optionally, navigate to home or refresh
  //     window.location.href = '/';
  //   }
  // };

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-semibold text-primary">{APP_NAME}</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {NAV_LINKS.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                tooltip={{ children: item.label, side: 'right' }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        {/* 
          Placeholder for clear progress button. Needs confirmation dialog and actual logic.
          <Button variant="ghost" className="w-full justify-start" onClick={handleClearProgress}>
            <Settings className="mr-2 h-4 w-4" />
            Сбросить прогресс
          </Button> 
        */}
      </SidebarFooter>
    </>
  );
}
