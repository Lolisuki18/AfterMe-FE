interface QuickReplyChipsProps {
  chips: string[];
  onSelect: (chip: string) => void;
}

const QuickReplyChips = ({ chips, onSelect }: QuickReplyChipsProps) => (
  <div className="flex flex-wrap justify-center gap-2 px-4">
    {chips.map((chip) => (
      <button
        key={chip}
        type="button"
        onClick={() => onSelect(chip)}
        className="border-primary/40 text-primary hover:bg-primary rounded-full border px-4 py-2 text-sm font-medium transition hover:text-white"
      >
        {chip}
      </button>
    ))}
  </div>
);

export default QuickReplyChips;
