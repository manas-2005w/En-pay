import { Card } from '@/components/ui/card';
import { DataTable } from '../tables/SecurityTable';

export default function SecurityTab() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Security Monitoring</h3>
      <DataTable />
    </Card>
  );
}