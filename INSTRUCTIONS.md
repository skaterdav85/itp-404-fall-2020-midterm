# Fall 2019 ITP 404 Midterm

Rebuild the following music application with React and [React Router](https://reacttraining.com/react-router/web/guides/quick-start):

https://itp404-2019-midterm.surge.sh

You are not allowed to use any other libraries.

## Setup

1. Create a new React app with Create React App
2. Install React Router
3. Run `npm start`
4. Start coding

## Workflow Tips

I highly recommend that you periodically commit once you complete a requirement or get something working. If at any point you want to undo all changes since the last commit, you can run `git reset --hard`.

If you'd like to see all the changes since the last commit, you can run `git diff` or click on the Source Control icon in Visual Studio Code.

## Styling

You can style your app however you want, but it should have a similar layout as mine. I used Bootstrap. If you'd like to use Bootstrap, add the following stylesheet to `public/index.html` in between the `head` tags:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
```

I also created a static HTML page on JSBin if you'd like to use that as a guide: https://jsbin.com/zurenuxuwo/edit?html,output. __DO NOT COPY THE CONTENTS OF THIS FILE AND PASTE IT IN `public/index.html`.__ You can also look at the Elements panel in Chrome Dev Tools on the sample application.

## Requirements

### The Left Navigation

The left navigation has 2 sections. The first section has 1 link for Library. This will link to the `/` route. Underneath that, there is a list of playlists loaded from https://chinook-api.herokuapp.com/api/playlists. Each playlist should link to a route `/playlists/:id/tracks` where `:id` is replaced with that playlist's `id`.

Make sure that all links have a unique style when their route is active. In my application, I simply made active links have an underline. You will find the following resources helpful for making the Library link display the active state correctly:

* [NavLink exact](https://reacttraining.com/react-router/web/api/NavLink/exact-bool)
* [Route exact](https://reacttraining.com/react-router/web/api/Route/exact-bool)

### The Library Page

Display tracks from the endpoint `GET /api/tracks?page=<page number here>`. For example, the tracks for page 1 can be found at https://chinook-api.herokuapp.com/api/tracks?page=1.

Display the total number of pages found in the `meta.pages` property.

Display the following track properties in a table:

* `name`
* `milliseconds` formatted as "X minutes and Y seconds". Hint, you will need to use `Math.floor` and the modulus operator. If you are not sure how to write a function that computes this, skip it for now and come back to it at the end.

Next, build out the pagination feature so that users can jump to a specific page. If a user selects a page number that is out of range, display "No tracks found".

### Playlist Pages

When a user clicks on a playlist in the left navigation, fetch and display tracks for that playlist from the API `GET /api/playlists/:id`. For example, the tracks for playlist 1 can be found at this endpoint: https://chinook-api.herokuapp.com/api/playlists/1 under the `included` key.

Display the following track properties in a table:

* `name`
* `milliseconds` formatted as "X minutes and Y seconds". Hint, you will need to use `Math.floor` and the modulus operator. If you are not sure how to write a function that computes this, skip it for now and come back to it at the end.

If a playlist doesn't have any tracks, display to the user "No tracks found". For example, Movies doesn't have any tracks: https://chinook-api.herokuapp.com/api/playlists/2. Notice how there isn't an `included` key.

Also display the name of the playlist above the table.

Be sure that the list of tracks updates when changing between playlists.

### Loading States

Whenever an AJAX call is pending, display a loading indicator. This includes:

* Clicking on a playlist in the left navigation
* Clicking on Library in the left navigation
* Changing the page number on the Library page

### 404 Page

If a user navigates to a route that doesn't exist, display "Page not found.".

### Deploying

```
npm run build
cd build
mv index.html 200.html
surge
```

Paste your Surge URL at the top of the README.md of your repo.

### Submission

Submit your repo to https://classroom.github.com/a/fj_0NO_U.
