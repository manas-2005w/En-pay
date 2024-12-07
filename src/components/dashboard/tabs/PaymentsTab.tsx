import { Card } from '@/components/ui/card';
import { DataTable } from '../tables/PaymentsTable';

export default function PaymentsTab() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Payment Transactions</h3>
      <DataTable />
    </Card>
  );
}