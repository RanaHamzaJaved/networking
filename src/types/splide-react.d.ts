declare module "@splidejs/react-splide" {
  import type { Options } from "@splidejs/splide";

  export interface SplideProps {
    options?: Options;
    className?: string;
    hasTrack?: boolean;
    tag?: string;
    children?: React.ReactNode;
  }

  export const Splide: React.FC<SplideProps>;

  export interface SplideSlideProps {
    className?: string;
    tag?: string;
    children?: React.ReactNode;
  }

  export const SplideSlide: React.FC<SplideSlideProps>;
}
