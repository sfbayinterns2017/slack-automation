Slack Invite Automation

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
## Settings

You can set variables for your own purpose in `config.js` or environment variables.

### `config.js`

Fill out `config.js` as your infomation.

* `community`: Your community or team name to display on join page.
* `slackUrl` : Your Slack team url (ex.: sfbayareinterns2018.slack.com)
* `slacktoken` : Your access token for Slack.
  - You can generate it in <https://api.slack.com/web#auth>.
  - **You should generate the token in admin user, not owner.**
  If you generate the token in owner user, a `missing_scope` error may occur.
* `locale`: Application language (currently `de`, `en`, `es`, `fr`, `ja`, `ko`, `pl`, `pt`, `pt-BR`, `tr`, `zh-CN` and `zh-TW` available).
* `airtableKey`: Your Airbase API key if you want Airtable integration. See info on how to get a base id and api key here: <http://help.grow.com/connecting-your-data-internal-and-project-management/airtable/airtable-how-to-connect>
* `airtableBaseId`: The Airtable Base ID that you want the form results to be recorded into.

### Environment Variables
You can set environment variables directly or in `.env` file.
If you want to use a `.env` file, create a file in the root called `.env` with the following key/value pairs.
(`.env` files are added to the `.gitignore`.)

- `COMMUNITY_NAME` : Your community or team name to display in the title tag.
- `SLACK_URL` : Your Slack team url (ex.: sfbayareinterns2018.slack.com)
- `SLACK_TOKEN` : Your access token for Slack.
  - You can generate it in <https://api.slack.com/web#auth>.
  - **You should generate the token as an admin user, not owner.**
  If you generate the token in owner user, a `missing_scope` error may occur.
- `INVITE_TOKEN`: An optional security measure - if it is set, then that token will be required to get invited.
- `LOCALE`: Application language (currently `de`, `en`, `es`, `fr`, `ja`, `ko`, `pl`, `pt`, `pt-BR`, `tr`, `zh-CN` and `zh-TW` available).
- `AIRTABLE_API_KEY`: Your Airbase API key if you want Airtable integration. See info on how to get a base id and api key here: <http://help.grow.com/connecting-your-data-internal-and-project-management/airtable/airtable-how-to-connect>
- `AIRTABLE_BASE_ID`: The Airtable Base ID that you want the form results to be recorded into.

## Run
[Node.js](http://nodejs.org/) is required.

```shell
$ git clone git@github.com/sfbayinterns2018/slack-automation
$ cd slack-automation
$ npm install
$ npm start
```

You can access <http://localhost:3000> on your web browser.
