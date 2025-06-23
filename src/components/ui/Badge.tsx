import React from 'react';
import { clsx } from 'clsx';

// Your original Badge component (unchanged)
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
  };

  return (
    <span className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </span>
  );
};

// Professional showcase component
const BadgeShowcase = () => {
  const socialNetworkExamples = [
    // User profiles
    {
      category: "User Status",
      items: [
        { variant: 'success', size: 'sm', text: 'Online' },
        { variant: 'warning', size: 'sm', text: 'Away' },
        { variant: 'secondary', size: 'sm', text: 'Offline' },
        { variant: 'primary', size: 'sm', text: 'Premium' },
      ]
    },
    // Content categories
    {
      category: "Content Tags",
      items: [
        { variant: 'primary', size: 'md', text: 'Technology' },
        { variant: 'success', size: 'md', text: 'Design' },
        { variant: 'warning', size: 'md', text: 'Business' },
        { variant: 'secondary', size: 'md', text: 'Lifestyle' },
      ]
    },
    // Notifications
    {
      category: "Notifications",
      items: [
        { variant: 'danger', size: 'sm', text: 'Urgent' },
        { variant: 'warning', size: 'sm', text: 'Reminder' },
        { variant: 'primary', size: 'sm', text: 'New Message' },
        { variant: 'success', size: 'sm', text: 'Completed' },
      ]
    },
    // User roles
    {
      category: "User Roles",
      items: [
        { variant: 'danger', size: 'md', text: 'Admin' },
        { variant: 'warning', size: 'md', text: 'Moderator' },
        { variant: 'primary', size: 'md', text: 'Verified' },
        { variant: 'secondary', size: 'md', text: 'Member' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Badge Component
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perfect for social networks, user interfaces, and content management systems
          </p>
        </div>

        {/* Main showcase grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {socialNetworkExamples.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, itemIndex) => (
                  <Badge 
                    key={itemIndex}
                    variant={item.variant as any}
                    size={item.size as any}
                    className="transition-transform hover:scale-105"
                  >
                    {item.text}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social network mockup */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Social Network Demo</h2>
            <p className="text-blue-100">See your badges in action</p>
          </div>
          
          <div className="p-8">
            {/* User post mockup */}
            <div className="border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">John Doe</h4>
                    <Badge variant="primary" size="sm">Verified</Badge>
                    <Badge variant="success" size="sm">Online</Badge>
                    <Badge variant="warning" size="sm">Premium</Badge>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Just launched our new design system! Really excited to share this with the community.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" size="sm">Design</Badge>
                    <Badge variant="secondary" size="sm">UI/UX</Badge>
                    <Badge variant="success" size="sm">Open Source</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Another user post */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">Alex Smith</h4>
                    <Badge variant="danger" size="sm">Admin</Badge>
                    <Badge variant="secondary" size="sm">Away</Badge>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Remember to update your profiles before the platform migration this weekend.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="danger" size="sm">Urgent</Badge>
                    <Badge variant="warning" size="sm">Announcement</Badge>
                    <Badge variant="secondary" size="sm">System</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical specs */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-blue-300">Variants</h4>
              <p className="text-gray-300 text-sm">5 color variants: primary, secondary, success, warning, danger</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-green-300">Sizes</h4>
              <p className="text-gray-300 text-sm">2 sizes: small (sm) and medium (md) for different contexts</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-300">Customizable</h4>
              <p className="text-gray-300 text-sm">Accepts custom className for additional styling flexibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeShowcase;