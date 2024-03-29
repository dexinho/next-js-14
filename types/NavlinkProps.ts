export type NavlinkProps = {
  path: string;
  title: string;
  bgColor: string;
  onLinkClick: (link: string) => void;
};

export type Navlink = {
  title: string;
  path: string;
};
