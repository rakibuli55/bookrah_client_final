import Link from "@tiptap/extension-link";
import Paragraph from "@tiptap/extension-paragraph";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import RichTextMenubar from "./RichTextMenubar";

const RichTextEditor = () => {
  const extensions = [TextStyleKit, StarterKit, Link, Paragraph];

  const editor = useEditor({
    extensions,
    content: "",
  });

  if (!editor) return null;

  return (
    <div className="bio-text-editor">
      <RichTextMenubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
