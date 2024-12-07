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
    id: 'SEC-001',
    type: 'Failed Login',
    ip: '192.168.1.1',
    date: '2024-03-20 10:15:23',
    status: 'Resolved',
  },
  {
    id: 'SEC-002',
    type: 'Suspicious Activity',
    ip: '192.168.1.2',
    date: '2024-03-20 09:30:45',
    status: 'Under Investigation',
  },
  {
    id: 'SEC-003',
    type: 'Multiple Login Attempts',
    ip: '192.168.1.3',
    date: '2024-03-19 15:20:10',
    status: 'Resolved',
  },
];

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Alert ID</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>IP Address</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell>{alert.id}</TableCell>
            <TableCell>{alert.type}</TableCell>
            <TableCell>{alert.ip}</TableCell>
            <TableCell>{alert.date}</TableCell>
            <TableCell>{alert.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}