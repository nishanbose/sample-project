/**
 * Created by dev on 13/09/15.
 */

// Custom Setting Field

Settings.addField({
  fieldName: "customSettingsField",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "customGroup"
    }
  }


  //,
  //linkedinPage: {
  //  type: String,
  //  optional: true,
  //  autoform: {
  //    group: "07_integrations"
  //  }
  //},
  //
  //authMethods: {
  //  type: [String],
  //  optional: true,
  //  autoform: {
  //    group: 'auth',
  //    editable: true,
  //    noselect: true,
  //    options: [
  //      {
  //        value: 'email',
  //        label: 'Email/Password'
  //      },
  //      {
  //        value: 'twitter',
  //        label: 'Twitter'
  //      },
  //      {
  //        value: 'facebook',
  //        label: 'Facebook'
  //      },
  //      {
  //        value: 'linkedin',
  //        label: 'LinkedIn'
  //      }
  //    ],
  //    instructions: 'Authentication methods (default to email only)'
  //  }
  //}
  //


});


