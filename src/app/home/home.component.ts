import { Component, OnInit } from '@angular/core';
import { SidenavMenuItem } from '@ddeloy/dd-library';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems = [
    new SidenavMenuItem('Settings', 'User Management', '', '', [
      new SidenavMenuItem('', 'Company Settings', '', '', null),
      new SidenavMenuItem('', 'User Management', '', '', null),
      new SidenavMenuItem('', 'Shared Settings', '', '', null)
    ]),
    new SidenavMenuItem('', 'Users', '', '', null),
    new SidenavMenuItem('', 'Non-employee access', '', '', null),
    new SidenavMenuItem('', 'Roles', '', '', null),
    new SidenavMenuItem('', 'Data Access Groups', '', '', null),
    new SidenavMenuItem('', 'DD Groups', '', '', null)
  ];

  color = '';
  /* Custom menu structure */
   toolbarItems = [
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
          text: 'Wijmo Table',
          link: 'wijmotable'
          // could show keyboard command - or whatever we want extraText: 'Ctrl+O'
        },
        {
          text: 'Wijmo Grid',
          link: 'wijmogrid'
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
          link: ''
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




  constructor() { }

  ngOnInit() {
  }


}



