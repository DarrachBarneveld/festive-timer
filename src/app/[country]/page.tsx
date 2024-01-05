import { FunctionComponent } from "react";

interface PageProps {
  params: { id: string };
}

const page: FunctionComponent<PageProps> = ({ params }) => {
  console.log(params);
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 flex flex-col md:flex-row"></div>
    </div>
  );
};

export default page;
