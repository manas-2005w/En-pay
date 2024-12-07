import { Card } from '@/components/ui/card';
import { DataTable } from '../tables/KYCTable';

export default function KYCTab() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">KYC Verifications</h3>
      <DataTable />
    </Card>
  );
}