/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox, CKBoxImageEdit } from '@ckeditor/ckeditor5-ckbox';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { AutoImage, Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Undo } from '@ckeditor/ckeditor5-undo';
// export default class Editor extends ClassicEditor {
//     static builtinPlugins: (typeof AutoImage | typeof Autoformat | typeof BlockQuote | typeof Bold | typeof CKBox | typeof CKBoxImageEdit | typeof CloudServices | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Heading | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof Italic | typeof Link | typeof LinkImage | typeof List | typeof MediaEmbed | typeof Paragraph | typeof PasteFromOffice | typeof PictureEditing | typeof Table | typeof TableToolbar | typeof TextTransformation | typeof Undo)[];
//     static defaultConfig: EditorConfig;
// }
export default class Editor extends ClassicEditor {
    static builtinPlugins = [
        AutoImage, Autoformat, BlockQuote, Bold, CKBox, CKBoxImageEdit, CloudServices,
        Essentials, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Image, ImageCaption,
        ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload, Indent, Italic, Link, LinkImage,
        List, MediaEmbed, Paragraph, PasteFromOffice, PictureEditing, Table, TableToolbar, TextTransformation,
        Undo
    ];

    static defaultConfig: EditorConfig = {
        toolbar: {
            items: [
                'heading', '|',
                'bold', 'italic', '|',
                'link', 'blockquote', 'uploadImage', '|',
                'undo', 'redo'
            ]
        },
        image: {
            toolbar: [
                'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
            ]
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        language: 'en'
    };
}

declare module 'ckeditor/build/ckeditor' {
    const Editor: any;
    export = Editor;
}
