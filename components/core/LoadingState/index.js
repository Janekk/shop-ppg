import cx from "classnames";

const LoadingState = ({ className }) => (
  <div className="flex items-center justify-center w-full h-full">
    <div className={cx("flex items-center justify-center gap-1", className)}>
      <div className="animate-pulse-fast rounded-full bg-gray h-4 w-4" />
      <div className="animate-pulse-slow rounded-full bg-gray h-4 w-4" />
      <div className="animate-pulse-mid rounded-full bg-gray h-4 w-4" />
    </div>
  </div>
);

export default LoadingState;
