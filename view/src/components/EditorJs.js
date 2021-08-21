import {
  default as React,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import InlineImage from 'editorjs-inline-image';
import Quote from '@editorjs/quote';
import Delimiter from '@editorjs/delimiter';
import Alert from 'editorjs-alert';
import Paragraph from 'editorjs-paragraph-with-alignment';
import NestedList from '@editorjs/nested-list';
import SimpleImage from 'simple-image-editorjs';
import SocialPost from 'editorjs-social-post-plugin';
import Table from 'editorjs-table';
import Underline from '@editorjs/underline';
import Marker from '@editorjs/marker';
import { PostContextSave } from '../context/postContextSave/PostContextSave';

const EDITTOR_HOLDER_ID = 'editorjs';

const Editor = () => {
  const editorStart = useRef();
  const { setSaveContent } = useContext(PostContextSave);

  useEffect(() => {
    if (!editorStart.current) {
      //ที่ใช้useref เพราะเมื่อเริ่มทำงานบางที่มันซ้อนกัน ืำให้ต้องลบอันเก่าก่อน
      initEditor();
    }
    return () => {
      editorStart.current.destroy();
      editorStart.current = null;
    };
  }, []);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: 'ERROR',
      placeholder: 'Tell your story',
      onReady: () => {
        editorStart.current = editor;
      },
      tools: {
        header: {
          class: Header,
          config: {
            // placeholder: 'Tell your camping memories!',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        images: {
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
            unsplash: {
              appName: 'campmemo',
              clientId: '6JfAQ2WGYdVId8lyhLSOs6D15DHL6npBc0aqFl6l4ks',
            },
          },
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author",
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        alert: {
          class: Alert,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+A',
          config: {
            defaultType: 'primary',
            messagePlaceholder: 'Enter something',
          },
        },
        delimiter: Delimiter,
        list: {
          class: NestedList,
          inlineToolbar: true,
        },
        image: SimpleImage,
        socialPost: SocialPost,
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        underline: Underline,
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
      },
    });
    setSaveContent(editor);
  };

  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}></div>
    </React.Fragment>
  );
};

export default Editor;
