type Section = {
    id: string,
    name: string;
    description: string;
    type: string;
    file: string;
  };

interface AnimationComponentProps {
  file: string;
  speed: number;
  delay: number;
  loop: boolean;
  autoplay: boolean;
}
interface FooterListItems {
  name: string;
  index:number;
  data: { link: string; label: string }[];
}
