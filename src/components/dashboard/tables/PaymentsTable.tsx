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
    id: 'PAY-001',
    amount: '$1,234.56',
    status: 'Completed',
    date: '2024-03-20',
    customer: 'Tech Solutions Ltd',
  },
  {
    id: 'PAY-002',
    amount: '$2,345.67',
    status: 'Pending',
    date: '2024-03-20',
    customer: 'Global Innovations Inc',
  },
  {
    id: 'PAY-003',
    amount: '$3,456.78',
    status: 'Failed',
    date: '2024-03-19',
    customer: 'Digital Systems Corp',
  },
];

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell>{payment.id}</TableCell>
            <TableCell>{payment.amount}</TableCell>
            <TableCell>{payment.status}</TableCell>
            <TableCell>{payment.date}</TableCell>
            <TableCell>{payment.customer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}