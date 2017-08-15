import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() sideWidth = 'sm';
  navs = [
    {url: '', content: 'Home'},
    {url: 'basic', content: 'Basic'},
    {url: 'secondary', content: 'Secondary'},
    {url: 'wijmotable', content: 'Wijmo Table'},
    {url: 'wijmogrid', content: 'Wijmo Grid'}
  ];

   color = '';
  /* Custom menu structure */
  customItems = [
    {
      text: 'Orders',
      items: [
        {
          text: 'Basic',
          link: 'basic',
          extraText: 'Ctrl+O'
        },
        {
          text: 'New',
          icon: 'arrow_right',
          items: [
            {
              text: 'Secondary',
              link: 'secondary'
            },
            {
              text: 'New',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                },
                {
                  text: 'Document',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document 1'
                    },
                    {
                      text: 'Document 2'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Spreadsheet'
            },
            {
              text: 'Presentation',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Form'
            }
          ]
        },
        {
          divider: true
        },
        {
          text: 'Wijmo',
          link: 'wijmo'
          // could show keyboard command - or whatever we want extraText: 'Ctrl+O'
        },
        {
          text: 'Rename',
          disabled: true
        },
        {
          divider: true
        },
        {
          text: 'Home',
          link:''
          // extraText: 'Ctrl+P'
        }
      ]
    },
    {
      text: 'File',
      items: [
        {
          isCategory: true,
          text: 'File',
          items: [{
            text: 'New'
          }, {
            text: 'Save'
          }, {
            text: 'Save As',
            icon: 'arrow_right',
            items: [
              {
                text: 'Print layout'
              },
              {
                text: 'Mode'
              },
              {
                divider: true
              },
              {
                text: 'Full screen'
              },
            ]
          }]
        },
        {
          isCategory: true,
          text: 'Other Action',
          items: [{
            text: 'Delete'
          }, {
            text: 'Exit'
          }]
        }
      ]
    },
    {
      text: 'Edit',
      items: [
        {
          isCategory: true,
          text: 'Action',
          items: [{
            text: 'Undo'
          }, {
            text: 'Redo'
          }, {
            text: 'Revert to Original'
          }]
        },
        {
          isCategory: true,
          text: 'Content',
          items: [{
            text: 'Copy'
          }, {
            text: 'Paste'
          }, {
            text: 'Select All'
          }]
        },
        {
          isCategory: true,
          text: 'Other Actions',
          items: [{
            text: 'Delete'
          }, {
            text: 'Delete All'
          }, {
            text: 'Highlight All'
          }]
        }
      ]
    },
    {
      text: 'View',
      items: [
        {
          text: 'Print layout'
        },
        {
          text: 'Mode',
          icon: 'arrow_right',
          items: [
            {
              text: 'Presentation'
            },
            {
              text: 'Edit'
            },
            {
              text: 'Modifiable'
            }
          ]
        },
        {
          divider: true
        },


        {
          text: 'Full screen'
        },
      ]
    },

  ];


}
