interface Props {
  current: number;
  total: number;
}

export default function Fortschrittsbalken({ current, total }: Props) {
  const pct = Math.round(((current + 1) / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-slate-500 mb-2">
        <span>
          Frage {current + 1} von {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
