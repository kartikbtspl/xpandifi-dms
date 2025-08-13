// components/DashboardMetrics.jsx
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CheckCircle, FileText } from "lucide-react";

const data = [
  { name: "John Doe", lines: 50000, coverage: 75 },
  { name: "Jane Smith", lines: 60000, coverage: 85 },
  { name: "Mike Johnson", lines: 30000, coverage: 65 },
  { name: "Sarah Wilson", lines: 45000, coverage: 80 },
  { name: "David Brown", lines: 55000, coverage: 90 },
];

const brandData = [
  {
    rank: 1,
    name: "Brand Gamma",
    utilization: 95,
    value: "₹110K",
    color: "green",
  },
  {
    rank: 2,
    name: "Brand Zeta",
    utilization: 95,
    value: "₹80K",
    color: "green",
  },
  {
    rank: 3,
    name: "Brand Alpha",
    utilization: 85,
    value: "₹100K",
    color: "blue",
  },
  {
    rank: 4,
    name: "Brand Beta",
    utilization: 80,
    value: "₹150K",
    color: "blue",
  },
  {
    rank: 5,
    name: "Brand Delta",
    utilization: 80,
    value: "₹120K",
    color: "blue",
  },
];

const DashboardMetrics = () => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto">
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Lines Sold & Coverage */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Lines Sold & Coverage
          </h2>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center bg-gray-100 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-800">19.1K</div>
              <div className="text-sm text-gray-600">Total Lines</div>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-800">85.2%</div>
              <div className="text-sm text-gray-600">Avg Coverage</div>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-800">7.0</div>
              <div className="text-sm text-gray-600">Avg/Outlet</div>
            </div>
          </div>

          {/* Combined Bar + Line Chart */}
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: "#475569" }} />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tick={{ fill: "#475569" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: "#475569" }}
                />
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
                <Bar
                  yAxisId="left"
                  dataKey="lines"
                  fill="#bfdbfe"
                  barSize={20}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="coverage"
                  stroke="#1e40af"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#1e40af" }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SRN Status */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            SRN (Stock Return Note) Status
          </h2>
          <div className="mb-4 p-5 rounded-lg flex justify-between items-center bg-gray-100">
            <div className="text-sm text-gray-600 mb-1">
              <p>Total SRN Value</p>
              <p className="text-2xl font-bold text-gray-800">₹30,000</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                5% SRN Rate
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium mt-2">Full SRNs</div>
                  <div className="text-2xl font-bold text-blue-800">20</div>
                  <div className="text-sm">Invoices</div>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium mt-2">Partial SRNs</div>
                  <div className="text-2xl font-bold text-green-800">10</div>
                  <div className="text-sm">Invoices</div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Program-Wise Scheme Utilization */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Program-Wise Scheme Utilization
          </h2>

          {/* Metrics */}
          <div className="flex justify-between gap-5 mb-6">
            <div className="text-center bg-gray-100 w-full rounded-lg p-4">
              <div className="text-lg font-bold text-gray-800">₹24.0L</div>
              <div className="text-xs text-gray-600">Total Allocated</div>
            </div>
            <div className="text-center bg-green-50 w-full rounded-lg p-2">
              <div className="text-lg font-bold text-blue-600">₹20.0L</div>
              <div className="text-xs text-gray-600">Total Utilized</div>
            </div>
            <div className="text-center bg-blue-50 w-full rounded-lg p-2">
              <div className="text-lg font-bold text-gray-800">83.3%</div>
              <div className="text-xs text-gray-600">Overall Utilization</div>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Summer Bonanza
                </span>
                <span className="text-sm font-bold text-gray-800">85%</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                ₹425K utilized of of ₹24.0L
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#445E94] h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Monsoon Special
                </span>
                <span className="text-sm font-bold text-green-600">90%</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                ₹425K utilized of of ₹24.0L
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#445E94] h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Festival Offer
                </span>
                <span className="text-sm font-bold text-gray-800">85%</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                ₹425K utilized of of ₹24.0L
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#445E94] h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Year End Sale
                </span>
                <span className="text-sm font-bold text-gray-800">85%</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                ₹425K utilized of of ₹24.0L
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#445E94] h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Brand-Wise Scheme Utilization */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Top 5 Brand-Wise Scheme Utilization
          </h2>
          {/* Metric Cards */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="font-bold text-blue-700">86.0%</div>
              <div className="text-sm font-medium text-gray-700">
                Average Utilization
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="font-bold text-green-600">₹5.6L</div>
              <div className="text-sm font-medium text-gray-700">
                Total Scheme Value
              </div>
            </div>
          </div>

          {/* Table */}
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 bg-gray-50 rounded-tl-lg">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                  Brand Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                  Utilization %
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 bg-gray-50 rounded-tr-lg">
                  Scheme Value
                </th>
              </tr>
            </thead>
            <tbody>
              {brandData.map((brand) => (
                <tr
                  key={brand.rank}
                  className="bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  {/* Rank Circle */}
                  <td className="px-4 py-4">
                    <span className="flex items-center justify-center w-6 h-6 text-xs font-semibold">
                      {brand.rank}
                    </span>
                  </td>

                  {/* Brand Name */}
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {brand.name}
                  </td>

                  {/* Utilization Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        brand.color === "green"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {brand.utilization}%
                    </span>
                  </td>

                  {/* Scheme Value */}
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {brand.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardMetrics;
