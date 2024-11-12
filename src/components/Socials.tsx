"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import email from "../../public/svg/email.svg";
import github from "../../public/svg/github.svg";
import linkedin from "../../public/svg/linkedin.svg";
import twitter from "../../public/svg/twitter.svg";
import youtube from "../../public/svg/youtube.svg";
import { Icon } from "./ui/icon";

export const Socials: React.FC = () => {
  const SocialItem: React.FC<{
    socialItemSrc: StaticImport;
    socialLink: string;
  }> = ({ socialItemSrc, socialLink }) => {
    return (
      <div>
        <Link href={socialLink} target="_blank">
          <Icon src={socialItemSrc} size={32} />
        </Link>
      </div>
    );
  };
  return (
    <div className="flex items-center space-x-6">
      <SocialItem
        socialItemSrc={email}
        socialLink={"mailto:mahaleshantanu3@gmail.com"}
      />
      <SocialItem
        socialItemSrc={youtube}
        socialLink={"https://www.youtube.com/channel/UCKhSzdKqCyHdlXd1TeU-J4Q"}
      />
      <SocialItem
        socialItemSrc={github}
        socialLink={"https://github.com/shantanubr"}
      />
      <SocialItem
        socialItemSrc={twitter}
        socialLink={"https://twitter.com/shantanubr"}
      />
      <SocialItem
        socialItemSrc={linkedin}
        socialLink={"https://www.linkedin.com/in/shantanubr/"}
      />
    </div>
  );
};
