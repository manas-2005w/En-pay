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
    id: 'USR-001',
    name: 'John Doe',
    role: 'Administrator',
    status: 'Active',
    lastLogin: '2024-03-20 10:15:23',
  },
  {
    id: 'USR-002',
    name: 'Jane Smith',
    role: 'Manager',
    status: 'Active',
    lastLogin: '2024-03-20 09:30:45',
  },
  {
    id: 'USR-003',
    name: 'Bob Johnson',
    role: 'Analyst',
    status: 'Inactive',
    lastLogin: '2024-03-19 15:20:10',
  },
];

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Login</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>{user.lastLogin}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}