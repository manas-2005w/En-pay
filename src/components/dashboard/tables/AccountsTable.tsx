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
    id: 'ACC-001',
    name: 'Tech Solutions Ltd',
    type: 'Corporate',
    status: 'Active',
    openedDate: '2024-03-20',
  },
  {
    id: 'ACC-002',
    name: 'John Smith',
    type: 'Individual',
    status: 'Pending',
    openedDate: '2024-03-20',
  },
  {
    id: 'ACC-003',
    name: 'Global Innovations Inc',
    type: 'Corporate',
    status: 'Active',
    openedDate: '2024-03-19',
  },
];

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Account ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Opened Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((account) => (
          <TableRow key={account.id}>
            <TableCell>{account.id}</TableCell>
            <TableCell>{account.name}</TableCell>
            <TableCell>{account.type}</TableCell>
            <TableCell>{account.status}</TableCell>
            <TableCell>{account.openedDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}