## Static Site Hero

Static website generators allow you to write your web content in Markdown with YAML metadata and then render out the site as plain HTML, CSS and JavaScript.

This approach doesn't work well for truly dynamic sites, but works great for static content like blogs where the content only changes when you publish something new.

To get the most out of your static site generator, you need a trusty text editor tricked out with extensions and snippets to help you.

### Static Site Hero to the Rescue

Static Site Hero is an extension for Visual Studio Code that adds some functions to help you along.

* Insert image or link
* Insert figure tag

More helpers will be added as I think of them.

I started this project to go along with my Pluralsight course Hacking VS Code: Write Your First Extension for Visual Studio Code.

## Install

In VS Code just hit `F1` and then type `ext` and then `static` and select Static Site Hero.

## Inserting Figures or Links

There are currently two functions.

### Insert Image or File Link

If you are in Windows or Linux hit `ctrl` + `shift` + `L`.

If you are on a Mac hit `cmd` + `shift` + `L`.

Just type in the file name and hit `enter`.

### Insert Figure Tag

If you are in Windows or Linux hit `ctrl` + `shift` + `F`.

If you are on a Mac hit `cmd` + `shift` + `F`.

This is a wizard, so just follow through the steps.

1. Enter the file name
1. Enter the caption text
1. Select the alignment
1. Select the width

That's it!

### Configuration

Under User Preferences you can override the following configuration settings:

```
	//-------- Static Site Hero Configuration --------

	// Specifies the folder containing images.
	"staticSiteHero.imagePathTemplate": "/images/${year}/${month}/",

	// Specifies the folder containing files.
	"staticSiteHero.filePathTemplate": "/files/${year}/${month}/",

	// Array of strings representing possible CSS Classes for width
	"staticSiteHero.widthCssClasses": [
		"full-width",
		"half-width",
		"quarter-width"
	],

	// Array of strings representing possible CSS Classes for alignment
	"staticSiteHero.alignmentCssClasses": [
		"left",
		"right"
	]
```

   ## Update Log
   ### 1.0.0
   Initial Publication