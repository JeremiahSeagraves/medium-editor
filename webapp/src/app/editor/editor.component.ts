import {Component, OnInit} from '@angular/core';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  TableService,
  ToolbarService
} from '@syncfusion/ej2-angular-richtexteditor';


@Component({
  selector: 'app-editor',
  template: '<ejs-richtexteditor id=\'iframeRTE\' [(value)]=\'value\' [toolbarSettings]=\'tools\'></ejs-richtexteditor>',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService],
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {

  public value: string = ' <p>The RichTextEditor triggers events based on its actions. </p> ' +
    '<p> The events can be used as an extension point to perform custom operations.</p>';

  public tools: object = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
