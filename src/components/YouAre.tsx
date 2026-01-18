export default function YouAreSection() {
  const youAre = [
    "A start up",
    "A medium-sized company",
    "A large corporation",
    "An artist",
    "An independent worker",
    "A politician",
    "A country",
  ];

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      {/* Title */}
      
      {/* List */}
      <ul className="space-y-4">
        {youAre.map((item) => (
          <li
            key={item}
            className="flex items-center gap-4 text-white/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
