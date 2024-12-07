import { Bell } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OverviewTab from './tabs/OverviewTab';
import PaymentsTab from './tabs/PaymentsTab';
import AccountsTab from './tabs/AccountsTab';
import KYCTab from './tabs/KYCTab';
import SecurityTab from './tabs/SecurityTab';
import UsersTab from './tabs/UsersTab';

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
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="kyc">KYC</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <PaymentsTab />
        </TabsContent>
        <TabsContent value="accounts" className="space-y-4">
          <AccountsTab />
        </TabsContent>
        <TabsContent value="kyc" className="space-y-4">
          <KYCTab />
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <SecurityTab />
        </TabsContent>
        <TabsContent value="users" className="space-y-4">
          <UsersTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}