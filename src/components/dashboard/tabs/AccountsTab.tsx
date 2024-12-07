import { Card } from '@/components/ui/card';
import { DataTable } from '../tables/AccountsTable';

export default function AccountsTab() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Account Management</h3>
      <DataTable />
    </Card>
  );
}