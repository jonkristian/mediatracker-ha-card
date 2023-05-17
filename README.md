# Media Tracker Card

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE)
[![hacs][hacs-badge]][hacs-url]
![Project Maintenance][maintenance-shield]
[![BuyMeCoffee][buymecoffeebadge]][buymecoffee]

This card is made to work with the [Media Tracker](https://github.com/jonkristian/mediatracker-ha) custom component which uses the awesome [Media Tracker](https://github.com/bonukai/MediaTracker) platform. You will have to install and configure those first if you want to use this card.

### Features

- 🛠 Editor (no need to edit `yaml`)
- 🌎 Internationalization
- 😍 Customize output with backdrops and human readable times
- 🌓 Light and dark theme support

## Installation

### HACS

Media Tracker Card can be installed through [HACS][hacs] (Home Assistant Community Store).

1. Install HACS if you don't have it already
2. Open HACS in Home Assistant
3. Go to "Frontend" section
4. Add this repo to Custom Repositories
5. Search for "Media Tracker Card"

### Manual

1. Download `mediatracker-card.js` file from the [latest-release].
2. Put `mediatracker-card.js` file into your `config/www` folder.
3. Add reference to `mediatracker-card.js` in Dashboard. There's two way to do that:
   - **Using UI:** _Settings_ → _Dashboards_ → _More Options icon_ → _Resources_ → _Add Resource_ → Set _Url_ as `/local/mediatracker-card.js` → Set _Resource type_ as `JavaScript Module`.
     **Note:** If you do not see the Resources menu, you will need to enable _Advanced Mode_ in your _User Profile_
   - **Using YAML:** Add following code to `lovelace` section.
     ```yaml
     resources:
       - url: /local/mediatracker-card.js
         type: js
     ```

---

## Card options

| Field                    | Type                | Description                                                         |
| -----------------        | ------------------- | ------------------------------------------------------------------- |
| custom:mediatracker-card | `string(required)`  |
| name                     | `string`            | Name of the card                                                    |
| entities                 | `list(required)`    | A list of entity IDs or entity objects, see below.                  |
| number_of_days           | `integer(required)` | How many days ahead you want to fetch.                              |
| refresh_interval         | `integer(required)` | How often the calendar should refresh.                              |
| show_description         | `boolean`           | Show calendar entry description if returned from `mediatracker-ha`. |
| constrict_height         | `boolean`           | Sets a predetermined card height and adds an inline scroll.         |
| human_readable           | `string`            | Show human readable upcoming days instead of day name.              |
| show_backdrop            | `boolean`           | Show calendar entries with  backdrop graphics.                      |

## Entity options

| Field               | Type               | Description                                           |
| ------------------- | ------------------ | ----------------------------------------------------- |
| entity              | `string(required)` | Home Assistant entity ID.                             |
| name                | `string`           | Overrides friendly name.                              |


## This card is inspired by
- The default Home Assistant calendar card.
- [Atomic Calendar Revive](https://github.com/totaldebug/atomic-calendar-revive/)

## Contributions are welcome!

---

⭐️ this repository if you found it useful ❤️

[![BuyMeCoffee][buymecoffebadge2]][buymecoffee]

<!-- Badges -->

[buymecoffee]: https://www.buymeacoffee.com/jonkristian
[buymecoffeebadge]: https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?style=for-the-badge
[buymecoffebadge2]: https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/white_img.png
[hacs-url]: https://github.com/hacs/integration
[hacs-badge]: https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/
[license-shield]: https://img.shields.io/github/license/jonkristian/mediatracker-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Jon%20Kristian%20Nilsen%20%40jonkristian-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/jonkristian/mediatracker-card.svg?style=for-the-badge
[releases]: https://github.com/jonkristian/mediatracker-card/releases

<!-- References -->

[hacs]: https://hacs.xyz
[exampleimg]: example.png
