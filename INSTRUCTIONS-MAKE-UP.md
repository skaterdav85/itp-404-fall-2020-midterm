# Fall 2020 ITP 404 Midterm

Rebuild the following music application with React and [React Router](https://reacttraining.com/react-router/web/guides/quick-start):

https://itp404-2020-make-up-midterm.surge.sh/

You are not allowed to use any other libraries.

## Setup

1. Create a new React app with Create React App
2. Install [React Router](https://reactrouter.com/)
3. Run `npm start`
4. Start coding

## Workflow Tips

I highly recommend that you periodically commit once you complete a requirement or get something working. If at any point you want to undo all changes since the last commit, you can run `git reset --hard`.

If you'd like to see all the changes since the last commit, you can run `git diff` or click on the Source Control icon in Visual Studio Code.

## Styling

You can style your app however you want, but it should have a similar layout as mine. I used Bootstrap. If you'd like to use Bootstrap, add the following stylesheet to `public/index.html` in between the `head` tags:

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>
```

I also created a static HTML page on JSBin if you'd like to use that as a guide: https://jsbin.com/zurenuxuwo/edit?html,output. **DO NOT COPY THE CONTENTS OF THIS FILE AND PASTE IT IN `public/index.html`.** You can also look at the Elements panel in Chrome Dev Tools on the sample application.

## Requirements

### The Left Navigation

The left navigation has 2 sections. The first section has 1 link for Library. This will link to the `/` route. Underneath that, there is a list of playlists loaded from https://chinook-api.herokuapp.com/api/playlists. Each playlist should link to a route `/playlists/:id/tracks` where `:id` is replaced with that playlist's `id`.

Make sure that all links have a unique style when their route is active. Only one link should be shown as active at a time.

### The Library Page

Display tracks from the endpoint `GET /api/tracks?page=<page number here>`. For example, the tracks for page 1 can be found at https://chinook-api.herokuapp.com/api/tracks?page=1.

Display the total number of pages found in the `meta.pages` property.

Display the following track properties in a table:

- `name`
- `milliseconds` formatted as "X minutes and Y seconds". Hint: There are 1000 milliseconds in 1 second and 60 seconds in 1 minute. You will need to use `Math.floor` and the [modulus (remainder) operator](https://www.w3schools.com/js/js_arithmetic.asp). If you are not sure how to write a function that computes this, skip it for now, display `milliseconds` as is, and come back to it at the end.

Next, build out the pagination feature so that users can jump to a specific page. If a user selects a page number that is out of range, display "Out of page range". You should not hardcode the total number of pages in your application. Instead, leverage `meta.pages`.

### Playlist Pages

When a user clicks on a playlist in the left navigation, fetch and display tracks for that playlist from the API `GET /api/playlists/:id`. For example, the tracks for playlist 1 can be found at this endpoint: https://chinook-api.herokuapp.com/api/playlists/1 under the `included` key.

Display the following track properties in a table:

- `name`
- `milliseconds` formatted as "X minutes and Y seconds". Again, if you are not sure how to write a function that computes this, skip it for now, display `milliseconds` as is, and come back to it at the end.

If a playlist doesn't have any tracks, display to the user "No tracks found". For example, Movies doesn't have any tracks: https://chinook-api.herokuapp.com/api/playlists/2. Notice how there isn't an `included` key.

Also display the name of the playlist above the table. The playlist name should should regardless if that playlist has tracks or not.

Be sure that the list of tracks updates when changing between playlists.

Lastly, if you manually change the playlist ID in the URL to something that doesn't exist such as 55555555, the `GET /api/playlists/:id` endpoint will return a 404. Please display an error message that says "Playlist not found" on the page when this happens like the following: https://itp404-2020-midterm.surge.sh/playlists/55555555/tracks.

### Hiding Playlists

Next to each playlist, display a button that says "(hide)". When this button is clicked, remove that playlist from the left navigation.

### Loading States

Whenever an AJAX call is pending, display a loading indicator. This includes:

- Clicking on a playlist in the left navigation
- Clicking on Library in the left navigation
- Changing the page number on the Library page

### 404 Page

If a user navigates to a route that doesn't exist, display "Page not found.".
