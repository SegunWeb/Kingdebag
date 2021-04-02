const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify-es").default;
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const merge = require("merge-stream");
const workboxBuild = require("workbox-build");
const markdown = require('gulp-markdown');
const babel = require("gulp-babel");
const autoprefixer = require("gulp-autoprefixer");

let pages = [

  {
    name: "homepage",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/homepage.js",
    ],
  },

  {
    name: "financial-review",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/financial-review.js",
    ],
  },

  {
    name: "article",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/js/main.js",
      "./src/js/article.js",
    ],
  },
  {
    name: "article_detail",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/js/main.js",
      "./src/js/article_detail.js",
    ],
  },

  {
    name: "planet",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/planet.js",
    ],
  },
  {
    name: "global",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/global.js",
    ],
  },
  {
    name: "innovation",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/innovation.js",
    ],
  },
  {
    name: "completing",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/completing.js",
    ],
  },
  {
    name: "renovation",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/renovation.js",
    ],
  },

  {
    name: "circularity",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/circularity.js",
    ],
  },

  {
    name: "carbon",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/carbon.js",
    ],
  },

  {
    name: "lifestyle",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/lifestyle.js",
    ],
  },

  {
    name: "business",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/business.js",
    ],
  },

  {
    name: "governance",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/libs/slider/slick.min.js",
      "./src/js/main.js",
      "./src/js/governance.js",
    ],
  },


  {
    name: "policy",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/js/main.js",
      "./src/js/policy.js",
    ],
  },

  {
    name: "values",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/js/main.js",
      "./src/js/values.js",
    ],
  },
  {
    name: "chairmans-introduction",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/js/main.js",
      "./src/js/chairmans-introduction.js",
    ],
  },
  {
    name: "chairmans-statement",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/js/main.js",
      "./src/js/chairmans-statement.js",
    ],
  },

  {
    name: "ceo",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
      "./src/js/main.js",
      "./src/js/ceo.js",
    ],
  },
  {
    name: "404",
    scripts: [
      "./src/libs/jquery/jquery.min.js",
    ],
  },



];

// let scssHeads = pages.map(({ name }) => `./src/scss/${name}/${name}-head.scss`);
let scssBodyes = pages.map(({ name }) => `./src/scss/${name}/${name}.scss`);

// Generate css
gulp.task("scss", function () {
  return gulp
      .src([...scssBodyes])
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } }))
      .pipe(gulp.dest("./_site/src/css"));
});

/*
 Uglify our javascript files into one.
 Use pump to expose errors more usefully.
*/
gulp.task("js", function () {
  let tasks = pages.map(({ name, scripts }) => {
    return gulp
        .src(scripts)
        .pipe(
            babel({
              presets: ["@babel/env"],
            })
        )
        .pipe(uglify())
        .pipe(concat(`${name}.js`))
        .pipe(gulp.dest("./_site/src/js"));
  });

  return merge(tasks);
});

gulp.task("fonts", function () {
  return gulp.src("./src/fonts/*/*.*").pipe(gulp.dest("./_site/src/fonts"));
});

gulp.task("config", function () {
  return gulp.src("./admin/config.*").pipe(gulp.dest("./_site/admin/"));
});

let folders = [
    "./_site/",

    "./_site/terms",
    "./_site/privacy",
    "./_site/cookies",
    "./_site/our-thinking",

    "./_site/megatrends/carbon-in-construction",
    "./_site/megatrends/changing-lifestyle",
    "./_site/megatrends/circularity",
    "./_site/megatrends/renovation",

    "./_site/governance",
    "./_site/governance/ceo",

    "./_site/financial-review",
    "./_site/financial-review/chairmans-statement",

    "./_site/business-strategy",
    "./_site/business-strategy/values",
    "./_site/business-strategy/pillar/completing-the-envelope",
    "./_site/business-strategy/pillar/global",
    "./_site/business-strategy/pillar/innovation",
    "./_site/business-strategy/pillar/planet-passionate"
];



gulp.task("manifest", function () {
  let tasks = folders.map(( path ) => {
    return gulp
        .src("./manifest.json")
        .pipe(gulp.dest(`${path}`))
  });

  return merge(tasks);


});

gulp.task("robots", function () {
  return gulp.src("./robots.txt").pipe(gulp.dest("./_site/"));
});

gulp.task("sitemap", function () {
  return gulp.src("./sitemap.xml").pipe(gulp.dest("./_site/"));
});

gulp.task("assets", function () {
  return gulp.src("./src/assets/*.*").pipe(gulp.dest("./_site/src/assets"));
});

gulp.task("libs", function () {
  return gulp
      .src("./src/libs/lazy-load/*.js")
      .pipe(gulp.dest("./_site/src/js"));
});

gulp.task("icons", function () {
  return gulp
      .src("./src/image/**/**.*")
      .pipe(gulp.dest("./_site/src/image/"));
});

gulp.task("buildSW", () => {
  return workboxBuild.generateSW({
    globDirectory: "_site",
    globPatterns: ["**/*.{html,eot,ttf,woff,woff2,js,css}"],
    swDest: "_site/sw.js",
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 10,
          },
        },
      },
    ],
  });
});

/*
  Watch folders for changess
*/
gulp.task("watch", function () {
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("js"));
  gulp.watch("./src/js/*.js", gulp.parallel("js"));
});

gulp.task('mark', function () {
  return gulp.src('./our-thinking/*.md')
      .pipe(markdown())
      .pipe(gulp.dest('./_site/our-thinking/*'))
});



/*
  Let's build this sucker.
*/
gulp.task("build", gulp.parallel("mark","scss", "fonts", "js", "libs", "icons", "config", "manifest", "robots", "sitemap", "assets"));
