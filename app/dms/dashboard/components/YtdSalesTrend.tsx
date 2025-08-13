// components/YtdSalesTrend.jsx
import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', actual: 9, target: 12 },
  { month: 'Feb', actual: 8.5, target: 12 },
  { month: 'Mar', actual: 9, target: 12 },
  { month: 'Apr', actual: 8, target: 12 },
  { month: 'May', actual: 8.5, target: 12 },
  { month: 'Jun', actual: 9, target: 12 },
  { month: 'July', actual: 8.8, target: 12 },
];

const YtdSalesTrend = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    {/* Header */}
    <h2 className="text-lg font-semibold text-gray-800 mb-6">YTD Sales Trend</h2>

    {/* Metric Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-50 rounded-lg p-4 text-center">
        <div className="text-sm text-gray-600">YTD Sales</div>
        <div className="text-2xl font-bold text-blue-700">₹1.3Cr</div>
      </div>
      <div className="bg-green-50 rounded-lg p-4 text-center">
        <div className="text-sm text-gray-600">YTD Achievement</div>
        <div className="text-2xl font-bold text-green-700">105.1%</div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 text-center">
        <div className="text-sm text-gray-600">Target</div>
        <div className="text-2xl font-bold text-gray-800">₹15.0L</div>
      </div>
    </div>

    {/* Chart */}
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 0, right: 24, bottom: 0, left: 0 }}>
          <CartesianGrid vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}L`}
            domain={[0, 'dataMax + 4']}
          />
          <Tooltip formatter={(value) => `${value}L`} />
          <Bar
            dataKey="actual"
            name="Actual"
            fill="#EBF0FF"
            barSize={44}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="target"
            name="Target"
            fill="#6F83B1"
            barSize={44}
            radius={[4, 4, 0, 0]}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default YtdSalesTrend;
