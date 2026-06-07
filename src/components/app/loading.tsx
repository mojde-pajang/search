import { Spinner } from "#components/ui/spinner";
const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner className="size-20" />
    </div>
  );
};

export default Loading;
