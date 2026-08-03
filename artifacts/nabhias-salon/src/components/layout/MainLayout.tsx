import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "../ui/FloatingButtons";
import { AnnouncementBar } from "../ui/AnnouncementBar";
import { ScrollToTop } from "./ScrollToTop";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col relative">
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
