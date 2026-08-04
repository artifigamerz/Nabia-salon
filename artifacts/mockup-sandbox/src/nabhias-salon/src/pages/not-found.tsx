import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-background">
      <h1 className="text-8xl font-serif text-primary mb-6">404</h1>
      <h2 className="text-3xl font-serif text-secondary mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link href="/">
        <Button size="lg">Return to Home</Button>
      </Link>
    </div>
  );
}
