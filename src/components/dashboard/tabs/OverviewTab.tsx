import { Card } from '@/components/ui/card';
import { Overview } from '../charts/Overview';
import { RecentActivity } from '../widgets/RecentActivity';
import { StatusCards } from '../widgets/StatusCards';

export default function OverviewTab() {
  return (
    <>
      <StatusCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Overview</h3>
            </div>
            <Overview />
          </div>
        </Card>
        <Card className="col-span-3">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Recent Activity</h3>
            </div>
            <RecentActivity />
          </div>
        </Card>
      </div>
    </>
  );
}