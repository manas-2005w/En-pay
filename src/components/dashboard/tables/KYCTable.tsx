import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data = [
  {
    id: 'KYC-001',
    customer: 'Tech Solutions Ltd',
    status: 'Verified',
    date: '2024-03-20',
    type: 'Business',
  },
  {
    id: 'KYC-002',
    customer: 'John Smith',
    status: 'Pending',
    date: '2024-03-20',
    type: 'Individual',
  },
  {
    id: 'KYC-003',
    customer: 'Global Innovations Inc',
    status: 'In Review',
    date: '2024-03-19',
    type: 'Business',
  },
];

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>KYC ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((kyc) => (
          <TableRow key={kyc.id}>
            <TableCell>{kyc.id}</TableCell>
            <TableCell>{kyc.customer}</TableCell>
            <TableCell>{kyc.status}</TableCell>
            <TableCell>{kyc.date}</TableCell>
            <TableCell>{kyc.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}