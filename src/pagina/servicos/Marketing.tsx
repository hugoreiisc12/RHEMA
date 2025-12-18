import { Link } from "react-router-dom";
import MediaGallery from "@/components/MediaGallry.tsx/MediaGallery";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Marketing = () => {
  return (
    <section>
      <div className="px-6 pt-10">
        <ScrollReveal direction="left">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="px-3 py-1 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/servicos/marketing" className="px-3 py-1 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all">Serviços</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Marketing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ScrollReveal>
      </div>
      <ScrollReveal direction="up">
        <MediaGallery category="MARKETING" />
      </ScrollReveal>
    </section>
  );
};

export default Marketing;
