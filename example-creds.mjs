//save real WP login credentials locally, and be CERTAIN to add this to your .gitignore
//This is simply to show how the creds file should look 
const Creds = {
  'site-alias1': {
    'url': 'https://example.com/wp-login.php',
    'user': 'someuser',
    'pass': 'somepassword'
  },
  'site-alias2': {
    'url': 'https://example2.com/wp-login.php',
    'user': 'anotheruser',
    'pass': 'anotherpassword'
  }
}

export default Creds;
