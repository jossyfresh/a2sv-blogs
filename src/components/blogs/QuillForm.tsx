"use client";
import QuillToolbar from "./QuillToolbar";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => {
    return import("react-quill");
  },
  { ssr: false }
);

type Props = {
  description: string;
  setDescription: (description: string) => void;
};

const CreateForm: React.FC<Props> = ({ description, setDescription }) => {
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
    clipboard: {
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];

  return (
    <div className="flex flex-col gap-4 md:w-9/12">
      <QuillToolbar />
      <ReactQuill
        theme="snow"
        value={description}
        onChange={(value: string) => setDescription(value)}
        modules={modules}
        formats={formats}
        className="h-48 md:h-80 !border-l border-primary"
      />
    </div>
  );
};

export default CreateForm;
