import Image from "next/image";
import { teamMembers } from "@/data/team";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function TeamSection() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">Our Team</p>
        <h2 className="font-display text-4xl text-midnight mt-2">Meet Our Management Team</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mt-3">
          Our experienced professionals are dedicated to connecting talented Nepali workers with international opportunities
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl hover:border-orbit/50"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition group-hover:scale-105"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-display text-xl text-midnight">{member.name}</h3>
                <p className="text-sm font-semibold text-orbit">{member.position}</p>
                <p className="text-xs text-slate-500">{member.department}</p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>

              <div className="flex flex-wrap gap-1">
                {member.specialization.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-midnight transition"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  <span className="text-xs">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-midnight transition"
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span className="text-xs">{member.phone}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
