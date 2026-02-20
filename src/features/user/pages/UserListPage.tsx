/**
 * UserListPage — danh sách người dùng.
 * Skeleton: chỉ layout cơ bản.
 */
const UserListPage = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Users</h2>
        {/* Add User button placeholder */}
      </div>

      {/* Table placeholder */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Name", "Email", "Role", "Status", "Actions"].map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td
                colSpan={5}
                className="px-6 py-8 text-center text-sm text-gray-500"
              >
                No data yet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListPage;
