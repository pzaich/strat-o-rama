console.log("seed")

const puppeteer = require('puppeteer')

const year = process.argv[2]

const base_path = 'https://www.baseball-reference.com/leagues/MLB'
const standard_pitching_url = `${base_path}/${year}-standard-pitching.shtml`
const standard_batting_url = `${base_path}/${year}-standard-batting.shtml`
const standard_fielding_url = `${base_path}/${year}-standard-fielding.shtml`
const batting_pitching_url = `${base_path}/${year}-batting-pitching.shtml`

const pageConfigurations = [
  {
    url: standard_pitching_url,
    table_id: 'players_standard_pitching',

  },
  csv_players_standard_pitching
  {
    url: standard_pitching_url,
    table_id: 'players_standard_batting'
  },
  {
    url: standard_fielding_url,
    table_id: 'players_players_standard_fielding_fielding'
  },
  {
    url: batting_pitching_url,
    table_id: 'players_batting_pitching'
  }
]

pageConfigurations.forEach(({ url, table_id}) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  csv_el = page.document.getElementById('csv_' + table_id)

  await page.goto(path);
})


