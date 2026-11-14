import Link from 'next/link';
import { CheckCircle2, ArrowRight, Eye } from 'lucide-react';

const visionPoints = [
  'To become a leading force in African agribusiness.',
  'To promote sustainable and responsible farming practices.',
  'To deliver high-quality, affordable agricultural products.',
  'To empower communities through job creation and innovation.',
  'To contribute to food security and economic growth.',
];

export default function Vision() {
  return (
    <div className="bg-[#FAF7F0] border border-[#e1bb3f]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="inline-flex items-center gap-2 bg-[#183113] text-[#e1bb3f] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Future Outlook</span>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[#183113]">Our Vision</h3>
      <ul className="space-y-3 text-[#183113]/90">
        {visionPoints.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <CheckCircle2
              className="w-5 h-5 text-[#3c6326] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 text-[#183113] hover:text-[#3c6326] font-bold mt-6 transition-colors"
      >
        <span>Find out more</span>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
  );
}