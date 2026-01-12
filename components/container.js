import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12",
        // props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}
