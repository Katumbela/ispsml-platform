import React from 'react';

interface TextEditorProps {
    editorContent: string;
    setEditorContent: (content: string) => void;
    className?: string;
}

export const TextEditor: React.FC<TextEditorProps> = ({ editorContent, setEditorContent, className }) => {
    const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditorContent(e.target.value);
    };

    return (
        <textarea
            value={editorContent}
            placeholder='Escreva aqui...'
            onChange={handleEditorChange}
            rows={10}
            className={`w-full p-2 border bg-white/20 rounded ${className}`}
        />
    );
};

