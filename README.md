# 2048
A small open-source implementation of the 2048 puzzle game.

Made just for fun. [Play it here!](https://wolfesteinabhi.github.io/2048/)

Play directly in your browser using the project page above.

### Contributions

[Anna Harren](https://github.com/iirelu/) and [sigod](https://github.com/sigod) are maintainers for this repository.

Other notable contributors:

 - [TimPetricola](https://github.com/TimPetricola) added best score storage
 - [chrisprice](https://github.com/chrisprice) added custom code for swipe handling on mobile
 - [marcingajda](https://github.com/marcingajda) made swipes work on Windows Phone
 - [mgarciaisaia](https://github.com/mgarciaisaia) added support for Android 2.3

Many thanks to [rayhaanj](https://github.com/rayhaanj), [Mechazawa](https://github.com/Mechazawa), [grant](https://github.com/grant), [remram44](https://github.com/remram44) and [ghoullier](https://github.com/ghoullier) for the many other good contributions.

### Screenshot

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png" alt="Screenshot"/>
</p>

That screenshot is fake, by the way. I never reached 2048 :smile:


## GitHub Pages deployment
This repository is a static web app and can be published directly with GitHub Pages.

- Repository URL: `https://github.com/wolfesteinabhi/2048`
- Live URL: `https://wolfesteinabhi.github.io/2048/`

If you see **"404 There isn't a GitHub Pages site here"**, run through this checklist:

1. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push/merge your commit to `main` or `master` (deployment is intentionally restricted to these branches to satisfy `github-pages` environment protection rules).
3. Open the **Actions** tab and confirm the **Deploy static site to GitHub Pages** workflow succeeds.
4. Wait 1–2 minutes and refresh `https://wolfesteinabhi.github.io/2048/`.

You can also manually trigger a deployment from **Actions → Deploy static site to GitHub Pages → Run workflow** (run it against `main`/`master`).

## Contributing
Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into `master`! If you can, please make sure the game fully works before sending the PR, as that will help speed up the process.

You can find the same information in [CONTRIBUTING.md](CONTRIBUTING.md).

## License
2048 is licensed under the [MIT license](LICENSE.txt).
