import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt="Avatar" />
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
          </div>
          <div className="ml-auto font-medium">{activity.time}</div>
        </div>
      ))}
    </div>
  );
}

const activities = [
  {
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces',
    initials: 'JD',
    title: 'New Account Created',
    description: 'Corporate account for Tech Solutions Ltd.',
    time: '2m ago',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces',
    initials: 'SD',
    title: 'KYC Verification Complete',
    description: 'Individual account verification successful',
    time: '4m ago',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces',
    initials: 'AS',
    title: 'Payment Processed',
    description: 'Large transaction processed successfully',
    time: '5m ago',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces',
    initials: 'RK',
    title: 'Security Alert',
    description: 'Failed login attempt detected',
    time: '9m ago',
  },
];