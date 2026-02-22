/**
 * UserListPage — danh sách người dùng.
 * Skeleton: chỉ layout cơ bản.
 */
const UserListPage = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-2xl font-bold">Users</h2>
        {/* Add User button placeholder */}
      </div>

      {/* Table placeholder */}
      <div className="border-border bg-surface overflow-hidden rounded-xl border shadow-sm">
        <table className="divide-border min-w-full divide-y">
          <thead className="bg-surface-alt">
            <tr>
              {["Name", "Email", "Role", "Status", "Actions"].map((col) => (
                <th
                  key={col}
                  className="text-text-muted px-6 py-3 text-left text-xs font-medium tracking-wider uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            <tr>
              <td
                colSpan={5}
                className="text-text-muted px-6 py-8 text-center text-sm"
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
