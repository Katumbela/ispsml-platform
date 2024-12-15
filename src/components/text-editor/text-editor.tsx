import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TextEditorProps {
    editorContent: string;
    setEditorContent: (content: string) => void;
}

export const TextEditor: React.FC<TextEditorProps> = ({ editorContent, setEditorContent }) => {
    const handleEditorChange = (content: string) => {
        setEditorContent(content);
    };

    return (
        <Editor
            apiKey="sh2tciuk9rcnssaqs1unp7o5lrjym07pwkwsizni3bcpmgn2"
            value={editorContent}
            init={{
                height: 500,
                menubar: true,
                menu: {
                    file: { title: 'File', items: 'newdocument restoredraft | preview | importword exportpdf exportword | print | deleteallconversations' },
                    edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
                    view: { title: 'View', items: 'code revisionhistory | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
                    insert: { title: 'Insert', items: 'image link media addcomment pageembed codesample inserttable | math | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
                    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
                    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
                    table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
                    help: { title: 'Help', items: 'help' }
                },
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'emoticons template hr pagebreak',
                    'save directionality advcode visualchars',
                    'nonbreaking quickbars',
                ],
                toolbar:
                    'undo redo | formatselect | bold italic underline strikethrough forecolor backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | removeformat | ' +
                    'link image media | code preview anchor | ' +
                    'insertdatetime table emoticons hr pagebreak | ' +
                    'fullscreen save template',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={handleEditorChange}
        />
    );
};

