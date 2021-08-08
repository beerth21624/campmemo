import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist'
import ImageTool from '@editorjs/image';
import InlineImage from 'editorjs-inline-image';
import Quote from'@editorjs/quote'
import Delimiter from'@editorjs/delimiter' 
import Alert from 'editorjs-alert';
import Paragraph from'editorjs-paragraph-with-alignment'
import NestedList from '@editorjs/nested-list';
import SimpleImage from 'simple-image-editorjs'
import SocialPost from 'editorjs-social-post-plugin';
import Table from 'editorjs-table'
import Underline from '@editorjs/underline';
import Marker from '@editorjs/marker'

 const validate=false

const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
   
    "blocks": [
      {
        "type": "header",
        "data": {
        //   "text": "This is my awesome editor!",
        
          "level": 1
          
        },
       
      },
    ]
  }
}
 
const EDITTOR_HOLDER_ID = 'editorjs';
 
const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
 
  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);
 
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      readOnly: validate,
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      tools: { 
        header: {
          class: Header,
          config: {
            placeholder: 'Tell your camping memories!',
            levels: [2, 3, 4],
            defaultLevel: 3
          }
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
                clientId: '6JfAQ2WGYdVId8lyhLSOs6D15DHL6npBc0aqFl6l4ks'
              }
            }
          },
          
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author',
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
          }


    }});
  };
 
  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}> </div>
    </React.Fragment>
  );
}
 
export default Editor;