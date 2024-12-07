import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: '1', payments: 200, accounts: 100, kyc: 150 },
  { name: '2', payments: 300, accounts: 200, kyc: 250 },
  { name: '3', payments: 250, accounts: 180, kyc: 200 },
  { name: '4', payments: 400, accounts: 300, kyc: 350 },
  { name: '5', payments: 350, accounts: 250, kyc: 300 },
  { name: '6', payments: 500, accounts: 400, kyc: 450 },
  { name: '7', payments: 450, accounts: 350, kyc: 400 },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Payments
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Accounts
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[1].value}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        KYC
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[2].value}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="payments"
          stroke="hsl(var(--chart-1))"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="accounts"
          stroke="hsl(var(--chart-2))"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="kyc"
          stroke="hsl(var(--chart-3))"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}