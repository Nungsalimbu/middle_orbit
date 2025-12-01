"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ApplicationForm } from "@/components/forms/application-form";
import { buildMetadata } from "@/lib/metadata";

function ApplyContent() {
    const searchParams = useSearchParams();
    const jobTitle = searchParams.get("job");
    const country = searchParams.get("country");
    const sector = searchParams.get("sector");

    return (
        <div className="page-shell py-12">
            <div className="mx-auto max-w-3xl space-y-6">
                <header className="space-y-3 text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">APPLY NOW</p>
                    {jobTitle ? (
                        <>
                            <h1 className="font-display text-4xl text-midnight md:text-5xl">
                                Apply for {jobTitle}
                            </h1>
                            <p className="text-lg text-slate-600">
                                {country && sector && `${sector} position in ${country} • `}
                                We will call you within 24 hours to discuss your application.
                            </p>
                        </>
                    ) : (
                        <>
                            <h1 className="font-display text-4xl text-midnight md:text-5xl">
                                Complete the secure form
                            </h1>
                            <p className="text-lg text-slate-600">
                                We will call you within 24 hours to discuss your application and next steps.
                            </p>
                        </>
                    )}
                </header>

                <div className="rounded-4xl border border-midnight/10 bg-white p-8 shadow-glow">
                    <ApplicationForm
                        prefilledJob={jobTitle || undefined}
                        prefilledCountry={country || undefined}
                    />
                </div>

                <div className="space-y-4 rounded-3xl bg-cloud/60 p-6">
                    <h2 className="font-display text-2xl text-midnight">What happens next?</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orbit text-lg font-bold text-midnight">
                                1
                            </div>
                            <h3 className="font-semibold text-midnight">Verification</h3>
                            <p className="text-sm text-slate-600">
                                Our team verifies your documents and qualifications within 24 hours.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orbit text-lg font-bold text-midnight">
                                2
                            </div>
                            <h3 className="font-semibold text-midnight">Interview</h3>
                            <p className="text-sm text-slate-600">
                                Schedule a video or in-person interview with our recruitment team.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orbit text-lg font-bold text-midnight">
                                3
                            </div>
                            <h3 className="font-semibold text-midnight">Placement</h3>
                            <p className="text-sm text-slate-600">
                                Get matched with suitable employers and begin your journey abroad.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl bg-midnight p-6 text-white">
                    <h2 className="mb-3 font-display text-2xl">Need immediate assistance?</h2>
                    <p className="mb-4 text-white/80">
                        Contact our recruitment team directly via WhatsApp for instant support.
                    </p>
                    <a
                        href="https://wa.me/9779800000000"
                        className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight"
                    >
                        WhatsApp instant inquiry
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function ApplyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ApplyContent />
        </Suspense>
    );
}
