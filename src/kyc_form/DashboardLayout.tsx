import React from 'react';
import { Bell } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import OverviewTab from './dashboard/tabs/OverviewTab';
import PaymentsTab from './dashboard/tabs/PaymentsTab';

export default function DashboardLayout() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-primary" />
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <PaymentsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
