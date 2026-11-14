"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  Fish,
  Sprout,
  Handshake,
  GraduationCap,
  HelpCircle,
  AlertCircle,
  Sparkles,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

type InquiryCategory =
  | "Fresh Catfish Order (Wholesale/Retail)"
  | "Catfish Fingerlings"
  | "Agribusiness Partnership / Grant"
  | "Farm Training & Visit"
  | "General Inquiry";

interface CategoryOption {
  label: InquiryCategory;
  shortLabel: string;
  placeholderVolume: string;
  showVolume: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const categoryOptions: CategoryOption[] = [
  {
    label: "Fresh Catfish Order (Wholesale/Retail)",
    shortLabel: "Fresh Catfish Order",
    placeholderVolume: "e.g., 25 kg per week / 10 whole fish",
    showVolume: true,
    icon: Fish,
  },
  {
    label: "Catfish Fingerlings",
    shortLabel: "Catfish Fingerlings",
    placeholderVolume: "e.g., 2,000 fingerlings for stocking",
    showVolume: true,
    icon: Sprout,
  },
  {
    label: "Agribusiness Partnership / Grant",
    shortLabel: "Partnership / Grant",
    placeholderVolume: "e.g., Outgrower program / Value addition",
    showVolume: false,
    icon: Handshake,
  },
  {
    label: "Farm Training & Visit",
    shortLabel: "Farm Training & Visit",
    placeholderVolume: "e.g., Group of 8 farmers / Individual tour",
    showVolume: true,
    icon: GraduationCap,
  },
  {
    label: "General Inquiry",
    shortLabel: "General Inquiry",
    placeholderVolume: "Optional quantity or scope",
    showVolume: false,
    icon: HelpCircle,
  },
];

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    category: "Orders & MOQ",
    question: "What are the minimum order quantities for fresh catfish?",
    answer:
      "We serve both individual households and commercial wholesale buyers! Retail orders start from as little as 2 kg of fresh, clean-water African catfish, while wholesale pricing applies to orders of 20 kg and above for hotels, restaurants, schools, and fish markets.",
  },
  {
    category: "Delivery & Logistics",
    question: "Do you offer delivery across Kampala and Wakiso District?",
    answer:
      "Yes. From our aquaculture production hub in Gayaza, Wakiso District, we coordinate fast, hygienic same-day or scheduled next-day deliveries across Gayaza, Kampala metropolitan area, and surrounding towns in Wakiso.",
  },
  {
    category: "Seed Stock",
    question: "Are high-grade catfish fingerlings available year-round?",
    answer:
      "We breed and grade vigorous, fast-growing African catfish fingerlings raised in our solar-powered concrete tank system. Because batches are scheduled to guarantee uniform size and survival rates, we recommend booking 1–2 weeks in advance for large stocking orders.",
  },
  {
    category: "Training & Tours",
    question: "How can I book an aquaculture training session or farm visit?",
    answer:
      "We welcome aspiring fish farmers, youth groups, NGOs, and academic institutions to our Gayaza farm for hands-on training in concrete tank construction, solar water circulation, feed management, and catfish breeding. Select 'Farm Training & Visit' in the inquiry form above to schedule a date.",
  },
  {
    category: "Partnerships",
    question: "How can development partners or investors collaborate with Golden Basket?",
    answer:
      "We actively partner with agribusiness programs, impact investors, and institutions to scale our Smart Farm Agri-Empowerment Centre vision — covering value addition (smoked/filleted fish), outgrower farmer networks, and community training across Wakiso and Kiryandongo Districts.",
  },
];

interface FormDataState {
  category: InquiryCategory;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  estimatedVolume: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormDataState>({
    category: "Fresh Catfish Order (Wholesale/Retail)",
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    estimatedVolume: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormDataState | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeCategoryConfig =
    categoryOptions.find((c) => c.label === formData.category) || categoryOptions[0];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = "Please provide a valid phone or WhatsApp number.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message =
        "Please include a brief message (at least 10 characters) so we can assist you properly.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 500);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setFormData({
      category: "Fresh Catfish Order (Wholesale/Retail)",
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      estimatedVolume: "",
      message: "",
    });
  };

  const buildWhatsAppUrl = (data: FormDataState) => {
    const lines = [
      `Hello Golden Basket Ltd!`,
      `*Inquiry Type:* ${data.category}`,
      `*Name:* ${data.fullName}`,
      `*Phone:* ${data.phone}`,
      `*Email:* ${data.email}`,
      data.organization ? `*Organization / Location:* ${data.organization}` : "",
      data.estimatedVolume ? `*Estimated Volume / Scope:* ${data.estimatedVolume}` : "",
      `*Message:* ${data.message}`,
    ].filter(Boolean);
    return `https://wa.me/256772421174?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const buildMailtoUrl = (data: FormDataState) => {
    const subject = `[Golden Basket Inquiry] ${data.category} - ${data.fullName}`;
    const body = [
      `Category: ${data.category}`,
      `Full Name: ${data.fullName}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Email: ${data.email}`,
      `Organization / Location: ${data.organization || "N/A"}`,
      `Estimated Volume / Scope: ${data.estimatedVolume || "N/A"}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n");
    return `mailto:info@goldenbasket.ug?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="bg-[#F5F1E8] text-[#183113]">
      {/* Hero Banner */}
      <section className="bg-[#183113] text-white px-6 lg:px-16 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="/Images/patterns/about_hero_pattern.png"
            alt="Golden Basket Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#183113]/95 via-[#183113]/85 to-[#204E36]/90 z-0" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6B81A]/20 border border-[#F6B81A]/40 text-[#F6B81A] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Orders • Fingerlings • Training • Partnerships</span>
          </div>

          <h1 className="text-[#F6B81A] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Connect With Golden Basket Ltd
          </h1>

          <p className="text-white/95 text-lg sm:text-xl leading-relaxed mb-8">
            Whether you are ordering fresh clean-water African catfish, stocking your ponds with
            vigorous fingerlings, scheduling farm training, or exploring an agribusiness
            partnership, our team in Gayaza and Bweyale is ready to serve you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/256772421174"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#F6B81A] hover:bg-[#e0a612] text-[#183113] font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Quick Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+256772421174"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-6 py-3.5 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-[#F6B81A]" />
              <span>Call +256 772 421174</span>
            </a>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels Grid */}
      <section className="px-6 lg:px-16 -mt-10 relative z-20 mb-16">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Farm & Head Office */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#183113]/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#183113] text-[#F6B81A] flex items-center justify-center mb-4 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#204E36]">
                Locations in Uganda
              </span>
              <h2 className="text-xl font-extrabold text-[#183113] mt-1 mb-3">
                Farm & Head Office
              </h2>
              <ul className="space-y-2.5 text-sm text-[#183113]/90">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F6B81A] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="font-bold">Aquaculture Hub:</strong> Gayaza, Wakiso District,
                    Uganda
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#204E36] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="font-bold">Founding Farm:</strong> Bweyale, Kiryandongo
                    District, Uganda
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-xs font-semibold text-[#204E36] mt-4 pt-3 border-t border-[#183113]/10">
              Farm visits welcome by appointment
            </p>
          </div>

          {/* Phone & WhatsApp */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#183113]/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#183113] text-[#F6B81A] flex items-center justify-center mb-4 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#204E36]">
                Direct Lines
              </span>
              <h2 className="text-xl font-extrabold text-[#183113] mt-1 mb-3">
                Phone & WhatsApp
              </h2>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+256772421174"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#F5F1E8] hover:bg-[#FBF3DC] text-[#183113] font-bold transition-colors"
                >
                  <span>+256 772 421174</span>
                  <span className="text-xs bg-[#183113] text-[#F6B81A] px-2 py-0.5 rounded">
                    Call
                  </span>
                </a>
                <a
                  href="tel:+256756718377"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#F5F1E8] hover:bg-[#FBF3DC] text-[#183113] font-bold transition-colors"
                >
                  <span>+256 756 718377</span>
                  <span className="text-xs bg-[#183113] text-[#F6B81A] px-2 py-0.5 rounded">
                    Call
                  </span>
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/256772421174"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#204E36] hover:bg-[#183113] text-white text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#F6B81A]" />
              <span>Chat on WhatsApp (+256 772 421174)</span>
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#183113]/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#183113] text-[#F6B81A] flex items-center justify-center mb-4 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#204E36]">
                Official Correspondence
              </span>
              <h2 className="text-xl font-extrabold text-[#183113] mt-1 mb-3">
                Email Us
              </h2>
              <p className="text-sm text-[#183113]/85 mb-4 leading-relaxed">
                For wholesale supply contracts, institutional partnerships, grants, or formal
                inquiries:
              </p>
              <a
                href="mailto:info@goldenbasket.ug"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#204E36] hover:text-[#183113] break-all underline decoration-[#F6B81A] decoration-2 underline-offset-4"
              >
                <span>info@goldenbasket.ug</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
            <p className="text-xs font-semibold text-[#204E36] mt-4 pt-3 border-t border-[#183113]/10">
              We respond within 24 business hours
            </p>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#183113]/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#183113] text-[#F6B81A] flex items-center justify-center mb-4 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#204E36]">
                Operating Schedule
              </span>
              <h2 className="text-xl font-extrabold text-[#183113] mt-1 mb-3">
                Business Hours
              </h2>
              <div className="space-y-2.5 text-sm text-[#183113]">
                <div className="flex items-center justify-between py-1.5 border-b border-[#183113]/10">
                  <span className="font-semibold">Monday – Saturday</span>
                  <span className="font-extrabold text-[#204E36]">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FBF3DC] text-[#183113]">
                    Pre-booked Orders
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs font-semibold text-[#204E36] mt-4 pt-3 border-t border-[#183113]/10">
              East Africa Time (EAT • UTC+3)
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Inquiry & Order Form Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Context & Why Partner */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#183113] text-white rounded-3xl p-8 lg:p-10 shadow-xl border border-[#F6B81A]/30">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#F6B81A] text-[#183113] text-xs font-extrabold uppercase tracking-wider mb-4">
                Fast Order & Inquiry Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                How Can Golden Basket Serve You Today?
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6">
                Select your inquiry category and tell us what you need. Our sales and farm
                management team will prepare a tailored quote or schedule your visit right away.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 bg-white/10 rounded-2xl p-4 border border-white/10">
                  <Fish className="w-6 h-6 text-[#F6B81A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Wholesale & Retail Fresh Catfish
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                      Harvested fresh from our solar-powered concrete tanks in Gayaza for
                      households, hotels, restaurants, and markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/10 rounded-2xl p-4 border border-white/10">
                  <Sprout className="w-6 h-6 text-[#F6B81A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Quality Graded Fingerlings
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                      High-survival, fast-growing catfish seed stock accompanied by practical
                      feeding and water-management guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/10 rounded-2xl p-4 border border-white/10">
                  <Handshake className="w-6 h-6 text-[#F6B81A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Smart Farm Agri-Empowerment Partnerships
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                      Collaborate with us on community training, agro-processing, outgrower
                      networks, and sustainable food security initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Confirmation State */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#183113]/10">
              {submittedData ? (
                <div className="py-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#204E36] text-[#F6B81A] flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#FBF3DC] text-[#183113] text-xs font-extrabold uppercase tracking-wider mb-2">
                    Inquiry Logged Ready for Dispatch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#183113] mb-3">
                    Thank You, {submittedData.fullName}!
                  </h3>
                  <p className="text-[#183113]/85 text-sm sm:text-base max-w-xl mx-auto mb-6">
                    We have prepared your{" "}
                    <strong className="font-bold text-[#183113]">
                      {submittedData.category}
                    </strong>{" "}
                    details. For the fastest response from our Gayaza & Bweyale team, you can also
                    send this pre-filled summary directly via WhatsApp or Email below:
                  </p>

                  {/* Summary Card */}
                  <div className="bg-[#F5F1E8] rounded-2xl p-5 text-left max-w-xl mx-auto mb-8 border border-[#183113]/10 space-y-2 text-sm">
                    <div className="flex flex-wrap justify-between gap-2 border-b border-[#183113]/10 pb-2">
                      <span className="font-semibold text-[#204E36]">Category:</span>
                      <span className="font-bold text-[#183113]">{submittedData.category}</span>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2 border-b border-[#183113]/10 pb-2">
                      <span className="font-semibold text-[#204E36]">Contact:</span>
                      <span className="font-bold text-[#183113]">
                        {submittedData.phone} • {submittedData.email}
                      </span>
                    </div>
                    {submittedData.organization && (
                      <div className="flex flex-wrap justify-between gap-2 border-b border-[#183113]/10 pb-2">
                        <span className="font-semibold text-[#204E36]">
                          Organization / Location:
                        </span>
                        <span className="font-bold text-[#183113]">
                          {submittedData.organization}
                        </span>
                      </div>
                    )}
                    {submittedData.estimatedVolume && (
                      <div className="flex flex-wrap justify-between gap-2 border-b border-[#183113]/10 pb-2">
                        <span className="font-semibold text-[#204E36]">Estimated Volume:</span>
                        <span className="font-bold text-[#183113]">
                          {submittedData.estimatedVolume}
                        </span>
                      </div>
                    )}
                    <div className="pt-1">
                      <span className="font-semibold text-[#204E36] block mb-1">Message:</span>
                      <p className="text-[#183113]/90 whitespace-pre-line">
                        {submittedData.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                    <a
                      href={buildWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#204E36] hover:bg-[#183113] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
                    >
                      <MessageCircle className="w-5 h-5 text-[#F6B81A]" />
                      <span>Send Directly via WhatsApp</span>
                    </a>
                    <a
                      href={buildMailtoUrl(submittedData)}
                      className="inline-flex items-center gap-2 bg-[#F6B81A] hover:bg-[#e0a612] text-[#183113] font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Send via Email Client</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#204E36] hover:text-[#183113] underline cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#183113] mb-2">
                    Send an Order or Inquiry
                  </h2>
                  <p className="text-sm sm:text-base text-[#183113]/80 mb-6">
                    Choose an inquiry category below and fill in your contact details.
                  </p>

                  {/* Category Pills */}
                  <div className="mb-6">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#204E36] mb-3">
                      1. Select Inquiry Category *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categoryOptions.map((option) => {
                        const IconComponent = option.icon;
                        const isSelected = formData.category === option.label;
                        return (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, category: option.label }))
                            }
                            className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-[#183113] text-[#F6B81A] border-[#183113] shadow-md"
                                : "bg-[#F5F1E8] text-[#183113] border-[#183113]/15 hover:bg-[#FBF3DC]"
                            }`}
                          >
                            <IconComponent className="w-4 h-4 flex-shrink-0" />
                            <span>{option.shortLabel}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Fields Grid */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-bold text-[#183113] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                          if (errors.fullName)
                            setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }}
                        placeholder="e.g., Sarah Namukasa"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#F5F1E8]/50 text-[#183113] placeholder:text-[#183113]/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#204E36] transition-all ${
                          errors.fullName ? "border-red-600" : "border-[#183113]/20"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-[#183113] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email)
                            setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#F5F1E8]/50 text-[#183113] placeholder:text-[#183113]/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#204E36] transition-all ${
                          errors.email ? "border-red-600" : "border-[#183113]/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-[#183113] mb-1.5"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, phone: e.target.value }));
                          if (errors.phone)
                            setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="+256 772 000000"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#F5F1E8]/50 text-[#183113] placeholder:text-[#183113]/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#204E36] transition-all ${
                          errors.phone ? "border-red-600" : "border-[#183113]/20"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Organization / Location */}
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-bold text-[#183113] mb-1.5"
                      >
                        Organization / Location (Optional)
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, organization: e.target.value }))
                        }
                        placeholder="e.g., Kampala Hotel / Wakiso Farm"
                        className="w-full px-4 py-3 rounded-xl border border-[#183113]/20 bg-[#F5F1E8]/50 text-[#183113] placeholder:text-[#183113]/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#204E36] transition-all"
                      />
                    </div>
                  </div>

                  {/* Estimated Volume / Scope */}
                  <div className="mb-5">
                    <label
                      htmlFor="estimatedVolume"
                      className="block text-sm font-bold text-[#183113] mb-1.5"
                    >
                      Estimated Volume or Scope (Optional)
                    </label>
                    <input
                      id="estimatedVolume"
                      type="text"
                      value={formData.estimatedVolume}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, estimatedVolume: e.target.value }))
                      }
                      placeholder={activeCategoryConfig.placeholderVolume}
                      className="w-full px-4 py-3 rounded-xl border border-[#183113]/20 bg-[#F5F1E8]/50 text-[#183113] placeholder:text-[#183113]/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#204E36] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-[#183113] mb-1.5"
                    >
                      Your Message or Order Details *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message)
                          setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Tell us about your order requirements, preferred delivery schedule, training goals, or partnership proposal..."
                      className={`w-full px-4 py-3 rounded-xl border bg-[#F5F1E8]/50 text-[#183113] placeholder:text-[#183113]/45 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#204E36] transition-all ${
                        errors.message ? "border-red-600" : "border-[#183113]/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#F6B81A] hover:bg-[#e0a612] disabled:opacity-60 text-[#183113] font-extrabold text-base py-4 px-8 rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>
                      {isSubmitting ? "Preparing Your Inquiry..." : "Submit Inquiry & Order"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Interactive Accordion) */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#F5F1E8] text-[#204E36] text-xs font-extrabold uppercase tracking-widest mb-3">
              Buyer & Partner Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183113] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#183113]/80 text-base sm:text-lg">
              Quick answers about fresh catfish orders, fingerling availability, farm visits, and
              partnerships.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "bg-[#FBF3DC]/60 border-[#F6B81A] shadow-md"
                      : "bg-[#F5F1E8]/60 border-[#183113]/10 hover:border-[#183113]/25"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <span className="inline-block w-fit text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#183113] text-[#F6B81A]">
                        {faq.category}
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-[#183113]">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#183113] text-[#F6B81A] rotate-180"
                          : "bg-white text-[#183113]"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-[#183113]/90 text-sm sm:text-base leading-relaxed border-t border-[#183113]/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
