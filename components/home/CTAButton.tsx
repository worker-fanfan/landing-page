import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://www.pgyer.com/nEUV5zDQ"
      target="_blank"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <DownloadCloud />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
