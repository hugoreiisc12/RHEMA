import photo1 from "@/assets/moment-1 (1).jpg";
import photo2 from "@/assets/moment-2.jpg";
import video1 from "@/assets/moment-3.jpg";
import video2 from "@/assets/hero-bg (2).jpg";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const media = [
  { type: "photo", image: photo1, title: null, category: "FOTOGRAFIA" },
  { type: "photo", image: photo2, title: null, category: "FOTOGRAFIA" },
  { type: "video", image: "/thumb1.png", title: null, category: "EDIÇÃO", videoUrl: "/videos_hero/WhatsApp Video 2025-12-16 at 23.31.13.mp4" },
  { type: "video", image: "/thumb2.jpg", title: null, category: "EDIÇÃO", videoUrl: "/videos_hero/WhatsApp Video 2025-12-16 at 23.31.39 (1).mp4" },
  { type: "photo", image: "/imagem 4.jpeg", title: null, category: "FOTOGRAFIA" },
  { type: "video", image: "/imagem 4.jpeg", title: null, category: "FILMMAKING", videoUrl: "/video 4.mp4" },
];

const MediaGallery = ({ category }: { category?: string }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 bg-transparent border border-primary/30 shadow-[inset_0_0_20px_-5px_hsl(var(--primary)/0.3)]">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-20 flex-wrap gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none font-bold text-foreground">
              PORTFOLIO
            </h2>
            <p className="text-muted-foreground text-xl mt-4">
              Nossos trabalhos mais recentes
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/portfolio"
              className={`px-6 py-3 font-bold transition-all ${!category
                ? "bg-primary text-primary-foreground hover:shadow-glow"
                : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
            >
              TODOS
            </Link>
            <Link
              to="/portfolio/filmmaking"
              className={`px-6 py-3 font-bold transition-all ${category === "FILMMAKING"
                ? "bg-primary text-primary-foreground hover:shadow-glow"
                : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
            >
              FILMMAKING
            </Link>
            <Link
              to="/portfolio/fotografia"
              className={`px-6 py-3 font-bold transition-all ${category === "FOTOGRAFIA"
                ? "bg-primary text-primary-foreground hover:shadow-glow"
                : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
            >
              FOTOGRAFIA
            </Link>
            <Link
              to="/portfolio/edicao"
              className={`px-6 py-3 font-bold transition-all ${category === "EDIÇÃO"
                ? "bg-primary text-primary-foreground hover:shadow-glow"
                : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
            >
              EDIÇÃO
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {media.filter((m) => !category || m.category === category).map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className={`group relative aspect-[4/3] overflow-hidden bg-secondary animate-scale-in border border-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
                  onClick={() => item.type === "video" && setSelectedVideo(item.videoUrl || "")}
                >
                  <img
                    src={item.image}
                    alt={item.title || item.category || "Portfolio item"}
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                      <div className="w-20 h-20 border-4 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-primary ml-1" />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-primary font-bold text-sm mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-display text-4xl font-bold text-foreground">
                      RHEMA MEDIA PRODUCT
                    </h3>
                  </div>

                  <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground font-bold text-xs">
                    {item.type === "video" ? "VÍDEO" : "FOTO"}
                  </div>
                </div>
              </DialogTrigger>
              {item.type === "video" && (
                <DialogContent className="max-w-[90vw] w-full max-h-[90vh] p-0 bg-black border-none overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full aspect-video">
                    <video
                      src={item.videoUrl}
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/portfolio" className="inline-block px-12 py-4 bg-secondary border-2 border-primary text-foreground font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-glow">
            VER MAIS PROJETOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
