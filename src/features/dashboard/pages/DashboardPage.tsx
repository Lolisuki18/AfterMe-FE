const DashboardPage = () => {
  return (
    <div>
      <h2 className="text-text mb-4 text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat cards placeholder */}
        {["Total Users", "Active Users", "New Today", "Revenue"].map(
          (title) => (
            <div
              key={title}
              className="border-border bg-surface rounded-xl border p-6 shadow-sm"
            >
              <p className="text-text-muted text-sm">{title}</p>
              <p className="text-text mt-1 text-2xl font-semibold">--</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
