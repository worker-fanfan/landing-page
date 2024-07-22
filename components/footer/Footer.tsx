import FooterProducts from "@/components/footer/FooterProducts";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        {/* <FooterLinks /> */}
        <FooterProducts />
        <div className="flex space-x-2">
          <div>{`Copyright © 2023 - ${currentYear}`}</div>{" "}
          <div>{authors[0].name}</div>{" "}
          <div>版权所有</div>{" "}
          <Link href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
            {"备案号: 京ICP备2021016127号"}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
