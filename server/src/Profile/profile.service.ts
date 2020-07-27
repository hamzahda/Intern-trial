import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import Profile from './profile';

import { Repository } from 'typeorm';
const { Builder } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");

// login data

var adress = '' 
var pword = ''  


@Injectable()
export class ProfileService {

  constructor(
    @Inject('PROFILE_REPOSITORY')
    private readonly profileRepository: Repository<Profile>,
  ) { }

  /**
   * fetch the profile data for the requested user using the profile url
   */
  async get(url: string): Promise<Profile> {
    const profile = await this.profileRepository.findOne({
      where: {
        url: url,
      },
    });
    if (!profile) {
      throw new NotFoundException(`profile "${url}" is not in the db`);
    }
    return profile;
  }

  /**
   * scrappe the data using the given url
   */
  async save(data) {

    const driver = await new Builder()
      .forBrowser('firefox')
      .build();
    var cn = this
    await driver.get("https://www.linkedin.com/login/")
      .then(async function () {
        var field = await driver.findElement(webdriver.By.css('#username'))
        field.sendKeys(adress)
        field = await driver.findElement(webdriver.By.css('#password'))
        field.sendKeys(pword)
        field = await driver.findElement(webdriver.By.css('html.artdeco body.system-fonts div#app__container main.app__content div form.login__form div.login__form_action_container button.btn__primary--large.from__button--floating'))
        await field.click()
        driver.sleep(100)
        driver.get(data.data).then(async function () {
          var name = await driver.findElement(webdriver.By.css('/html/body/div[9]/div[3]/div/div/div/div/div[2]/main/div[1]/section/div[2]/div[2]/div[1]/ul[1]/li[1]')).getText()
          var job = await driver.findElement(webdriver.By.css('html.artdeco.windows body.render-mode-BIGPIPE.nav-v2.theme.theme--classic.ember-application.boot-complete.icons-loaded div.application-outlet div.authentication-outlet div#profile-content.extended div.body div#profile-wrapper.pv-profile-wrapper.pv-profile-wrapper--below-nav div#ember46.self-focused.ember-view div.pv-content.profile-view-grid.neptune-grid.two-column.ghost-animate-in main.core-rail div#ember49.ember-view section#ember51.pv-top-card.artdeco-card.ember-view div.ph5.pb5 div.display-flex.mt2 div.flex-1.mr5 h2.mt1.t-18.t-black.t-normal.break-words')).getText()
          var city = await driver.findElement(webdriver.By.css('html.artdeco.windows body.render-mode-BIGPIPE.nav-v2.theme.theme--classic.ember-application.boot-complete.icons-loaded div.application-outlet div.authentication-outlet div#profile-content.extended div.body div#profile-wrapper.pv-profile-wrapper.pv-profile-wrapper--below-nav div#ember46.self-focused.ember-view div.pv-content.profile-view-grid.neptune-grid.two-column.ghost-animate-in main.core-rail div#ember49.ember-view section#ember51.pv-top-card.artdeco-card.ember-view div.ph5.pb5 div.display-flex.mt2 div.flex-1.mr5 ul.pv-top-card--list.pv-top-card--list-bullet.mt1 li.t-16.t-black.t-normal.inline-block')).getText()
          var url = data.data
          await cn.profileRepository.save(new Profile(name, city, url, job))
        }
        ).catch(s =>
          console.log(s, 'error profile')
        )
      }).catch(s =>
        console.log(s, 'error login')
      )
  }
}
