import { Card } from '@/components/ui/card';
import { DataTable } from '../tables/UsersTable';

export default function UsersTab() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">User Management</h3>
      <DataTable />
    </Card>
  );
}