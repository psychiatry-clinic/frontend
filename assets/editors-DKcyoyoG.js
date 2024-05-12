import{u as f,S as k,P as b,U as v,E as C}from"./index-4q8lXpCN.js";import{T as y}from"./index-8BNVS8UP.js";import{d as u,a as d,o as s,c as p,n as o,b as t,f as l,v as a,z as V,r as x,ad as A,g as w}from"./index-DrFL9zv-.js";import{_ as B}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkHZz7dq.js";import{_ as E}from"./TiptapEditor.vue_vue_type_style_index_0_lang-BRbW_iJO.js";import"./vue3-perfect-scrollbar.esm-CxbQKJsC.js";const _={class:"border pa-2 rounded custom-editor"},H={key:0,class:"d-flex flex-wrap gap-x-4 gap-y-2 mb-2"},$=u({__name:"DemoEditorCustomEditor",setup(h){const e=f({content:`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,extensions:[k,y.configure({types:["heading","paragraph"]}),b.configure({placeholder:"Write something here..."}),v]});return(g,i)=>{const r=d("VChip"),c=d("VDivider");return s(),p("div",_,[o(e)?(s(),p("div",H,[t(r,{disabled:!o(e).can().chain().focus().toggleBold().run(),color:o(e).isActive("bold")?"primary":"",onClick:i[0]||(i[0]=n=>o(e).chain().focus().toggleBold().run())},{default:l(()=>[a(" bold ")]),_:1},8,["disabled","color"]),t(r,{disabled:!o(e).can().chain().focus().toggleItalic().run(),color:o(e).isActive("italic")?"primary":"",onClick:i[1]||(i[1]=n=>o(e).chain().focus().toggleItalic().run())},{default:l(()=>[a(" italic ")]),_:1},8,["disabled","color"]),t(r,{disabled:!o(e).can().chain().focus().toggleStrike().run(),color:o(e).isActive("strike")?"primary":"",onClick:i[2]||(i[2]=n=>o(e).chain().focus().toggleStrike().run())},{default:l(()=>[a(" strike ")]),_:1},8,["disabled","color"]),t(r,{disabled:!o(e).can().chain().focus().toggleCode().run(),color:o(e).isActive("code")?"primary":"",onClick:i[3]||(i[3]=n=>o(e).chain().focus().toggleCode().run())},{default:l(()=>[a(" code ")]),_:1},8,["disabled","color"]),t(r,{onClick:i[4]||(i[4]=n=>o(e).chain().focus().unsetAllMarks().run())},{default:l(()=>[a(" clear marks ")]),_:1}),t(r,{onClick:i[5]||(i[5]=n=>o(e).chain().focus().clearNodes().run())},{default:l(()=>[a(" clear nodes ")]),_:1}),t(r,{color:o(e).isActive("paragraph")?"primary":"",onClick:i[6]||(i[6]=n=>o(e).chain().focus().setParagraph().run())},{default:l(()=>[a(" paragraph ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("heading",{level:1})?"primary":"",onClick:i[7]||(i[7]=n=>o(e).chain().focus().toggleHeading({level:1}).run())},{default:l(()=>[a(" h1 ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("heading",{level:2})?"primary":"",onClick:i[8]||(i[8]=n=>o(e).chain().focus().toggleHeading({level:2}).run())},{default:l(()=>[a(" h2 ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("heading",{level:3})?"primary":"",onClick:i[9]||(i[9]=n=>o(e).chain().focus().toggleHeading({level:3}).run())},{default:l(()=>[a(" h3 ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("heading",{level:4})?"primary":"",onClick:i[10]||(i[10]=n=>o(e).chain().focus().toggleHeading({level:4}).run())},{default:l(()=>[a(" h4 ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("heading",{level:5})?"primary":"",onClick:i[11]||(i[11]=n=>o(e).chain().focus().toggleHeading({level:5}).run())},{default:l(()=>[a(" h5 ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("heading",{level:6})?"primary":"",onClick:i[12]||(i[12]=n=>o(e).chain().focus().toggleHeading({level:6}).run())},{default:l(()=>[a(" h6 ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("bulletList")?"primary":"",onClick:i[13]||(i[13]=n=>o(e).chain().focus().toggleBulletList().run())},{default:l(()=>[a(" bullet list ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("orderedList")?"primary":"",onClick:i[14]||(i[14]=n=>o(e).chain().focus().toggleOrderedList().run())},{default:l(()=>[a(" ordered list ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("codeBlock")?"primary":"",onClick:i[15]||(i[15]=n=>o(e).chain().focus().toggleCodeBlock().run())},{default:l(()=>[a(" code block ")]),_:1},8,["color"]),t(r,{color:o(e).isActive("blockquote")?"primary":"",onClick:i[16]||(i[16]=n=>o(e).chain().focus().toggleBlockquote().run())},{default:l(()=>[a(" blockquote ")]),_:1},8,["color"]),t(r,{onClick:i[17]||(i[17]=n=>o(e).chain().focus().setHorizontalRule().run())},{default:l(()=>[a(" horizontal rule ")]),_:1}),t(r,{onClick:i[18]||(i[18]=n=>o(e).chain().focus().setHardBreak().run())},{default:l(()=>[a(" hard break ")]),_:1}),t(r,{disabled:!o(e).can().chain().focus().undo().run(),onClick:i[19]||(i[19]=n=>o(e).chain().focus().undo().run())},{default:l(()=>[a(" undo ")]),_:1},8,["disabled"]),t(r,{disabled:!o(e).can().chain().focus().redo().run(),onClick:i[20]||(i[20]=n=>o(e).chain().focus().redo().run())},{default:l(()=>[a(" redo ")]),_:1},8,["disabled"])])):V("",!0),t(c,{class:"my-4"}),t(o(C),{editor:o(e)},null,8,["editor"])])}}}),I=u({__name:"DemoEditorBasicEditor",setup(h){const e=x(`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
`);return(g,i)=>{const r=E;return s(),p("div",null,[t(r,{modelValue:o(e),"onUpdate:modelValue":i[0]||(i[0]=c=>A(e)?e.value=c:null),class:"border rounded basic-editor"},null,8,["modelValue"])])}}}),T={ts:`<script setup lang="ts">
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded basic-editor"
    />
  </div>
</template>

<style lang="scss">
.basic-editor {
  .ProseMirror {
    block-size: 200px;
    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;
  }
}
</style>
`,js:`<script setup>
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded basic-editor"
    />
  </div>
</template>

<style lang="scss">
.basic-editor {
  .ProseMirror {
    block-size: 200px;
    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;
  }
}
</style>
`},q={ts:`<script setup lang="ts">
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded custom-editor">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */

.custom-editor {
  .ProseMirror {
    > * + * {
      margin-block-start: 0.75em;
    }

    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;

    ul,
    ol {
      padding-block: 0;
      padding-inline: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      border-radius: 0.5rem;
      background: #0d0d0d;
      color: #fff;
      font-family: JetBrainsMono, monospace;
      padding-block: 0.75rem;
      padding-inline: 1rem;

      code {
        padding: 0;
        background: none;
        color: inherit;
        font-size: 0.8rem;
      }
    }

    img {
      block-size: auto;
      max-inline-size: 100%;
    }

    blockquote {
      border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
      padding-inline-start: 1rem;
    }

    hr {
      border: none;
      border-block-start: 2px solid rgba(#0d0d0d, 0.1);
      margin-block: 2rem;
      margin-inline: 0;
    }
  }
}
</style>
`,js:`<script setup>
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import {
  EditorContent,
  useEditor,
} from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: [
        'heading',
        'paragraph',
      ],
    }),
    Placeholder.configure({ placeholder: 'Write something here...' }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded custom-editor">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */

.custom-editor {
  .ProseMirror {
    > * + * {
      margin-block-start: 0.75em;
    }

    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;

    ul,
    ol {
      padding-block: 0;
      padding-inline: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      border-radius: 0.5rem;
      background: #0d0d0d;
      color: #fff;
      font-family: JetBrainsMono, monospace;
      padding-block: 0.75rem;
      padding-inline: 1rem;

      code {
        padding: 0;
        background: none;
        color: inherit;
        font-size: 0.8rem;
      }
    }

    img {
      block-size: auto;
      max-inline-size: 100%;
    }

    blockquote {
      border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
      padding-inline-start: 1rem;
    }

    hr {
      border: none;
      border-block-start: 2px solid rgba(#0d0d0d, 0.1);
      margin-block: 2rem;
      margin-inline: 0;
    }
  }
}
</style>
`},U=u({__name:"editors",setup(h){return(e,g)=>{const i=I,r=B,c=d("VCol"),n=$,m=d("VRow");return s(),w(m,null,{default:l(()=>[t(c,{cols:"12"},{default:l(()=>[t(r,{title:"Basic Editor",code:T},{default:l(()=>[t(i)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:l(()=>[t(r,{title:"Custom Editor",code:q},{default:l(()=>[t(n)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{U as default};
