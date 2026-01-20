import { cx } from "@/utils/all";

export default function ContainerHeader(props) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-1 lg:py-1",
        props.className
      )}>
      {props.children}
    </div>
  );
}
