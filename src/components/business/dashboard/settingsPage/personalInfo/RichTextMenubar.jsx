import { useEditorState } from "@tiptap/react";
import { BsChatLeftQuote } from "react-icons/bs";
import { CiRedo, CiUndo } from "react-icons/ci";
import { GoItalic, GoListOrdered, GoListUnordered } from "react-icons/go";
import { MdFormatBold } from "react-icons/md";

const RichTextMenubar = ({ editor }) => {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor) return {};
      const e = ctx.editor;
      return {
        isBold: e.isActive("bold"),
        canBold: e.can().chain().toggleBold().run(),
        isItalic: e.isActive("italic"),
        canItalic: e.can().chain().toggleItalic().run(),
        isStrike: e.isActive("strike"),
        canStrike: e.can().chain().toggleStrike().run(),
        isCode: e.isActive("code"),
        canCode: e.can().chain().toggleCode().run(),
        canClearMarks: e.can().chain().unsetAllMarks().run(),
        isParagraph: e.isActive("paragraph"),
        isHeading1: e.isActive("heading", { level: 1 }),
        isHeading2: e.isActive("heading", { level: 2 }),
        isHeading3: e.isActive("heading", { level: 3 }),
        isHeading4: e.isActive("heading", { level: 4 }),
        isHeading5: e.isActive("heading", { level: 5 }),
        isHeading6: e.isActive("heading", { level: 6 }),
        isBulletList: e.isActive("bulletList"),
        isOrderedList: e.isActive("orderedList"),
        isCodeBlock: e.isActive("codeBlock"),
        isBlockquote: e.isActive("blockquote"),
        isLink: e.isActive("link"),
        canUndo: e.can().chain().undo().run(),
        canRedo: e.can().chain().redo().run(),
      };
    },
  });

  if (!editor) return null;

  return (
    <>
      <div className="mb-3 flex flex-wrap gap-1">
        {[
          {
            label: <MdFormatBold size={18} />,
            action: () => editor.chain().focus().toggleBold().run(),
            active: editorState.isBold,
            disabled: !editorState.canBold,
          },
          {
            label: <GoItalic />,
            action: () => editor.chain().focus().toggleItalic().run(),
            active: editorState.isItalic,
            disabled: !editorState.canItalic,
          },
        ].map((btn, idx) => (
          <button
            type="button"
            key={idx}
            onClick={btn.action}
            disabled={btn.disabled}
            className={`editor-toggle-btn 
            ${btn.active ? "btn-active" : ""} 
            disabled:opacity-40`}
          >
            {btn.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`editor-toggle-btn 
          ${editorState.isParagraph ? "btn-active" : ""}`}
        >
          P
        </button>
        {[1, 2, 3].map((lvl) => (
          <button
            type="button"
            key={lvl}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: lvl }).run()
            }
            className={`editor-toggle-btn 
            ${editorState[`isHeading${lvl}`] ? "btn-active" : ""}`}
          >
            H{lvl}
          </button>
        ))}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`editor-toggle-btn ${
            editorState.isBulletList ? "btn-active" : ""
          }`}
        >
          <GoListUnordered />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`editor-toggle-btn ${
            editorState.isOrderedList ? "btn-active" : ""
          }`}
        >
          <GoListOrdered />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`editor-toggle-btn ${
            editorState.isBlockquote ? "btn-active" : ""
          }`}
        >
          <BsChatLeftQuote />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
          className="editor-toggle-btn"
        >
          <CiUndo />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
          className="editor-toggle-btn"
        >
          <CiRedo />
        </button>
      </div>
    </>
  );
};

export default RichTextMenubar;
