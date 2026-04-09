import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType, MouseEvent } from "react";
import { FileText, Github, Linkedin } from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile";

type SocialLink = {
  label: string;
  href: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  color: string;
};

const LINKEDIN_URL = "https://www.linkedin.com/in/alex-betances-1435b6361/";
const GITHUB_URL = "https://github.com/xAlexBFx";
const RESUME_URL = "/assets/resume/Alex Betances Work Resume.pdf";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const Footer = () => {
  const year = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: "",
    message: "I am interested in making a...",
  });

  const [errors, setErrors] = useState({
    name: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = useCallback((name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
      default:
        break;
    }

    return error;
  }, []);

  useEffect(() => {
    const isValid =
      Object.values(errors).every((error) => !error) &&
      formData.name.trim() !== "" &&
      formData.message.trim() !== "I am interested in making a...";
    setIsFormValid(isValid);
  }, [errors, formData]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!isFormValid) return;

      const subject = "Interested Client from Portfolio";
      const body = `Hello Alex, I'm ${formData.name}.

${formData.message}

Best regards,
${formData.name}`;

      const mailtoUrl = `mailto:alexbetancesx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    },
    [formData, isFormValid]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    },
    [validateField]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    },
    [validateField]
  );

  const links = useMemo<SocialLink[]>(
    () => [
      {
        label: "LinkedIn",
        href: LINKEDIN_URL,
        description: "Connect and see my experience",
        Icon: Linkedin,
        color: "blue",
      },
      {
        label: "GitHub",
        href: GITHUB_URL,
        description: "Browse my projects and code",
        Icon: Github,
        color: "green",
      },
      {
        label: "Resume",
        href: RESUME_URL,
        description: "View my resume",
        Icon: FileText,
        color: "orange",
      },
    ],
    []
  );

  return (
    <footer id="contact" className="mt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-background/40 to-muted/30 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(148,163,184,0.10),transparent_45%),radial-gradient(circle_at_70%_90%,rgba(156,163,175,0.10),transparent_50%)]" />

          <div className="relative p-8 sm:p-10">
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-3">
                <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  Let's build something unreal
                </div>
                <div className="text-muted-foreground text-base sm:text-lg max-w-2xl">
                  Ready when you are.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {links.map((link, index) => (
                  <TiltLinkCard
                    key={link.label}
                    link={link}
                    index={index}
                  />
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 pt-2">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/30 to-muted/20 backdrop-blur-xl p-6 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_75%_20%,rgba(148,163,184,0.08),transparent_55%)]" />
                  <div className="relative">
                    <div className="text-2xl font-bold text-foreground mb-4">Get In Touch</div>
                    <div className="text-muted-foreground mb-7 text-base leading-relaxed">
                      I'm always excited about new opportunities and innovative projects. Let's discuss how we can bring your vision to life.
                    </div>

                    <div className="space-y-5">
                      <div className="group flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-xl">@</span>
                        </div>
                        <div>
                          <div className="font-bold text-foreground">Email</div>
                          <div className="text-muted-foreground">alexbetancesx@gmail.com</div>
                        </div>
                      </div>

                      <div className="group flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-xl">🌍</span>
                        </div>
                        <div>
                          <div className="font-bold text-foreground">Location</div>
                          <div className="text-muted-foreground">Available Worldwide</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/30 to-muted/20 backdrop-blur-xl p-6 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(156,163,175,0.08),transparent_55%)]" />
                  <div className="relative">
                    <div className="text-2xl font-bold text-foreground mb-6">Send Message</div>

                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-muted-foreground mb-3">
                          Your Name {errors.name && <span className="text-red-500 text-sm font-normal"> - {errors.name}</span>}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-6 py-4 bg-background/40 border ${errors.name ? "border-red-500" : "border-border"} rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-slate-400/20 transition-all duration-300`}
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-muted-foreground mb-3">
                          Message {errors.message && <span className="text-red-500 text-sm font-normal"> - {errors.message}</span>}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={5}
                          className={`w-full px-6 py-4 bg-background/40 border ${errors.message ? "border-red-500" : "border-border"} rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-slate-400/20 transition-all duration-300 resize-none`}
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-4 px-8 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${
                          isFormValid
                            ? "bg-gradient-to-r from-slate-600 to-gray-700 text-white hover:from-slate-700 hover:to-gray-800 hover:shadow-slate-500/25"
                            : "bg-gray-400 text-gray-600 cursor-not-allowed"
                        }`}
                      >
                        Send Email
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border/40">
                <div className="text-sm text-muted-foreground">
                  © {year} Alex Betances. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TiltLinkCard = ({
  link,
  index,
}: {
  link: SocialLink;
  index: number;
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [transform, setTransform] = useState<string>("perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
  const [shine, setShine] = useState<string>("radial-gradient(circle at 50% 50%, rgba(255,255,255,0.20), transparent 55%)");
  const isMobile = useIsMobile();

  const handleMove = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) return;
    
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = clamp((px - 0.5) * 14, -10, 10);
    const rotateX = clamp((0.5 - py) * 14, -10, 10);

    setTransform(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(14px)`
    );
    setShine(
      `radial-gradient(circle at ${Math.round(px * 100)}% ${Math.round(py * 100)}%, rgba(255,255,255,0.24), transparent 55%)`
    );
  }, [isMobile]);

  const handleLeave = useCallback(() => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setShine("radial-gradient(circle at 50% 50%, rgba(255,255,255,0.16), transparent 55%)");
  }, []);

  return (
    <a
      ref={ref}
      href={link.href}
      target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
      rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
      onMouseMove={!isMobile ? handleMove : undefined}
      onMouseLeave={!isMobile ? handleLeave : undefined}
      onBlur={!isMobile ? handleLeave : undefined}
      className="group relative rounded-2xl border border-border/50 bg-background/25 backdrop-blur-xl p-6 sm:p-7 transition-colors duration-300 hover:border-border focus:outline-none focus:ring-2 focus:ring-slate-400/20"
      style={{
        transform,
        transition: "transform 220ms ease, border-color 220ms ease",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            index % 3 === 0
              ? "linear-gradient(90deg, rgba(148,163,184,0.25), rgba(255,255,255,0))"
              : index % 3 === 1
                ? "linear-gradient(90deg, rgba(156,163,175,0.25), rgba(255,255,255,0))"
                : "linear-gradient(90deg, rgba(226,232,240,0.18), rgba(255,255,255,0))",
        }}
      />

      <div className="relative" style={{ transform: "translateZ(18px)" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl border border-border/60 bg-background/35 flex items-center justify-center">
              <link.Icon className="h-6 w-6 text-foreground/90" />
            </div>
            <div>
              <div className="text-lg font-bold text-foreground">{link.label}</div>
              <div className="text-sm text-muted-foreground">{link.description}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
            <span className="text-sm">Open</span>
            <span aria-hidden="true" className="text-sm">↗</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
          <div
            className="mt-4 rounded-xl border border-border/30 bg-background/10 backdrop-blur-md p-3 relative overflow-hidden"
            style={{
              backgroundImage: shine,
              transition: "background-image 120ms ease",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-border/20 relative overflow-hidden backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                  link.color === 'blue' ? 'via-blue-400/70' :
                  link.color === 'green' ? 'via-green-400/70' :
                  'via-orange-400/70'
                } to-transparent animate-shimmer backdrop-blur-xs`}></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/2 pointer-events-none"></div>
            <span className="sr-only">Interactive link card</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Footer;
