import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { MOCK_TASKS } from "../data";
import { Section } from "../components";
import { SearchIcon, PlusIcon, SunIcon } from "@/shared/icon";

const DashboardPage = () => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Filter by search before grouping
  const filtered = MOCK_TASKS.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  const upcoming = filtered.filter((t) => t.status === "upcoming");
  const overdue = filtered.filter((t) => t.status === "overdue");
  const completed = filtered.filter((t) => t.status === "completed");
  const total = MOCK_TASKS.length;
  const totalLabel = total === 1 ? `1 ${d.task}` : `${total} ${d.tasks}`;

  return (
    <div className="mx-auto w-full max-w-3xl px-2 sm:px-0">
      {/* ── Greeting ──────────────────────────────────────────────────── */}
      <p className="text-text-muted mb-5 flex items-center gap-2 text-sm">
        <SunIcon className="h-5 w-5 text-yellow-400" />
        {d.greeting}&nbsp;<span className="text-text font-medium">NA</span>
      </p>

      {/* ── Title row ─────────────────────────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Left: title + count */}
        <div>
          <h1 className="text-text text-3xl font-bold sm:text-4xl">
            {d.title}
          </h1>
          <span className="bg-surface-alt text-text-muted mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-medium">
            {totalLabel}
          </span>
        </div>

        {/* Right: search + new reminder */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          {/* Search */}
          <div className="border-border bg-bg text-text-muted flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm">
            <SearchIcon />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={d.searchPlaceholder}
              className="placeholder:text-text-muted min-w-0 flex-1 bg-transparent text-sm text-inherit outline-none sm:w-44"
            />
          </div>

          {/* New Reminder button */}
          <button
            onClick={() => navigate("/reminders/new")}
            className="bg-primary hover:bg-primary-hover flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow transition-colors"
          >
            <PlusIcon />
            <span className="whitespace-nowrap">{d.newReminder}</span>
          </button>
        </div>
      </div>

      {/* ── Task sections ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <Section label={d.sections.upcoming} tasks={upcoming} />
        <Section label={d.sections.overdue} tasks={overdue} overdue />
        <Section label={d.sections.completed} tasks={completed} />
      </div>
    </div>
  );
};

export default DashboardPage;
