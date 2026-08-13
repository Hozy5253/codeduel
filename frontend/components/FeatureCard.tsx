type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
      <div className="mb-5 text-3xl">{icon}</div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  );
}
