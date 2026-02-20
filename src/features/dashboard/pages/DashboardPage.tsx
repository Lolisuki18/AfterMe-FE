/**
 * DashboardPage — trang tổng quan.
 * Skeleton: chỉ layout cơ bản.
 */
const DashboardPage = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Dashboard</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat cards placeholder */}
        {["Total Users", "Active Users", "New Today", "Revenue"].map(
          (title) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-gray-500">{title}</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">--</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
