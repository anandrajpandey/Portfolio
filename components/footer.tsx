import { personal } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-4">
      <div className="panel flex flex-col gap-3 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {personal.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
