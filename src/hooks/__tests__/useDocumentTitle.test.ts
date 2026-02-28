import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useDocumentTitle } from "../useDocumentTitle";

beforeEach(() => {
  document.title = "";
});

describe("useDocumentTitle", () => {
  it("should set document.title with provided title and app name", () => {
    renderHook(() => useDocumentTitle("Dashboard"));
    expect(document.title).toBe("Dashboard | AfterMe");
  });

  it("should show only app name when no title is provided", () => {
    renderHook(() => useDocumentTitle());
    expect(document.title).toBe("AfterMe");
  });

  it("should show only app name when title is empty string", () => {
    renderHook(() => useDocumentTitle(""));
    expect(document.title).toBe("AfterMe");
  });

  it("should update when title changes", () => {
    const { rerender } = renderHook(
      ({ title }: { title?: string }) => useDocumentTitle(title),
      { initialProps: { title: "Page A" } },
    );

    expect(document.title).toBe("Page A | AfterMe");

    rerender({ title: "Page B" });
    expect(document.title).toBe("Page B | AfterMe");
  });
});
